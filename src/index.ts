import * as process from "node:process";

import type { ILlmSchema } from "@samchon/openapi";
import { consola } from "consola/basic";
import esMain from "es-main";

import { openRouterClient } from "./openai";
import { ValidateBenchmark } from "./validate/ValidateBenchmark";

export const main = async (
	model: string,
	schemaModel: ILlmSchema.Model,
): Promise<void> => {
	const benchmark: ValidateBenchmark = new ValidateBenchmark({
		vendor: {
			api: openRouterClient,
			model,
		},
		schemaModel,
		retry: 5, // validation feedback retry count
		repeat: 10, // how many times to repeat the experiment
		simultaneous: 100, // multi-threading like
	});
	if (benchmark.props.vendor.model === "") {
		console.error("Please set the OPENAI_MODEL environment variable.");
		process.exit(1);
	}

	await benchmark.execute((event) => {
		console.log(event.name, event.trial.type);
	});

	benchmark.report();
};

const model = process.env.OPENAI_MODEL ?? "gpt-3.5-turbo";
const schemaModel: ILlmSchema.Model =
	(process.env.SCHEMA_MODEL as ILlmSchema.Model) ?? "chatgpt";
consola.info(`Model: ${model}`);
consola.info(`Schema Model: ${schemaModel}`);

await main(model, schemaModel);
