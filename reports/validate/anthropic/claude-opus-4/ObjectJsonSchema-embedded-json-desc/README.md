# ObjectJsonSchema-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #1
      - 1st: #1
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 9
    - Average Time: 17196.3 ms
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
[1. error](./trials/1.error.json) | 😱 | 25,767 ms
[2. error](./trials/2.error.json) | 😱 | 16,665 ms
[3. success](./trials/3.success.json) | 1️⃣ | 27,372 ms
[4. error](./trials/4.error.json) | 😱 | 14,908 ms
[5. error](./trials/5.error.json) | 😱 | 12,740 ms
[6. error](./trials/6.error.json) | 😱 | 13,621 ms
[7. error](./trials/7.error.json) | 😱 | 11,612 ms
[8. error](./trials/8.error.json) | 😱 | 14,191 ms
[9. error](./trials/9.error.json) | 😱 | 14,434 ms
[10. error](./trials/10.error.json) | 😱 | 20,653 ms