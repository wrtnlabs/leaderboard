import typia, { tags } from "typia";

import { trim } from "../../utils/trim";
import { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";

export const ObjectHierarchical: IValidateBenchmarkScenario = {
  application: {
    chatgpt: typia.llm.application<App, "chatgpt", { reference: true }>(),
    claude: typia.llm.application<App, "claude", { reference: true }>(),
    llama: typia.llm.application<App, "llama", { reference: true }>(),
    gemini: typia.llm.application<App, "gemini">(),
    "3.0": typia.llm.application<App, "3.0">(),
    "3.1": typia.llm.application<App, "3.1", { reference: true }>(),
  },
  prompts: [
    {
      type: "text",
      role: "user",
      content: trim`
        A customer participates in a compaign.

        The customer has come from a "general" channel,
        which belongs to the "wrtnlabs" enterprise.
        His referrer site is "https://wrtnlabs.com", 
        and his ip address is "127.0.0.1".
        The time of the participation is "2023-10-01T08:27:31Z".

        For reference, the "general" channel's name is same as its code,
        and it priority is 9, and it is not exclusive. And the channel
        has been created at "2020-08-27T09:00:00Z".

        Also, the customer has joined to our membership with 
        "samchon@wrtnlabs.io" email address since "2023-09-01T17:55:59Z".
        And he is authorized to use our service with "samchon" account
        with "Jeongho Nam" display name.

        Additionally, hi is belonged to the "wrtnlabs" enterprise account
        with "Wrtn Technologies Inc." display name, and it has been created at
        "2020-08-27T09:00:00Z". The enterprise has the best grade of 1.
      `,
    },
  ],
};

interface App {
  /**
   * Participate in a compaign.
   *
   * @param customer Customer who participates in the campaign.
   */
  participate(customer: ICustomer): void;
}

interface ICustomer {
  channel: IChannel;
  member: IMember | null;
  href: string;
  referrer: string;
  ip: string & tags.Format<"uuid">;
  created_at: string & tags.Format<"date-time">;
}
interface IChannel {
  code: string;
  name: string;
  exclusive: boolean;
  priority: number;
  created_at: string & tags.Format<"date-time">;
}
interface IAccount {
  code: string;
  name: string;
}
interface IMember {
  account: IAccount;
  enterprise: IEnterprise | null;
  emails: Array<string & tags.Format<"email">>;
  created_at: string & tags.Format<"date-time">;
  authorized: boolean;
}
interface IEnterprise {
  id: number;
  account: IAccount;
  grade: number & tags.Type<"uint32">;
  created_at: string & tags.Format<"date-time">;
}
