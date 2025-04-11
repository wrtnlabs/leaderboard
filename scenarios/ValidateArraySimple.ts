import typia, { type tags } from "typia";

import type { IValidateBenchmarkScenario } from "benchmark/src/validate/structures/IValidateBenchmarkScenario";
import { trim } from "./trim";

export const ArraySimple = (): IValidateBenchmarkScenario => ({
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

        Also, his email address is jaxtyn@wrtn.io, and his hobbies are
        "reading", "writing", "sleeping", and "playing".
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
	names: string[];
	hobby: string;
	emails: Array<string & tags.Format<"email">>;
	age: number & tags.Minimum<0> & tags.Maximum<100>;
}
