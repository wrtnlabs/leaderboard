# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #1
      - 2nd: #7
      - 3rd: #0
    - Failure: #0
    - Nothing: #2
    - Error: 0
    - Average Time: 18615.8 ms
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
[1. success](./trials/1.success.json) | 2️⃣ | 18,655 ms
[2. success](./trials/2.success.json) | 2️⃣ | 21,386 ms
[3. success](./trials/3.success.json) | 2️⃣ | 17,984 ms
[4. success](./trials/4.success.json) | 2️⃣ | 19,444 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 14,571 ms
[6. success](./trials/6.success.json) | 1️⃣ | 12,285 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 23,642 ms
[8. success](./trials/8.success.json) | 2️⃣ | 19,414 ms
[9. success](./trials/9.success.json) | 2️⃣ | 19,910 ms
[10. success](./trials/10.success.json) | 2️⃣ | 18,867 ms