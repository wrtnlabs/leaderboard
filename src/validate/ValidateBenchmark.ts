import type { ILlmSchema } from "@samchon/openapi";
import { Semaphore } from "tstl";
import typia, { type tags } from "typia";

import type { IBenchmarkVendor } from "../common/IBenchmarkVendor";
import { mountValidateBenchmarkExperiments } from "./internal/mountValidateBenchmarkExperiments";
import { reportValidateBenchmark } from "./internal/reportValidateBenchmark";
import { tryValidateExperiment } from "./internal/tryValidateExperiment";
import type { IValidateBenchmarkEvent } from "./structures/IValidateBenchmarkEvent";
import type { IValidateBenchmarkResult } from "./structures/IValidateBenchmarkResult";

export class ValidateBenchmark {
	private result_: IValidateBenchmarkResult | null = null;

	public constructor(public readonly props: ValidateBenchmark.IProps) {
		typia.assert(props);
	}

	public async execute(
		listener?: (event: IValidateBenchmarkEvent) => void,
	): Promise<IValidateBenchmarkResult> {
		const semaphore: Semaphore = new Semaphore(this.props.simultaneous);
		const baseExperiments: IValidateBenchmarkResult.IExperiment[] =
			await mountValidateBenchmarkExperiments(this.props.schemaModel);

		const started_at: Date = new Date();
		const allExperiments: IValidateBenchmarkResult.IExperiment[] = [];

		// Run both original and enhanced versions for each experiment
		await Promise.all(
			baseExperiments.map(async (exp) => {
				// Original version
				const originalTrials = await Promise.all(
					new Array(this.props.repeat).fill(0).map(async () => {
						await semaphore.acquire();
						const trial: IValidateBenchmarkResult.ITrial =
							await tryValidateExperiment({
								vendor: this.props.vendor,
								name: exp.name,
								scenario: exp.scenario,
								function:
									// biome-ignore lint/style/noNonNullAssertion: <explanation>
									exp.scenario.application[this.props.schemaModel]!
										.functions[0]!,
								retry: this.props.retry,
								listener,
								useEmbeddedJsonDesc: false,
							});
						await semaphore.release();
						return trial;
					}),
				);

				// Embedded JSON in descriptions version
				const embeddedJsonDescTrials = await Promise.all(
					new Array(this.props.repeat).fill(0).map(async () => {
						await semaphore.acquire();
						const trial: IValidateBenchmarkResult.ITrial =
							await tryValidateExperiment({
								vendor: this.props.vendor,
								name: `${exp.name}-embedded-json-desc`,
								scenario: exp.scenario,
								function:
									// biome-ignore lint/style/noNonNullAssertion: <explanation>
									exp.scenario.application[this.props.schemaModel]!
										.functions[0]!,
								retry: this.props.retry,
								listener,
								useEmbeddedJsonDesc: true,
							});
						await semaphore.release();
						return trial;
					}),
				);

				// Add both experiments to results
				allExperiments.push({
					name: exp.name,
					scenario: exp.scenario,
					trials: originalTrials,
				});

				allExperiments.push({
					name: `${exp.name}-embedded-json-desc`,
					scenario: exp.scenario,
					trials: embeddedJsonDescTrials,
				});
			}),
		);
		this.result_ = {
			config: {
				schemaModel: this.props.schemaModel,
				vendorModel: this.props.vendor.model,
				repeat: this.props.repeat,
				retry: this.props.retry,
				simultaneous: this.props.simultaneous,
			},
			experiments: allExperiments,
			started_at,
			completed_at: new Date(),
		};
		return this.result_;
	}

	public report(): Record<string, string> {
		if (this.result_ === null)
			throw new Error("Run the execute() method first.");
		return reportValidateBenchmark(this.result_);
	}
}
export namespace ValidateBenchmark {
	export interface IProps {
		vendor: IBenchmarkVendor;
		schemaModel: ILlmSchema.Model;
		retry: number & tags.Maximum<9>;
		repeat: number;
		simultaneous: number;
	}
	export type IConfig = unknown;
}
