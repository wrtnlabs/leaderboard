import type { OpenApi } from "@samchon/openapi";
import typia from "typia";

import { trim } from "benchmark/src/utils/trim";
import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";

export const ObjectJsonSchema = (): IValidateBenchmarkScenario => ({
	application: {
		chatgpt: typia.llm.application<App, "chatgpt", { reference: true }>(),
		claude: typia.llm.application<App, "claude", { reference: true }>(),
		llama: typia.llm.application<App, "llama", { reference: true }>(),
		gemini: null,
		"3.0": null,
		"3.1": typia.llm.application<App, "3.1", { reference: true }>(),
	},
	prompts: [
		{
			type: "text",
			role: "user",
			content: trim`
        Convert below "IMember" type to JSON schema, and collect it for reusing.
        
        \`\`\`ts
        interface IMember {
          id: string & tags.Format<"uuid">;
          name: string;
          email: string & tags.Format<"email">;
          age: number & tags.Minimum<20> & tags.ExclusiveMaximum<100>;
          hobbies: Array<{
            id: string & tags.Format<"uuid">;
            name: string;
          }>;
          created_at: string & tags.Format<"date-time">;
          updated_at: string & tags.Format<"date-time">;
          deleted_at: null | (string & tags.Format<"date-time">);
        }
        \`\`\`
`,
		},
	],
});

interface App {
	/**
	 * Collect a JSON schema for reusing.
	 *
	 * @param info
	 */
	collectSchema(info: {
		/**
		 * JSON schema information.
		 */
		schema: Exclude<OpenApi.IJsonSchema, OpenApi.IJsonSchema.IReference>;
	}): void;
}
