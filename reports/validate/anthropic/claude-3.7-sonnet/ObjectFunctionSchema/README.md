# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #9
      - 2nd: #1
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 13998.8 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 11,875 ms
[2. success](./trials/2.success.json) | 1️⃣ | 14,162 ms
[3. success](./trials/3.success.json) | 1️⃣ | 13,460 ms
[4. success](./trials/4.success.json) | 1️⃣ | 13,341 ms
[5. success](./trials/5.success.json) | 1️⃣ | 13,265 ms
[6. success](./trials/6.success.json) | 1️⃣ | 12,532 ms
[7. success](./trials/7.success.json) | 2️⃣ | 23,109 ms
[8. success](./trials/8.success.json) | 1️⃣ | 13,432 ms
[9. success](./trials/9.success.json) | 1️⃣ | 12,166 ms
[10. success](./trials/10.success.json) | 1️⃣ | 12,646 ms