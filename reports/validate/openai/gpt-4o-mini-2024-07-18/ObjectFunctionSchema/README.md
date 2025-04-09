# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #1
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #9
    - Nothing: #0
    - Error: 0
    - Average Time: 35330.1 ms
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
Convert below function to schema, so that enroll to the application.

```ts
/**
 * Draw a circle.
 *
 * Draw a circle with the given center and radius.
 *
 * @param props Properties to draw the circle.
 */
export function drawCircle(props: {
  type: "circle";
  center: {
    x: number;
    y: number;
  }
  radius: number & tags.Minimum<0>;
}): void;
```

## Trials
No | Status | Time
---:|:-------|------:
[1. failure](./trials/1.failure.json) | ❌ | 31,954 ms
[2. failure](./trials/2.failure.json) | ❌ | 36,107 ms
[3. failure](./trials/3.failure.json) | ❌ | 35,205 ms
[4. failure](./trials/4.failure.json) | ❌ | 43,451 ms
[5. failure](./trials/5.failure.json) | ❌ | 31,100 ms
[6. success](./trials/6.success.json) | 5️⃣ | 28,360 ms
[7. failure](./trials/7.failure.json) | ❌ | 43,457 ms
[8. failure](./trials/8.failure.json) | ❌ | 32,433 ms
[9. failure](./trials/9.failure.json) | ❌ | 35,135 ms
[10. failure](./trials/10.failure.json) | ❌ | 36,099 ms