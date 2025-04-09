import typia from "typia";

import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";
import { trim } from "./trim";

export const ObjectGeometry = (): IValidateBenchmarkScenario => ({
	application: {
		chatgpt: typia.llm.application<App, "chatgpt", { reference: true }>(),
		claude: typia.llm.application<App, "claude", { reference: true }>(),
		llama: typia.llm.application<App, "llama", { reference: true }>(),
		gemini: typia.llm.application<App, "gemini">(),
		"3.0": typia.llm.application<App, "3.0">(),
		"3.1": typia.llm.application<App, "3.1", { reference: true }>(),
	},
	prompts: [
		{
			type: "text",
			role: "user",
			content: trim`
        Draw a 3D box in the scene.

        Properties of the box is:
          - scale: (1, 1, 1)
          - position: (0, 0, 0)
          - rotate: (0, 0, 0)
          - pivot: (0, 0, 0)
      `,
		},
	],
});

interface App {
	/**
	 * Draw a 3D box in the scene.
	 *
	 * @param box The box to draw.
	 */
	drawBox3D: (box: IBox3D) => void;
}
interface IBox3D {
	scale: IPoint3D;
	position: IPoint3D;
	rotate: IPoint3D;
	pivot: IPoint3D;
}
interface IPoint3D {
	x: number;
	y: number;
	z: number;
}
