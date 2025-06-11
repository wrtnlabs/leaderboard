# ObjectFunctionSchema
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
    - Average Time: 29195.9 ms
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
[1. error](./trials/1.error.json) | 😱 | 25,528 ms
[2. error](./trials/2.error.json) | 😱 | 33,237 ms
[3. error](./trials/3.error.json) | 😱 | 49,799 ms
[4. error](./trials/4.error.json) | 😱 | 29,403 ms
[5. error](./trials/5.error.json) | 😱 | 29,720 ms
[6. error](./trials/6.error.json) | 😱 | 25,675 ms
[7. error](./trials/7.error.json) | 😱 | 24,613 ms
[8. error](./trials/8.error.json) | 😱 | 26,058 ms
[9. error](./trials/9.error.json) | 😱 | 23,202 ms
[10. error](./trials/10.error.json) | 😱 | 24,724 ms