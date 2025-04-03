import fs from "node:fs";
import { extname, join } from "node:path";
import typia from "typia";

import { JS_LIKE_EXTENSIONS, scenarioDir } from "../../constants";
import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";
import type { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";

export const mountValidateBenchmarkExperiments = async (): Promise<
	IValidateBenchmarkResult.IExperiment[]
> => {
	const collection: IValidateBenchmarkResult.IExperiment[] = [];
	for (const file of await fs.promises.readdir(scenarioDir)) {
		const extension: string = extname(file);
		if (JS_LIKE_EXTENSIONS.includes(extension) === false) {
			continue;
		}
		const location: string = join(scenarioDir, file);
		const modulo: IModulo = await import(location);
		for (const [key, value] of Object.entries(modulo))
			if (typia.is<IValidateBenchmarkScenario>(value))
				collection.push({
					name: key,
					scenario: value,
					trials: [],
				});
	}
	return collection;
};

interface IModulo {
	[key: string]: unknown;
}
