import UnpluginTypia from "@ryoppippi/unplugin-typia/rollup";
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	outDir: "dist",
	entries: ["src/index.ts"],
	declaration: false,
	clean: true,
	hooks: {
		"rollup:options": (_, options) => {
			// plugin should be added to the first
			options.plugins.unshift(UnpluginTypia());
		},
	},
	rollup: {
		inlineDependencies: true,
	},
});
