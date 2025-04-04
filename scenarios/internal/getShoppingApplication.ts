import type {
	IHttpLlmApplication,
	ILlmSchema,
	OpenApi,
} from "@samchon/openapi";
import { getShoppingFunction } from "./getShoppingFunction";

export const getShoppingApplication =
	<Model extends ILlmSchema.Model>(model: Model) =>
	async (endpoint: {
		method: OpenApi.Method;
		path: string;
	}): Promise<IHttpLlmApplication<Model>> => {
		const func = await getShoppingFunction(model)(endpoint);
		return {
			model,
			functions: [func],
			errors: [],
			options: {
				reference: true,
			} as unknown as IHttpLlmApplication.IOptions<Model>,
		} satisfies IHttpLlmApplication<Model>;
	};
