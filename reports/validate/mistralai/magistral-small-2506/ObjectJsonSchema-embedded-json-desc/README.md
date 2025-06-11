# ObjectJsonSchema-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #7
    - Error: 3
    - Average Time: 61639.9 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 2,074 ms
[2. error](./trials/2.error.json) | 😱 | 7,065 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 144,952 ms
[4. error](./trials/4.error.json) | 😱 | 91,672 ms
[5. error](./trials/5.error.json) | 😱 | 3,166 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 165,380 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 4,004 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 540 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 53,051 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 144,495 ms