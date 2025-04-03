# ValidateObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #2
      - 1st: #2
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #1
    - Error: 7
    - Average Time: 163711.2 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 13,643 ms
[2. error](./trials/2.error.json) | ⚠️ | 900,490 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 585,040 ms
[4. error](./trials/4.error.json) | ⚠️ | 25,398 ms
[5. error](./trials/5.error.json) | ⚠️ | 38,757 ms
[6. error](./trials/6.error.json) | ⚠️ | 11,848 ms
[7. success](./trials/7.success.json) | 1️⃣ | 22,199 ms
[8. error](./trials/8.error.json) | ⚠️ | 9,757 ms
[9. error](./trials/9.error.json) | ⚠️ | 9,520 ms
[10. error](./trials/10.error.json) | ⚠️ | 20,460 ms