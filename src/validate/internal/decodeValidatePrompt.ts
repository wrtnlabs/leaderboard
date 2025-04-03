import type { ILlmFunction } from "@samchon/openapi";
import type OpenAI from "openai";
import { v4 } from "uuid";

import type { IValidateBenchmarkPrompt } from "../structures/IValidateBenchmarkPrompt";

export const decodeValidatePrompt = (props: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	function: ILlmFunction<any>;
	prompt: IValidateBenchmarkPrompt;
}): OpenAI.ChatCompletionMessageParam[] => {
	if (props.prompt.type === "text")
		return [
			{
				role: props.prompt.role,
				content: props.prompt.content,
			},
		];

	const id: string = v4();
	return [
		{
			role: "assistant",
			tool_calls: [
				{
					type: "function",
					id,
					function: {
						name: props.function.name,
						arguments: JSON.stringify(props.prompt.arguments),
					},
				},
			],
		},
		{
			role: "tool",
			tool_call_id: id,
			content: JSON.stringify({
				function: {
					description: props.function.description,
					parameters: props.function.parameters,
					output: props.function.output,
				},
				value: props.prompt.value,
			}),
		},
	];
};
