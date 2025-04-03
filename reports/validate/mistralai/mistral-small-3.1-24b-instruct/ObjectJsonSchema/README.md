# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #4
      - 1st: #4
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #1
    - Error: 5
    - Average Time: 22771.3 ms
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
[1. error](./trials/1.error.json) | ⚠️ | 7,850 ms
[2. success](./trials/2.success.json) | 1️⃣ | 30,795 ms
[3. error](./trials/3.error.json) | ⚠️ | 52,908 ms
[4. success](./trials/4.success.json) | 1️⃣ | 21,105 ms
[5. error](./trials/5.error.json) | ⚠️ | 22,542 ms
[6. success](./trials/6.success.json) | 1️⃣ | 9,706 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 3,333 ms
[8. error](./trials/8.error.json) | ⚠️ | 45,337 ms
[9. success](./trials/9.success.json) | 1️⃣ | 7,192 ms
[10. error](./trials/10.error.json) | ⚠️ | 26,945 ms