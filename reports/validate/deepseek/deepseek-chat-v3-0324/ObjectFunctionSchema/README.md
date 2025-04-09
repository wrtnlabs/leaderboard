# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #3
      - 1st: #0
      - 2nd: #2
      - 3rd: #0
    - Failure: #0
    - Nothing: #2
    - Error: 5
    - Average Time: 45405.3 ms
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
[1. error](./trials/1.error.json) | 😱 | 40,467 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 67,752 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 70,747 ms
[4. success](./trials/4.success.json) | 2️⃣ | 43,874 ms
[5. error](./trials/5.error.json) | 😱 | 20,785 ms
[6. error](./trials/6.error.json) | 😱 | 27,440 ms
[7. success](./trials/7.success.json) | 5️⃣ | 122,667 ms
[8. error](./trials/8.error.json) | 😱 | 24,510 ms
[9. error](./trials/9.error.json) | 😱 | 12,545 ms
[10. success](./trials/10.success.json) | 2️⃣ | 23,266 ms