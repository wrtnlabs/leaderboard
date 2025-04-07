# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #1
      - 1st: #1
      - 2nd: #0
      - 3rd: #0
    - Failure: #2
    - Nothing: #7
    - Error: 0
    - Average Time: 16141.9 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 19,688 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 21,761 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 15,918 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 10,781 ms
[5. failure](./trials/5.failure.json) | ❌ | 24,578 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 12,718 ms
[7. success](./trials/7.success.json) | 1️⃣ | 8,026 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 13,331 ms
[9. failure](./trials/9.failure.json) | ❌ | 27,108 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 7,510 ms