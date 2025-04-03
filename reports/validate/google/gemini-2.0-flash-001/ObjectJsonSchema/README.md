# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #10
    - Nothing: #0
    - Error: 0
    - Average Time: 11714.1 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 9,760 ms
[2. failure](./trials/2.failure.json) | ❌ | 15,014 ms
[3. failure](./trials/3.failure.json) | ❌ | 10,629 ms
[4. failure](./trials/4.failure.json) | ❌ | 11,071 ms
[5. failure](./trials/5.failure.json) | ❌ | 9,994 ms
[6. failure](./trials/6.failure.json) | ❌ | 17,792 ms
[7. failure](./trials/7.failure.json) | ❌ | 10,301 ms
[8. failure](./trials/8.failure.json) | ❌ | 10,220 ms
[9. failure](./trials/9.failure.json) | ❌ | 10,540 ms
[10. failure](./trials/10.failure.json) | ❌ | 11,820 ms