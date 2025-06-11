# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #9
      - 1st: #9
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 1
    - Average Time: 17609.1 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 31,220 ms
[2. success](./trials/2.success.json) | 1️⃣ | 11,341 ms
[3. success](./trials/3.success.json) | 1️⃣ | 30,859 ms
[4. success](./trials/4.success.json) | 1️⃣ | 12,470 ms
[5. success](./trials/5.success.json) | 1️⃣ | 14,803 ms
[6. success](./trials/6.success.json) | 1️⃣ | 10,452 ms
[7. success](./trials/7.success.json) | 1️⃣ | 13,856 ms
[8. success](./trials/8.success.json) | 1️⃣ | 10,268 ms
[9. success](./trials/9.success.json) | 1️⃣ | 12,171 ms
[10. error](./trials/10.error.json) | 😱 | 28,651 ms