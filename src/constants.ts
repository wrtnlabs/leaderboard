import { join } from "node:path";
import * as fs from "fs-extra/esm";
import { x } from "tinyexec";

export const JS_LIKE_EXTENSIONS = ["js", "mjs", "cjs"].map((ext) => `.${ext}`);

/** gitRoot is the root directory of the git repository */
export const gitRoot = await x(
	"git",
	"rev-parse --show-toplevel".split(" "),
).then((r) => r.stdout.trim());

export const distDir = join(gitRoot, "dist");

/** reportDir is the directory where the reports are stored */
export const reportsDir = join(gitRoot, "reports");

/** scenarioDir is the directory where the scenarios are stored */

if (!fs.pathExistsSync(reportsDir)) {
	throw new Error(`reportsDir not found: ${reportsDir}`);
}
