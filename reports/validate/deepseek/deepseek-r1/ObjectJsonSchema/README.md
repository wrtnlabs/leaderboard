# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #4
      - 1st: #4
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #6
    - Error: 0
    - Average Time: 52652.2 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 26,519 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 79,660 ms
[3. success](./trials/3.success.json) | 1️⃣ | 30,458 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 77,570 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 88,853 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 64,651 ms
[7. success](./trials/7.success.json) | 1️⃣ | 27,622 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 40,603 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 66,808 ms
[10. success](./trials/10.success.json) | 1️⃣ | 23,778 ms