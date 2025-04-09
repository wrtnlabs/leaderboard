import path from "node:path";
import { outputJsonSync } from "fs-extra/esm";
import { reportsDir } from "../../constants";
import type { JsonReport, TrialStatus } from "../structures/IReport";
import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";

/**
 * Calculates the elapsed time for a trial in milliseconds
 * Uses either the first previous attempt or the trial's start time as the reference point
 * @param trial - The trial to calculate time for
 * @returns The elapsed time in milliseconds
 */
const getElapsedTime = (trial: IValidateBenchmarkResult.ITrial): number =>
	trial.completed_at.getTime() -
	(trial.previous[0]?.started_at ?? trial.started_at).getTime();

/**
 * Determines the status of a trial
 * For successful trials, returns the number of attempts (including the successful one)
 * For other trial types, returns the type itself
 * @param trial - The trial to determine status for
 * @returns The trial's status (number or string)
 */
const getTrialStatus = (
	trial: IValidateBenchmarkResult.ITrial,
): TrialStatus => {
	if (trial.type === "success") {
		return trial.previous.length + 1;
	}
	return trial.type;
};

/**
 * Sanitizes model names for use in filenames
 * Replaces slashes and colons with hyphens
 * @param modelName - The model name to sanitize
 * @returns A filename-safe version of the model name
 */
const sanitizeModelName = (modelName: string): string => {
	return modelName.replace(/\//g, "-").replace(/:/g, "-");
};

/**
 * Generates the output file path for the benchmark report
 * Creates a JSON filename based on the sanitized model name
 * @param modelName - The name of the model being benchmarked
 * @returns The full path where the report will be saved
 */
const getOutputFilePath = (modelName: string): string => {
	const sanitizedName = sanitizeModelName(modelName);
	return path.join(reportsDir, `${sanitizedName}.json`);
};

/**
 * Main function to generate and save a benchmark report as JSON
 * Takes benchmark result data and writes it to a JSON file
 * @param result - The benchmark test result to be reported
 */
export const reportValidateBenchmark = (
	result: IValidateBenchmarkResult,
): void => {
	const jsonData = convertToJsonFormat(result);
	const outputFilePath = getOutputFilePath(result.config.vendorModel);
	outputJsonSync(outputFilePath, jsonData, { spaces: 2 });
};

/**
 * Converts the benchmark result to a simplified JSON format
 * Extracts and structures the most relevant data for reporting
 * @param result - The full benchmark result
 * @returns A simplified JSON structure with the essential benchmark data
 */
const convertToJsonFormat = (result: IValidateBenchmarkResult): JsonReport => {
	return {
		config: {
			schemaModel: result.config.schemaModel,
			vendorModel: result.config.vendorModel,
			repeat: result.config.repeat,
		},
		experiments: result.experiments.map((exp) => ({
			name: exp.name,
			scenario: {
				prompts: exp.scenario.prompts,
			},
			trials: exp.trials.map((trial) => ({
				type: trial.type,
				status: getTrialStatus(trial),
				timeMs: getElapsedTime(trial),
				startedAt: trial.started_at,
				completedAt: trial.completed_at,
			})),
		})),
	};
};
