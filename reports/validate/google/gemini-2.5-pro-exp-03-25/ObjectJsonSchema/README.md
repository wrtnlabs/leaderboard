# ObjectJsonSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 10
    - Average Time: 438.4 ms
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
[1. error](./trials/1.error.json) | ⚠️ | 482 ms
[2. error](./trials/2.error.json) | ⚠️ | 442 ms
[3. error](./trials/3.error.json) | ⚠️ | 470 ms
[4. error](./trials/4.error.json) | ⚠️ | 447 ms
[5. error](./trials/5.error.json) | ⚠️ | 408 ms
[6. error](./trials/6.error.json) | ⚠️ | 434 ms
[7. error](./trials/7.error.json) | ⚠️ | 408 ms
[8. error](./trials/8.error.json) | ⚠️ | 405 ms
[9. error](./trials/9.error.json) | ⚠️ | 402 ms
[10. error](./trials/10.error.json) | ⚠️ | 486 ms