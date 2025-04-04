import type {
	IHttpLlmFunction,
	ILlmFunction,
	ILlmSchema,
} from "@samchon/openapi";

export type IValidateBenchmarkPrompt =
	| IValidateBenchmarkPrompt.IText
	| IValidateBenchmarkPrompt.IToolCall;
export namespace IValidateBenchmarkPrompt {
	export interface IText {
		type: "text";
		role: "user" | "assistant";
		content: string;
	}
	export interface IToolCall {
		type: "tool_call";
		function:
			| ILlmFunction<ILlmSchema.Model>
			| IHttpLlmFunction<ILlmSchema.Model>;
		arguments: Record<string, unknown>;
		value: unknown;
	}
}
