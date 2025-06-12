# ObjectJsonSchema-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #7
      - 1st: #7
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 3
    - Average Time: 8807.9 ms
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
[1. error](./trials/1.error.json) | 😱 | 13,339 ms
[2. success](./trials/2.success.json) | 1️⃣ | 10,468 ms
[3. success](./trials/3.success.json) | 1️⃣ | 5,172 ms
[4. success](./trials/4.success.json) | 1️⃣ | 5,461 ms
[5. success](./trials/5.success.json) | 1️⃣ | 8,223 ms
[6. success](./trials/6.success.json) | 1️⃣ | 15,120 ms
[7. error](./trials/7.error.json) | 😱 | 7,914 ms
[8. success](./trials/8.success.json) | 1️⃣ | 6,900 ms
[9. error](./trials/9.error.json) | 😱 | 9,122 ms
[10. success](./trials/10.success.json) | 1️⃣ | 6,360 ms