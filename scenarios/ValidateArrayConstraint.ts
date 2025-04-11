import type { tags } from "typia";
import { application } from "typia/lib/llm";
import type { IValidateBenchmarkScenario } from "../src/validate/structures/IValidateBenchmarkScenario";
import { trim } from "./trim";

export const ArrayConstraint = (): IValidateBenchmarkScenario => ({
	application: {
		chatgpt: application<App, "chatgpt", { reference: true }>(),
		claude: application<App, "claude", { reference: true }>(),
		llama: application<App, "llama", { reference: true }>(),
		gemini: application<App, "gemini">(),
		"3.0": application<App, "3.0">(),
		"3.1": application<App, "3.1", { reference: true }>(),
	},
	prompts: [
		{
			type: "text",
			role: "user",
			content: trim`
        Make a group with random values, and archive it.
        
        By the way, fill the hobbies with below values:
        
          - reading
          - reading
          - writing
          - writing
          - sleeping
          - playing
          - listening`,
		},
	],
});

interface App {
	/**
	 * Archive group information.
	 *
	 * @param group The group
	 */
	archive(group: IGroup): void;
}

interface IGroup {
	ids: Array<string & tags.Format<"uuid">> & tags.MinItems<4>;
	names: Array<string & tags.Pattern<"^[a-zA-Z\\s]+$"> & tags.MinLength<1>> &
		tags.MinItems<10> &
		tags.UniqueItems;
	thumbnails: Array<
		string & tags.Format<"uri"> & tags.ContentMediaType<"image/*">
	> &
		tags.MinItems<4>;
	hobbies: Array<string> & tags.UniqueItems;
}
