import type { IValidateBenchmarkResult } from "./IValidateBenchmarkResult";
import type { IValidateBenchmarkScenario } from "./IValidateBenchmarkScenario";

export interface IValidateBenchmarkEvent {
	name: string;
	scenario: IValidateBenchmarkScenario;
	trial: IValidateBenchmarkResult.ITrial;
}
