import { trim } from "../../utils/trim";
import type { IValidateBenchmarkPrompt } from "../structures/IValidateBenchmarkPrompt";
import type { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";

// biome-ignore format: noMisleadingCharacterClass
const NUMERIC_EMOJIS = [
	"0️⃣",
	"1️⃣",
	"2️⃣",
	"3️⃣",
	"4️⃣",
	"5️⃣",
	"6️⃣",
	"7️⃣",
	"8️⃣",
	"9️⃣",
] as const;
// biome-ignore format: noMisleadingCharacterClass

export const reportValidateBenchmark = (
	result: IValidateBenchmarkResult,
): Record<string, string> =>
	Object.fromEntries([
		["./README.md", writeIndex(result)],
		...result.experiments.flatMap((exp) =>
			Object.entries(reportExperiment(exp)),
		),
	]);

const reportExperiment = (
	experiment: IValidateBenchmarkResult.IExperiment,
): Record<string, string> => {
	return Object.fromEntries([
		[`./${experiment.name}/README.md`, writeExperimentIndex(experiment)],
		...experiment.trials.map((trial, i) => [
			`./${experiment.name}/trials/${i + 1}.${trial.type}.json`,
			JSON.stringify(trial, null, 2),
		]),
	]);
};

const writeIndex = (result: IValidateBenchmarkResult): string => {
	const countTrials = (
		result: IValidateBenchmarkResult,
		filter: (trial: IValidateBenchmarkResult.ITrial) => boolean,
	): string =>
		result.experiments
			.map((exp) => exp.trials.filter(filter).length)
			.reduce((a, b) => a + b, 0)
			.toLocaleString();
	return (
		trim`
    # Validate Benchmark
    ## Summary
      - Model
        - schema: ${result.config.schemaModel}
        - vendor: ${result.config.vendorModel}
      - Aggregation
        - Scenarios: #${result.experiments.length.toLocaleString()}
        - Trial: #${(result.experiments.length * result.config.repeat).toLocaleString()}
        - Success: #${countTrials(result, (e) => e.type === "success")}
          - 1st: #${countTrials(result, (e) => e.type === "success" && e.previous.length === 0)}
          - 2nd: #${countTrials(result, (e) => e.type === "success" && e.previous.length === 1)}
          - 3rd: #${countTrials(result, (e) => e.type === "success" && e.previous.length === 2)}
        - Failure: #${countTrials(result, (e) => e.type === "failure")}
        - Nothing: #${countTrials(result, (e) => e.type === "nothing")}
        - Error: #${countTrials(result, (e) => e.type === "error")}
        - Average Time: ${
					result.experiments
						.flatMap((exp) => exp.trials.map(getElapsedTime))
						.reduce((a, b) => a + b, 0) /
					(result.experiments.length * result.config.repeat)
				} ms
      - Token Usage:
        - Everything
        - Input
          - Total
          - Cached
        - Output
          - Total
          - Reasoning
          - Accepted Predication
          - Rejected Predication
    
    ## Experiments
    Name | Status | Time / Avg
    :----|:-------|------------:
  ` +
		"\n" +
		result.experiments
			.map((exp) =>
				[
					`[${exp.name}](./${exp.name}/README.md)`,
					exp.trials.map(getTrialStatus).join(""),
				].join(" | "),
			)
			.join("\n")
	);
};

const writeExperimentIndex = (
	exp: IValidateBenchmarkResult.IExperiment,
): string => {
	return (
		trim`
    # ${exp.name}
    ## Summary
      - Aggregation
        - Trial: #${exp.trials.length.toLocaleString()}
        - Success: #${exp.trials.filter((e) => e.type === "success").length}
          - 1st: #${exp.trials.filter((e) => e.type === "success" && e.previous.length === 0).length}
          - 2nd: #${exp.trials.filter((e) => e.type === "success" && e.previous.length === 1).length}
          - 3rd: #${exp.trials.filter((e) => e.type === "success" && e.previous.length === 2).length}
        - Failure: #${exp.trials.filter((e) => e.type === "failure").length}
        - Nothing: #${exp.trials.filter((e) => e.type === "nothing").length}
        - Error: ${exp.trials.filter((e) => e.type === "error").length}
        - Average Time: ${
					exp.trials.map(getElapsedTime).reduce((a, b) => a + b, 0) /
					exp.trials.length
				} ms
      - Token Usage:
        - Everything
        - Input
          - Total
          - Cached
        - Output
          - Total
          - Reasoning
          - Accepted Predication
          - Rejected Predication

    ## Scenario
  ` +
		"\n" +
		exp.scenario.prompts.map(writeScenarioPrompt).join("\n\n") +
		"\n\n" +
		trim`
      ## Trials
      No | Status | Time
      ---:|:-------|------:
    ` +
		"\n" +
		exp.trials
			.map((t, i) =>
				[
					`[${i + 1}. ${t.type}](./trials/${i + 1}.${t.type}.json)`,
					getTrialStatus(t),
					getElapsedTime(t).toLocaleString() + " ms",
				].join(" | "),
			)
			.join("\n")
	);
};

const writeScenarioPrompt = (prompt: IValidateBenchmarkPrompt): string => {
	if (prompt.type === "text")
		return [`### Conversation (${prompt.role})`, prompt.content].join("\n");
	return [
		"### Function Calling",
		"```json",
		JSON.stringify(prompt.arguments, null, 2),
		"```",
	].join("\n");
};

const getElapsedTime = (trial: IValidateBenchmarkResult.ITrial): number =>
	trial.completed_at.getTime() -
	(trial.previous[0]?.started_at ?? trial.started_at).getTime();

const getTrialStatus = (trial: IValidateBenchmarkResult.ITrial): string => {
	if (trial.type === "success") {
		return (
			NUMERIC_EMOJIS[trial.previous.length + 1]?.toString() ??
			(trial.previous.length + 1).toString()
		);
	}
	if (trial.type === "failure") {
		return "❌";
	}
	if (trial.type === "nothing" || trial.type === "error") {
		return "⚠️";
	}
	trial satisfies never;
	throw new Error("Invalid trial type");
};
