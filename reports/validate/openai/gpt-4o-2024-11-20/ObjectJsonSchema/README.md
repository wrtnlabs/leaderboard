# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #7
      - 2nd: #3
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 18340 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 12,270 ms
[2. success](./trials/2.success.json) | 1️⃣ | 18,861 ms
[3. success](./trials/3.success.json) | 1️⃣ | 20,678 ms
[4. success](./trials/4.success.json) | 1️⃣ | 14,484 ms
[5. success](./trials/5.success.json) | 2️⃣ | 17,825 ms
[6. success](./trials/6.success.json) | 1️⃣ | 12,509 ms
[7. success](./trials/7.success.json) | 1️⃣ | 26,492 ms
[8. success](./trials/8.success.json) | 2️⃣ | 18,231 ms
[9. success](./trials/9.success.json) | 1️⃣ | 12,627 ms
[10. success](./trials/10.success.json) | 2️⃣ | 29,423 ms