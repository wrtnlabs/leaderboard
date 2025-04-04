# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #5
      - 1st: #0
      - 2nd: #3
      - 3rd: #2
    - Failure: #1
    - Nothing: #3
    - Error: 1
    - Average Time: 50610.2 ms
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
[1. error](./trials/1.error.json) | ⚠️ | 25,889 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 28,266 ms
[3. success](./trials/3.success.json) | 2️⃣ | 42,921 ms
[4. success](./trials/4.success.json) | 2️⃣ | 59,859 ms
[5. success](./trials/5.success.json) | 2️⃣ | 46,221 ms
[6. success](./trials/6.success.json) | 3️⃣ | 47,099 ms
[7. success](./trials/7.success.json) | 3️⃣ | 50,820 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 48,502 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 69,740 ms
[10. failure](./trials/10.failure.json) | ❌ | 86,785 ms