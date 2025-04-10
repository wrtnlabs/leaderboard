import * as path from "node:path";
import * as process from "node:process";
import { Semaphore } from "@core/asyncutil/semaphore";
import { consola } from "consola/basic";
import esMain from "es-main";
import * as fs from "fs-extra/esm";
import { glob } from "tinyglobby";
import { reportsDir } from "./constants";

import type { JsonReport } from "./validate/structures/IReport";

type ApiResponse = {
	data: {
		id: string;
		total_cost: number;
		created_at: string;
		model: string;
		origin: string;
		usage: number;
		is_byok: boolean;
		upstream_id: string;
		cache_discount: number;
		app_id: number;
		streamed: boolean;
		cancelled: boolean;
		provider_name: string;
		latency: number;
		moderation_latency: number;
		generation_time: number;
		finish_reason: string;
		native_finish_reason: string;
		tokens_prompt: number;
		tokens_completion: number;
		native_tokens_prompt: number;
		native_tokens_completion: number;
		native_tokens_reasoning: number;
		num_media_prompt: number;
		num_media_completion: number;
		num_search_results: number;
	};
};

const CONCURRENCY = 10;
const COST_FILENAME = "costs.json";

const semaphore = new Semaphore(CONCURRENCY);

async function fetchGenerationAPI(id: string): Promise<ApiResponse> {
	// Get a generation (GET /generation)
	return await semaphore.lock(async () => {
		const response = await fetch(
			`https://openrouter.ai/api/v1/generation?id=${id}`,
			{
				method: "GET",
				headers: {
					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
				},
			},
		);

		const body = await response.json();
		return body as ApiResponse;
	});
}

/**
 * get reports and read json
 */
async function getIDs(): Promise<string[]> {
	const reports = await glob(path.join(reportsDir, "*.json"));
	const promises = reports
		// remove costs.json
		.filter((report) => report !== path.join(reportsDir, COST_FILENAME))
		.map(async (report) => {
			const data = (await fs.readJson(report)) as JsonReport;
			return data.experiments.flatMap((experiment) =>
				experiment.trials.map((trial) => trial.id),
			);
		});
	const ids = await Promise.all(promises);
	return ids.flat();
}

/**
 * get all costs
 */
async function getAllCosts(): Promise<ApiResponse[]> {
	const ids = await getIDs();
	const costs = await Promise.all(ids.map((id) => fetchGenerationAPI(id)));
	return costs;
}

/**
 * save costs to file
 */
async function saveCostsToFile(
	costs: ApiResponse[],
	filepath: string,
): Promise<void> {
	const filePath = path.join(reportsDir, filepath);
	await fs.writeJson(filePath, costs, { spaces: 2 });
}

if (esMain(import.meta)) {
	consola.info("Fetching costs...");
	const costs = await getAllCosts();
	await saveCostsToFile(costs, COST_FILENAME);
	consola.success("Costs saved to costs.json");
}
