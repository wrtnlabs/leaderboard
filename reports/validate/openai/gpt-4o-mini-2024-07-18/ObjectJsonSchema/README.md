# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #5
      - 2nd: #3
      - 3rd: #0
    - Failure: #1
    - Nothing: #0
    - Error: 1
    - Average Time: 52090.4 ms
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
[1. success](./trials/1.success.json) | 2️⃣ | 301,333 ms
[2. success](./trials/2.success.json) | 2️⃣ | 21,483 ms
[3. error](./trials/3.error.json) | 😱 | 23,852 ms
[4. failure](./trials/4.failure.json) | ❌ | 70,306 ms
[5. success](./trials/5.success.json) | 1️⃣ | 13,839 ms
[6. success](./trials/6.success.json) | 2️⃣ | 15,740 ms
[7. success](./trials/7.success.json) | 1️⃣ | 22,895 ms
[8. success](./trials/8.success.json) | 1️⃣ | 16,265 ms
[9. success](./trials/9.success.json) | 1️⃣ | 19,233 ms
[10. success](./trials/10.success.json) | 1️⃣ | 15,958 ms