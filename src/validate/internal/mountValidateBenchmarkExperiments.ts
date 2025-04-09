import fs from "node:fs";
import { extname, join, sep } from "node:path";
import { pathToFileURL } from "node:url";

import type { ILlmSchema } from "@samchon/openapi";
import { JS_LIKE_EXTENSIONS, scenarioDir } from "../../constants";
import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";
import type { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";

export const mountValidateBenchmarkExperiments = async (
	model: ILlmSchema.Model,
): Promise<IValidateBenchmarkResult.IExperiment[]> => {
	const collection: IValidateBenchmarkResult.IExperiment[] = [];
	for (const file of await fs.promises.readdir(scenarioDir)) {
		const extension: string = extname(file);
		if (JS_LIKE_EXTENSIONS.includes(extension) === false) {
			continue;
		}
		const location: string = pathToFileURL(join(scenarioDir, file)).toString();
		const modulo: IModulo = await import(location);
		for (const [key, value] of Object.entries(modulo))
			if (typeof value === "function") {
				const scenario: IValidateBenchmarkScenario = await value();
				if (scenario.application[model])
					collection.push({
						name: key,
						scenario: await value(),
						trials: [],
					});
			}
	}
	return collection;
};

interface IModulo {
	[key: string]: unknown;
}
