import type { OpenApi } from "@samchon/openapi";
import ShoppingApi from "@samchon/shopping-api";
import type { IPage } from "@samchon/shopping-api/lib/structures/common/IPage";
import type { IShoppingCartCommodity } from "@samchon/shopping-api/lib/structures/shoppings/orders/IShoppingCartCommodity";
import type { IShoppingOrder } from "@samchon/shopping-api/lib/structures/shoppings/orders/IShoppingOrder";
import type { IShoppingSale } from "@samchon/shopping-api/lib/structures/shoppings/sales/IShoppingSale";
import { trim } from "../../src/utils/trim";
import type { IValidateBenchmarkPrompt } from "../../src/validate/structures/IValidateBenchmarkPrompt";
import { getShoppingConnection } from "./getShoppingConnection";
import { getShoppingFunction } from "./getShoppingFunction";

export const prepareShoppingHistories = async (
	type:
		| "sales.index"
		| "sales.at"
		| "carts.commodities.create"
		| "orders.create"
		| "orders.publish",
): Promise<IValidateBenchmarkPrompt[]> => {
	const histories: IValidateBenchmarkPrompt[] = [];
	const archive = archiveFunctionCalling(histories);
	const connection: ShoppingApi.IConnection = await getShoppingConnection(
		type === "orders.publish",
	);
	const page: IPage<IShoppingSale.ISummary> | null = await archive({
		method: "patch",
		path: "/shoppings/customers/sales",
		text: "Would you show me sales in the market?",
		arguments: {
			body: {} satisfies IShoppingSale.IRequest,
		},
		execute: (args) =>
			ShoppingApi.functional.shoppings.customers.sales.index(
				connection,
				args.body,
			),
		break: type === "sales.index",
	});
	if (page === null) return histories;

	const sale: IShoppingSale | null = await archive({
		method: "get",
		path: "/shoppings/customers/sales/{id}",
		text: "I wanna see detailed information of MacBook",
		arguments: {
			id: page.data.find((s) => s.content.title.includes("MacBook"))?.id ?? "",
		},
		execute: ({ id }) =>
			ShoppingApi.functional.shoppings.customers.sales.at(connection, id),
		break: type === "sales.at",
	});
	if (sale === null) return histories;

	const commodity: IShoppingCartCommodity | null = await archive({
		method: "post",
		path: "/shoppings/customers/carts/commodities",
		text: "Select the (silver, 16gb, 1tb, English) stock and put it to the shopping cart",
		arguments: {
			body: {
				sale_id: sale.id,
				stocks: sale.units.map((unit) => ({
					unit_id: unit.id,
					stock_id: unit.stocks[unit.stocks.length - 1]?.id ?? "",
					choices: [],
					quantity: 1,
				})),
				volume: 1,
				accumulate: false,
			} satisfies IShoppingCartCommodity.ICreate,
		},
		execute: (args) =>
			ShoppingApi.functional.shoppings.customers.carts.commodities.create(
				connection,
				args.body,
			),
		break: type === "carts.commodities.create",
	});
	if (commodity === null) return histories;

	const order: IShoppingOrder | null = await archive({
		method: "post",
		path: "/shoppings/customers/orders",
		text: "Take the shopping cart to the order",
		arguments: {
			body: {
				goods: [
					{
						commodity_id: commodity.id,
						volume: 1,
					},
				],
			} satisfies IShoppingOrder.ICreate,
		},
		execute: (args) =>
			ShoppingApi.functional.shoppings.customers.orders.create(
				connection,
				args.body,
			),
		break: type === "orders.create",
	});
	if (order === null) return histories;

	histories.push({
		type: "text",
		role: "user",
		content: trim`
            I'll pay it with cash, and my address is:

              - country: South Korea
              - city/province: Seoul
              - department: Wrtn Apartment
              - possession: 101-1411
        `,
	});
	return histories;
};

const archiveFunctionCalling =
	(histories: IValidateBenchmarkPrompt[]) =>
	async <Arguments extends object, T>(props: {
		method: OpenApi.Method;
		path: string;
		arguments: Arguments;
		text: string;
		execute: (args: Arguments) => Promise<T>;
		break: boolean;
	}): Promise<T | null> => {
		if (props.break === true) {
			histories.push({
				type: "text",
				role: "user",
				content: props.text,
			});
			return null;
		}

		const value: T = await props.execute(props.arguments);
		histories.push(
			{
				type: "text",
				role: "user",
				content: props.text,
			},
			{
				type: "tool_call",
				function: await getShoppingFunction("3.1")({
					method: props.method,
					path: props.path,
				}),
				arguments: props.arguments as Record<string, unknown>,
				value,
			},
		);
		return value;
	};
