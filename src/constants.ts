import { existsSync } from "node:fs";
import { join } from "node:path";
import { x } from "tinyexec";

export const JS_LIKE_EXTENSIONS = ["js", "mjs", "cjs"].map((ext) => `.${ext}`);

/** gitRoot is the root directory of the git repository */
export const gitRoot = await x(
	"git",
	"rev-parse --show-toplevel".split(" "),
).then((r) => r.stdout.trim());

/** reportDir is the directory where the reports are stored */
export const reportsDir = join(gitRoot, "reports");

/** scenarioDir is the directory where the scenarios are stored */
export const scenarioDir = join(gitRoot, "dist", "validate", "scenarios");

if (!existsSync(reportsDir)) {
	throw new Error(`reportsDir not found: ${reportsDir}`);
}

if (!existsSync(scenarioDir)) {
	throw new Error(`scenarioDir not found: ${scenarioDir}`);
}
