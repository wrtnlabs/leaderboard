# ValidateObjectFunctionSchema
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
    - Average Time: 30290.1 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 26,967 ms
[2. failure](./trials/2.failure.json) | ❌ | 23,629 ms
[3. failure](./trials/3.failure.json) | ❌ | 28,780 ms
[4. failure](./trials/4.failure.json) | ❌ | 39,264 ms
[5. failure](./trials/5.failure.json) | ❌ | 32,749 ms
[6. failure](./trials/6.failure.json) | ❌ | 28,230 ms
[7. failure](./trials/7.failure.json) | ❌ | 35,358 ms
[8. failure](./trials/8.failure.json) | ❌ | 35,377 ms
[9. failure](./trials/9.failure.json) | ❌ | 26,788 ms
[10. failure](./trials/10.failure.json) | ❌ | 25,759 ms