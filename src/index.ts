import fs from "node:fs";
import path from "node:path";
import * as process from "node:process";

import { reportsDir } from "./constants";
import { openRouterClient } from "./utils/client";
import { ValidateBenchmark } from "./validate/ValidateBenchmark";

const mkdir = async (str: string) => {
	try {
		await fs.promises.mkdir(str, {
			recursive: true,
		});
	} catch {}
};
const rmdir = async (str: string) => {
	try {
		await fs.promises.rm(str, {
			recursive: true,
		});
	} catch {}
};

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

	const docs: Record<string, string> = benchmark.report();
	const root = path.join(reportsDir, "validate", benchmark.props.vendor.model);

	console.log({ docs });

	await rmdir(root);
	for (const [key, value] of Object.entries(docs)) {
		await mkdir(path.join(root, key.split("/").slice(0, -1).join("/")));
		await fs.promises.writeFile(path.join(root, key), value, "utf8");
	}
};

await main();
