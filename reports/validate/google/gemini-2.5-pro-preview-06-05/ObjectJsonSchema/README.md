# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #1
      - 2nd: #3
      - 3rd: #2
    - Failure: #0
    - Nothing: #2
    - Error: 0
    - Average Time: 179264 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 69,581 ms
[2. success](./trials/2.success.json) | 3️⃣ | 230,771 ms
[3. success](./trials/3.success.json) | 3️⃣ | 166,588 ms
[4. success](./trials/4.success.json) | 2️⃣ | 117,272 ms
[5. success](./trials/5.success.json) | 2️⃣ | 82,934 ms
[6. success](./trials/6.success.json) | 1️⃣ | 111,091 ms
[7. success](./trials/7.success.json) | 4️⃣ | 331,670 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 91,207 ms
[9. success](./trials/9.success.json) | 5️⃣ | 397,182 ms
[10. success](./trials/10.success.json) | 2️⃣ | 194,344 ms