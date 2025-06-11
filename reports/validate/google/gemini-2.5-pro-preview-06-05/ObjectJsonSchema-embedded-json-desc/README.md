# ObjectJsonSchema-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #1
      - 2nd: #3
      - 3rd: #1
    - Failure: #0
    - Nothing: #2
    - Error: 0
    - Average Time: 177475.8 ms
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
[1. success](./trials/1.success.json) | 3️⃣ | 260,394 ms
[2. success](./trials/2.success.json) | 1️⃣ | 26,660 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 142,715 ms
[4. success](./trials/4.success.json) | 2️⃣ | 109,210 ms
[5. success](./trials/5.success.json) | 6️⃣ | 403,092 ms
[6. success](./trials/6.success.json) | 2️⃣ | 109,341 ms
[7. success](./trials/7.success.json) | 5️⃣ | 208,170 ms
[8. success](./trials/8.success.json) | 4️⃣ | 160,068 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 254,130 ms
[10. success](./trials/10.success.json) | 2️⃣ | 100,978 ms