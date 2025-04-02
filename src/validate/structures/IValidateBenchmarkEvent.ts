import { IValidateBenchmarkResult } from "./IValidateBenchmarkResult";
import { IValidateBenchmarkScenario } from "./IValidateBenchmarkScenario";

export interface IValidateBenchmarkEvent {
  name: string;
  scenario: IValidateBenchmarkScenario;
  trial: IValidateBenchmarkResult.ITrial;
}
