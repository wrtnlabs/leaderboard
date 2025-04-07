import type { tags } from "typia";
import { application } from "typia/lib/llm";

import { trim } from "benchmark/src/utils/trim";
import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";

export const ObjectConstraint = (): IValidateBenchmarkScenario => ({
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
        Make a virtual person with random values, 
        and make it to participate in a campaign.`,
		},
	],
});

interface App {
	/**
	 * Participate in a campaign.
	 *
	 * @param person Person who participates in the campaign.
	 */
	participate(person: IPerson): void;
}

interface IPerson {
	id: string & tags.Format<"uuid">;
	name: string & tags.Pattern<"^[a-zA-Z\\s]+$"> & tags.MinLength<1>;
	thumbnail: string & tags.Format<"uri"> & tags.ContentMediaType<"image/*">;
	age: number & tags.Minimum<0> & tags.ExclusiveMaximum<100>;
	email: string & tags.Format<"email">;
	hobbies: Array<string> & tags.MinItems<3>;
	isActive: boolean;
	created_at: string & tags.Format<"date-time">;
}
