import type { IValidateBenchmarkPrompt } from "./IValidateBenchmarkPrompt";

export type TrialStatus = number | "success" | "failure" | "nothing" | "error";

export interface JsonReport {
	config: {
		schemaModel: string;
		vendorModel: string;
		repeat: number;
	};
	experiments: Array<{
		name: string;
		scenario: {
			prompts: IValidateBenchmarkPrompt[];
		};
		trials: Array<{
			type: string;
			status: TrialStatus;
			timeMs: number;
			startedAt: Date;
			completedAt: Date;
		}>;
	}>;
}
