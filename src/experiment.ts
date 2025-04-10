import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";
import type { ILlmSchema } from "@samchon/openapi";
import { consola } from "consola/basic";
import esMain from "es-main";

import { reportsDir } from "./constants";
import { main } from "./index";

type Model = `${string}/${string}`;

function checkReportAvailable(model: Model): {
	path: string;
	available: boolean;
} {
	const reportPath = path.join(
		reportsDir,
		`${model.replaceAll("/", "-")}.json`,
	);
	return {
		available: fs.existsSync(reportPath),
		path: reportPath,
	};
}

const MODELS = [
	// OpenAI
	{
		model: "openai/gpt-4o-2024-08-06",
		schemaModel: "chatgpt",
	},
	{
		model: "openai/gpt-4o-2024-11-20",
		schemaModel: "chatgpt",
	},
	{
		model: "openai/gpt-4o-mini-2024-07-18",
		schemaModel: "chatgpt",
	},
	{
		model: "openai/o3-mini-2025-01-31",
		schemaModel: "chatgpt",
	},
	// Anthropic
	{
		model: "anthropic/claude-3.5-sonnet",
		schemaModel: "claude",
	},
	{
		model: "anthropic/claude-3.7-sonnet",
		schemaModel: "claude",
	},
	// Google Gemini
	{
		model: "google/gemini-pro-1.5",
		schemaModel: "gemini",
	},
	{
		model: "google/gemini-2.0-flash-001",
		schemaModel: "gemini",
	},
	// Meta LLaMA
	{
		model: "meta-llama/llama-3.3-70b-instruct",
		schemaModel: "llama",
	},
	{
		model: "meta-llama/llama-4-maverick",
		schemaModel: "llama",
	},
	{
		model: "meta-llama/llama-4-scout",
		schemaModel: "llama",
	},
	// Mistral
	{
		model: "mistralai/mistral-small-3.1-24b-instruct",
		schemaModel: "3.1",
	},
	// DeepSeek
	{
		model: "deepseek/deepseek-chat-v3-0324",
		schemaModel: "3.1",
	},
	{
		model: "deepseek/deepseek-r1",
		schemaModel: "3.1",
	},
] as const satisfies {
	model: Model;
	schemaModel: ILlmSchema.Model;
}[];

if (esMain(import.meta)) {
	for (const { model, schemaModel } of MODELS) {
		consola.info(`Model: ${model}`);
		consola.info(`Schema Model: ${schemaModel}`);

		const { available: reportAvailable, path: reportPath } =
			checkReportAvailable(model);

		if (reportAvailable) {
			consola.info(`Report available at ${reportPath}`);
			const overwrite = await consola.prompt(
				`Report for ${model} already exists. Do you want to overwrite it?`,
				{
					type: "confirm",
					initial: false,
				},
			);
			if (!overwrite) {
				consola.log(`Skipping ${model}...`);
				continue;
			}
		} else {
			consola.info(`Report not available for ${model}`);
		}

		// run the benchmark
		console.info(`Running benchmark for ${model}...`);
		try {
			await main(model, schemaModel);
		} catch (error) {
			consola.error(`Error running benchmark for ${model}: ${error}`);
			continue;
		}
		consola.success(`Benchmark for ${model} completed.`);
	}
}
