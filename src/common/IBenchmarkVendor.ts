import type OpenAI from "openai";

export interface IBenchmarkVendor {
	api: OpenAI;
	model: string; // originally OpenAI.ChatModel but we use openrouter
	options?: OpenAI.RequestOptions | undefined;
}
