import type { ILlmSchema } from "@samchon/openapi";
import type OpenAI from "openai";
import type { IValidation } from "typia";

import type { IValidateBenchmarkScenario } from "./IValidateBenchmarkScenario";

export interface IValidateBenchmarkResult {
	config: IValidateBenchmarkResult.IConfig;
	experiments: IValidateBenchmarkResult.IExperiment[];
	started_at: Date;
	completed_at: Date;
}
export namespace IValidateBenchmarkResult {
	export interface IConfig {
		schemaModel: ILlmSchema.Model;
		vendorModel: string;
		retry: number;
		repeat: number;
		simultaneous: number;
	}
	export interface IExperiment {
		name: string;
		scenario: IValidateBenchmarkScenario;
		trials: ITrial[];
	}
	export type ITrial =
		| ITrial.ISuccess
		| ITrial.IFailure
		| ITrial.INothing
		| ITrial.IError;
	export namespace ITrial {
		export interface ISuccess extends IBase<"success"> {
			id: string;
			arguments: Record<string, unknown>;
			result: IValidation.ISuccess<unknown>;
			completion: OpenAI.ChatCompletion;
		}
		export interface IFailure extends IBase<"failure"> {
			id: string;
			arguments: Record<string, unknown>;
			result: IValidation.IFailure;
			completion: OpenAI.ChatCompletion;
		}
		export interface INothing extends IBase<"nothing"> {
			completion: OpenAI.ChatCompletion;
		}
		export interface IError extends IBase<"error"> {
			error: unknown;
		}

		interface IBase<Type extends string> {
			type: Type;
			started_at: Date;
			completed_at: Date;
			previous: IFailure[];
		}
	}
}
