import UnpluginTypia from "@ryoppippi/unplugin-typia/rollup";
import { globSync } from "tinyglobby";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	outDir: "dist",
	entries: ["./src/index.ts", ...globSync("./scenarios/**/*.ts")],
	declaration: false,
	clean: true,
	hooks: {
		"rollup:options": (_, options) => {
			// plugin should be added to the first
			options.plugins.unshift(UnpluginTypia());
		},
	},
	rollup: {
		inlineDependencies: false,
	},
});
