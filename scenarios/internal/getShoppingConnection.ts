import ShoppingApi from "@samchon/shopping-api";

export const getShoppingConnection = async (
	citizenship: boolean,
): Promise<ShoppingApi.IConnection> => {
	const connection: ShoppingApi.IConnection = {
		host: "https://shopping-be.wrtn.ai",
	};
	await ShoppingApi.functional.shoppings.customers.authenticate.create(
		connection,
		{
			channel_code: "samchon",
			external_user: null,
			href: "http://localhost:3000/@agentica/paper/benchmark.ts",
			referrer: "http://localhost:3000/NodeJS",
		},
	);
	if (citizenship === true) {
		await ShoppingApi.functional.shoppings.customers.authenticate.activate(
			connection,
			{
				mobile: "821012345678",
				name: "John Doe",
			},
		);
	}
	return connection;
};
