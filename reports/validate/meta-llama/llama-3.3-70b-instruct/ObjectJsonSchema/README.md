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
    - Average Time: 45404.4 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 41,708 ms
[2. success](./trials/2.success.json) | 2️⃣ | 51,286 ms
[3. success](./trials/3.success.json) | 2️⃣ | 43,932 ms
[4. success](./trials/4.success.json) | 2️⃣ | 55,947 ms
[5. success](./trials/5.success.json) | 2️⃣ | 60,404 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 38,346 ms
[7. success](./trials/7.success.json) | 2️⃣ | 41,416 ms
[8. success](./trials/8.success.json) | 🥇 | 26,372 ms
[9. success](./trials/9.success.json) | 2️⃣ | 47,749 ms
[10. success](./trials/10.success.json) | 2️⃣ | 46,884 ms