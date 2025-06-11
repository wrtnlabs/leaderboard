# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #2
      - 1st: #2
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #8
    - Error: 0
    - Average Time: 91960.7 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 7,678 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 212,751 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 163,417 ms
[4. success](./trials/4.success.json) | 1️⃣ | 7,219 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 147,011 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 2,881 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 2,857 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 7,762 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 154,438 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 213,593 ms