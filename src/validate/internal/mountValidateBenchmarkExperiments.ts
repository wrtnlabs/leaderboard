import fs from "node:fs";
import typia from "typia";

import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";
import type { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";

export const mountValidateBenchmarkExperiments = async (): Promise<
	IValidateBenchmarkResult.IExperiment[]
> => {
	const collection: IValidateBenchmarkResult.IExperiment[] = [];
	for (const file of await fs.promises.readdir(
		`${import.meta.dirname}/../scenarios`,
	)) {
		if (file.endsWith(".js") === false) continue;
		const location: string = `${import.meta.dirname}/../scenarios/${file}`;
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
