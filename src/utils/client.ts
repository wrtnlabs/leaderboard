import process from "node:process";

import OpenAI from "openai";

// @see https://openrouter.ai/docs/community/frameworks
export const openRouterClient = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});
