import type {
	IHttpLlmFunction,
	ILlmFunction,
	ILlmSchema,
} from "@samchon/openapi";
import type OpenAI from "openai";
import { v4 } from "uuid";

import type { IValidateBenchmarkPrompt } from "../structures/IValidateBenchmarkPrompt";

export const decodeValidatePrompt = (
	prompt: IValidateBenchmarkPrompt,
): OpenAI.ChatCompletionMessageParam[] => {
	if (prompt.type === "text")
		return [
			{
				role: prompt.role,
				content: prompt.content,
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
						name: prompt.function.name,
						arguments: JSON.stringify(prompt.arguments),
					},
				},
			],
		},
		{
			role: "tool",
			tool_call_id: id,
			content: JSON.stringify({
				function: {
					method: (prompt.function as IHttpLlmFunction<ILlmSchema.Model>)
						.method,
					path: (prompt.function as IHttpLlmFunction<ILlmSchema.Model>).path,
					description: prompt.function.description,
					parameters: prompt.function.parameters,
					output: prompt.function.output,
				},
				value: prompt.value,
			}),
		},
	];
};
