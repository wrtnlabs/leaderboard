import * as scenarios from "@benchmark/scenarios";
import type { ILlmSchema } from "@samchon/openapi";
import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";
import type { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";

export const mountValidateBenchmarkExperiments = async (
	model: ILlmSchema.Model,
): Promise<IValidateBenchmarkResult.IExperiment[]> => {
	const collection: IValidateBenchmarkResult.IExperiment[] = [];
	for (const [name, scenarioFunc] of Object.entries(scenarios)) {
		const scenario: IValidateBenchmarkScenario = await scenarioFunc();
		if (scenario.application[model])
			collection.push({
				name,
				scenario,
				trials: [],
			});
	}
	return collection;
};
