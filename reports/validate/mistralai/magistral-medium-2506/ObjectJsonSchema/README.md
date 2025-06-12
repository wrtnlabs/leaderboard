# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #6
      - 1st: #6
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 4
    - Average Time: 13154.9 ms
  - Token Usage:
    - Everything
    - Input
      - Total
      - Cached
    - Output
      - Total
      - Reasoning
      - Accepted Predication
      - Rejected Predication

## Scenario
### Conversation (user)
Convert below "IMember" type to JSON schema, and collect it for reusing.

```ts
interface IMember {
  id: string & tags.Format<"uuid">;
  name: string;
  email: string & tags.Format<"email">;
  age: number & tags.Minimum<20> & tags.ExclusiveMaximum<100>;
  hobbies: Array<{
    id: string & tags.Format<"uuid">;
    name: string;
  }>;
  created_at: string & tags.Format<"date-time">;
  updated_at: string & tags.Format<"date-time">;
  deleted_at: null | (string & tags.Format<"date-time">);
}
```

## Trials
No | Status | Time
---:|:-------|------:
[1. error](./trials/1.error.json) | 😱 | 14,279 ms
[2. error](./trials/2.error.json) | 😱 | 13,131 ms
[3. error](./trials/3.error.json) | 😱 | 19,113 ms
[4. success](./trials/4.success.json) | 1️⃣ | 12,052 ms
[5. error](./trials/5.error.json) | 😱 | 11,527 ms
[6. success](./trials/6.success.json) | 1️⃣ | 12,966 ms
[7. success](./trials/7.success.json) | 1️⃣ | 14,629 ms
[8. success](./trials/8.success.json) | 1️⃣ | 13,463 ms
[9. success](./trials/9.success.json) | 1️⃣ | 10,638 ms
[10. success](./trials/10.success.json) | 1️⃣ | 9,751 ms