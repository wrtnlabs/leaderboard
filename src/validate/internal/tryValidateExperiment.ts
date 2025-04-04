import type { ILlmFunction, ILlmSchema, IValidation } from "@samchon/openapi";
import type OpenAI from "openai";

import type { IBenchmarkVendor } from "../../common/IBenchmarkVendor";
import { trim } from "../../utils/trim";
import type { IValidateBenchmarkEvent } from "../structures/IValidateBenchmarkEvent";
import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";
import type { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";
import { decodeValidatePrompt } from "./decodeValidatePrompt";

export const tryValidateExperiment = async <
	Model extends ILlmSchema.Model,
>(props: {
	vendor: IBenchmarkVendor;
	name: string;
	scenario: IValidateBenchmarkScenario;
	function: ILlmFunction<Model>;
	retry: number;
	listener?: undefined | ((event: IValidateBenchmarkEvent) => void);
}): Promise<IValidateBenchmarkResult.ITrial> => {
	const trial: IValidateBenchmarkResult.ITrial = await process({
		...props,
		previous: [],
	});
	if (props.listener)
		props.listener({
			name: props.name,
			scenario: props.scenario,
			trial,
		});
	return trial;
};

const process = async <Model extends ILlmSchema.Model>(props: {
	vendor: IBenchmarkVendor;
	scenario: IValidateBenchmarkScenario;
	function: ILlmFunction<Model>;
	retry: number;
	previous: IValidateBenchmarkResult.ITrial.IFailure[];
}): Promise<IValidateBenchmarkResult.ITrial> => {
	const started_at: Date = new Date();
	const failure: IValidateBenchmarkResult.ITrial.IFailure | null =
		props.previous.at(-1) ?? null;
	try {
		const completion: OpenAI.ChatCompletion =
			await props.vendor.api.chat.completions.create({
				model: props.vendor.model,
				messages: [
					...(props.scenario.prompts.flatMap((prompt) =>
						decodeValidatePrompt(prompt),
					) satisfies OpenAI.ChatCompletionMessageParam[]),
					...(failure !== null
						? [
								{
									role: "assistant",
									tool_calls: [
										{
											type: "function",
											id: failure.id,
											function: {
												name: props.function.name,
												arguments: JSON.stringify(failure.arguments),
											},
										} satisfies OpenAI.ChatCompletionMessageToolCall,
									],
								} satisfies OpenAI.ChatCompletionAssistantMessageParam,
								{
									role: "tool",
									content: JSON.stringify(failure.result.errors),
									tool_call_id: failure.id,
								} satisfies OpenAI.ChatCompletionToolMessageParam,
								{
									role: "system",
									content: trim`
                  You A.I. assistant has composed wrong arguments.
                  
                  Correct it at the next function calling.
                `,
								} satisfies OpenAI.ChatCompletionSystemMessageParam,
							]
						: []),
				],
				tools: [
					{
						type: "function",
						function: {
							name: props.function.name,
							description: props.function.description as string,
							parameters: props.function
								.parameters as unknown as OpenAI.FunctionParameters,
						},
					},
				],
				tool_choice: "required",
				parallel_tool_calls: false,
			});

		const toolCall: OpenAI.ChatCompletionMessageToolCall | undefined =
			completion.choices
				.flatMap((choice) => choice.message.tool_calls ?? [])
				.find(
					(tc) =>
						tc.type === "function" && tc.function.name === props.function.name,
				);

		const base = {
			completion,
			started_at,
			completed_at: new Date(),
			previous: props.previous,
		};
		if (toolCall === undefined)
			return {
				type: "nothing",
				...base,
			};
		const parameterValues: Record<string, unknown> = JSON.parse(
			toolCall.function.arguments,
		);
		let result: IValidation<unknown> = props.function.validate(parameterValues);
		if (result.success === true && props.scenario.validate !== undefined)
			result = props.scenario.validate(parameterValues) ?? result;
		if (result.success === true)
			return {
				type: "success",
				id: toolCall.id,
				arguments: parameterValues,
				result,
				...base,
			};
		const output: IValidateBenchmarkResult.ITrial.IFailure = {
			type: "failure",
			id: toolCall.id,
			arguments: parameterValues,
			result,
			...base,
		};
		return props.retry === 0
			? output
			: process({
					...props,
					previous: [...props.previous, output],
					retry: props.retry - 1,
				});
	} catch (error) {
		return {
			type: "error",
			error:
				error instanceof Error
					? {
							...error,
							name: error.name,
							message: error.message,
						}
					: error,
			started_at,
			completed_at: new Date(),
			previous: props.previous,
		};
	}
};
