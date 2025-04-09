import fs from "node:fs";
import path from "node:path";
import * as process from "node:process";

import { reportsDir } from "./constants";
import { openRouterClient } from "./openai";
import { ValidateBenchmark } from "./validate/ValidateBenchmark";

const main = async (): Promise<void> => {
	const benchmark: ValidateBenchmark = new ValidateBenchmark({
		vendor: {
			api: openRouterClient,
			model: process.env.OPENAI_MODEL ?? "",
		},
		schemaModel: (process.env.SCHEMA_MODEL as "chatgpt") ?? "chatgpt",
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

await main();
