import type { ILlmFunction } from "@samchon/openapi";
import typia from "typia";

import { trim } from "benchmark/src/utils/trim";
import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";

export const ObjectFunctionSchema = (): IValidateBenchmarkScenario => ({
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
        Convert below function to schema, so that enroll to the application.

        \`\`\`ts
        /**
         * Draw a circle.
         * 
         * Draw a circle with the given center and radius.
         *
         * @param props Properties to draw the circle.
         */
        export function drawCircle(props: {
          type: "circle";
          center: {
            x: number;
            y: number;
          }
          radius: number & tags.Minimum<0>;
        }): void;
        \`\`\`
      `,
		},
	],
});

interface App {
	/**
	 * Enroll a function to the application with the given schema.
	 *
	 * @param p Properties to enroll the function.
	 */
	enrollFunction(p: {
		/**
		 * Function schema to enroll.
		 */
		schema: ILlmFunction<"chatgpt">;
	}): void;
}
