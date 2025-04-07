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
		const experiments: IValidateBenchmarkResult.IExperiment[] =
			await mountValidateBenchmarkExperiments(this.props.schemaModel);

		const started_at: Date = new Date();
		await Promise.all(
			experiments.map(async (exp) => {
				exp.trials = await Promise.all(
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
							});
						await semaphore.release();
						return trial;
					}),
				);
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
			experiments,
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
