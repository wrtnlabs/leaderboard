import {
	HttpLlm,
	type IHttpLlmApplication,
	type IHttpLlmFunction,
	type ILlmSchema,
	type OpenApi,
	type OpenApiV3_1,
} from "@samchon/openapi";
import { Singleton, VariadicSingleton } from "tstl";
import typia from "typia";

export const getShoppingFunction =
	<Model extends ILlmSchema.Model>(model: Model) =>
	async (endpoint: {
		method: OpenApi.Method;
		path: string;
	}): Promise<IHttpLlmFunction<Model>> => {
		const application = await getApplication.get(model);
		const func = application.functions.find(
			(func) => func.method === endpoint.method && func.path === endpoint.path,
		);
		if (func === undefined) {
			throw new Error(
				`Function not found for ${endpoint.method} ${endpoint.path}`,
			);
		}
		return func as IHttpLlmFunction<Model>;
	};

const getApplication = new VariadicSingleton(
	async (model: ILlmSchema.Model) => {
		const document: OpenApiV3_1.IDocument = await getDocument.get();
		return HttpLlm.application({
			model,
			document,
			options: {
				reference: true,
			} as unknown as IHttpLlmApplication.IOptions<ILlmSchema.Model>,
		});
	},
);

const getDocument = new Singleton(async () => {
	const document: OpenApiV3_1.IDocument = typia.assert<OpenApiV3_1.IDocument>(
		await fetch(
			"https://raw.githubusercontent.com/samchon/shopping-backend/refs/heads/master/packages/api/swagger.json",
		).then((r) => r.json()),
	);
	return document;
});
