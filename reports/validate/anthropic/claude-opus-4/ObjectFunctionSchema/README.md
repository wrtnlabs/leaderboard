# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #4
      - 1st: #4
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 6
    - Average Time: 28502.2 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 16,415 ms
[2. error](./trials/2.error.json) | 😱 | 26,191 ms
[3. success](./trials/3.success.json) | 1️⃣ | 33,045 ms
[4. error](./trials/4.error.json) | 😱 | 56,669 ms
[5. error](./trials/5.error.json) | 😱 | 28,074 ms
[6. error](./trials/6.error.json) | 😱 | 28,419 ms
[7. success](./trials/7.success.json) | 1️⃣ | 11,177 ms
[8. error](./trials/8.error.json) | 😱 | 25,466 ms
[9. success](./trials/9.success.json) | 1️⃣ | 14,836 ms
[10. error](./trials/10.error.json) | 😱 | 44,730 ms