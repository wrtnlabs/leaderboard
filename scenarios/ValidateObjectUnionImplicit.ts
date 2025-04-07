import typia, { type tags } from "typia";

import { trim } from "../src/utils/trim";
import type { IValidateBenchmarkScenario } from "../src/validate/structures/IValidateBenchmarkScenario";

export const ObjectUnionImplicit = (): IValidateBenchmarkScenario => ({
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

interface IPoint {
	x: number;
	y: number;
}
interface ILine {
	p0: IPoint;
	p1: IPoint;
}
interface ICircle {
	center: IPoint;
	radius: number & tags.ExclusiveMinimum<0>;
}

interface ITriangle {
	p0: IPoint;
	p1: IPoint;
	p2: IPoint;
}
interface IRectangle {
	p0: IPoint;
	p1: IPoint;
	p2: IPoint;
	p3: IPoint;
}
interface IPolyline {
	points: IPoint[] & tags.MinItems<3>;
}
interface IPolygon {
	outer: IPolyline;
	inner: IPolyline[];
}
