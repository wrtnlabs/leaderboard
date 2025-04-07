import typia, { type tags } from "typia";

import { trim } from "benchmark/src/utils/trim";
import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";

export const ObjectSimple = (): IValidateBenchmarkScenario => ({
	application: {
		chatgpt: typia.llm.application<App, "chatgpt">(),
		claude: typia.llm.application<App, "claude">(),
		llama: typia.llm.application<App, "llama">(),
		gemini: typia.llm.application<App, "gemini">(),
		"3.0": typia.llm.application<App, "3.0">(),
		"3.1": typia.llm.application<App, "3.1">(),
	},
	prompts: [
		{
			type: "text",
			role: "user",
			content: trim`
        A member joined to a channel.

        The member's id is "447d9924-5dad-49ac-bcf0-84c1ada062b3",
        and his name is "Eulchan Kim". His age is 20. 
      `,
		},
	],
});

interface App {
	/**
	 * Join a member to the channel.
	 *
	 * @param member Member to be joined.
	 */
	join(member: IMember): void;
}

interface IMember {
	id: string & tags.Format<"uuid">;
	name: string;
	age: number &
		tags.Type<"uint32"> &
		tags.Minimum<20> &
		tags.ExclusiveMaximum<100>;
}
