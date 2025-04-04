import type { ILlmApplication, IValidation } from "@samchon/openapi";
import type { tags } from "typia";

import type { IValidateBenchmarkPrompt } from "./IValidateBenchmarkPrompt";

export interface IValidateBenchmarkScenario {
	application: {
		chatgpt: ILlmApplication<"chatgpt">;
		claude: ILlmApplication<"claude">;
		llama: ILlmApplication<"llama">;
		gemini: ILlmApplication<"gemini"> | null;
		"3.0": ILlmApplication<"3.0"> | null;
		"3.1": ILlmApplication<"3.1">;
	};
	prompts: IValidateBenchmarkPrompt[] & tags.MinItems<1>;
	validate?: (input: unknown) => undefined | IValidation.IFailure;
}
