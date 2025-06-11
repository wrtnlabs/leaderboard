# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #10
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 5649.6 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 6,247 ms
[2. success](./trials/2.success.json) | 1️⃣ | 6,412 ms
[3. success](./trials/3.success.json) | 1️⃣ | 4,451 ms
[4. success](./trials/4.success.json) | 1️⃣ | 6,735 ms
[5. success](./trials/5.success.json) | 1️⃣ | 5,748 ms
[6. success](./trials/6.success.json) | 1️⃣ | 6,952 ms
[7. success](./trials/7.success.json) | 1️⃣ | 4,420 ms
[8. success](./trials/8.success.json) | 1️⃣ | 4,214 ms
[9. success](./trials/9.success.json) | 1️⃣ | 4,890 ms
[10. success](./trials/10.success.json) | 1️⃣ | 6,427 ms