import type { IValidateBenchmarkScenario } from "../src/validate/structures/IValidateBenchmarkScenario";
import { getShoppingApplication } from "./internal/getShoppingApplication";
import { prepareShoppingHistories } from "./internal/prepareShoppingHistories";

export const ShoppingSalePage =
	async (): Promise<IValidateBenchmarkScenario> => {
		const endpoint = {
			method: "patch",
			path: "/shoppings/customers/sales",
		} as const;
		return {
			application: {
				chatgpt: await getShoppingApplication("chatgpt")(endpoint),
				claude: await getShoppingApplication("claude")(endpoint),
				gemini: null,
				llama: await getShoppingApplication("llama")(endpoint),
				"3.0": await getShoppingApplication("3.0")(endpoint),
				"3.1": await getShoppingApplication("3.1")(endpoint),
			},
			...(await prepareShoppingHistories("sales.index")),
		};
	};
