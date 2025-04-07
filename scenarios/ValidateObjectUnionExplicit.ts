import typia, { type tags } from "typia";

import { trim } from "benchmark/src/utils/trim";
import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";

export const ObjectUnionExplicit = (): IValidateBenchmarkScenario => ({
	application: {
		chatgpt: typia.llm.application<App, "chatgpt", { reference: true }>(),
		claude: typia.llm.application<App, "claude", { reference: true }>(),
		llama: typia.llm.application<App, "llama", { reference: true }>(),
		gemini: null,
		"3.0": typia.llm.application<App, "3.0">(),
		"3.1": typia.llm.application<App, "3.1", { reference: true }>(),
	},
	prompts: [
		{
			type: "text",
			role: "user",
			content: trim`
          Draw a canvas with "shape" filename and following shapes.

          At first, draw 5 points of below:

            - (0, 0),
            - (100, 50),
            - (200, 100),
            - (300, 150),
            - (400, 200)

          Then, draw a line between (0, 0) and (400, 200).

          After that, draw three circles with below:
            
            - center (100, 50) with radius 50
            - center (200, 100) with radius 100
            - center (300, 150) with radius 150

          At next, draw a triangle ((0, 0), (100, 50), (200, 100)).

          Then, draw two rectangle with below points:

            - (0, 0), (100, 50), (200, 100), (300, 150)
            - (100, 50), (200, 100), (300, 150), (400, 200)

          At last, draw a polygon with below points:

            - outer: (0, 0), (100, 50), (200, 100), (300, 150), (400, 200)
            - inner
              - (50, 25), (150, 75), (250, 125), (350, 175)
              - (75, 37), (175, 87), (275, 137), (375, 187)
        `,
		},
	],
});

interface App {
	/**
	 * Draw a canvas with given shapes.
	 *
	 * @param canvas Input canvas with shapes.
	 */
	drawShape(canvas: {
		/**
		 * Name of the canvas file.
		 */
		filename: string;

		/**
		 * List of shapes to draw.
		 */
		shapes: IShape[] & tags.MinItems<1>;
	}): void;
}

type IShape =
	| IPoint
	| ILine
	| ICircle
	| ITriangle
	| IRectangle
	| IPolyline
	| IPolygon;

interface IPoint extends IBase<"point"> {
	x: number;
	y: number;
}
interface ILine extends IBase<"line"> {
	p0: IPoint;
	p1: IPoint;
}
interface ICircle extends IBase<"circle"> {
	center: IPoint;
	radius: number & tags.ExclusiveMinimum<0>;
}

interface ITriangle extends IBase<"triangle"> {
	p0: IPoint;
	p1: IPoint;
	p2: IPoint;
}
interface IRectangle extends IBase<"rectangle"> {
	p0: IPoint;
	p1: IPoint;
	p2: IPoint;
	p3: IPoint;
}
interface IPolyline extends IBase<"polyline"> {
	points: IPoint[] & tags.MinItems<3>;
}
interface IPolygon extends IBase<"polygon"> {
	outer: IPolyline;
	inner: IPolyline[];
}

interface IBase<Type extends string> {
	/**
	 * Discriminator.
	 */
	type: Type;
}
