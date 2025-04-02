import OpenAI from "openai";

export interface IBenchmarkVendor {
  api: OpenAI;
  model: OpenAI.ChatModel | ({} & string);
  options?: OpenAI.RequestOptions | undefined;
}
