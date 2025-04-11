# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #1
      - 2nd: #4
      - 3rd: #4
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 12971.9 ms
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
[1. success](./trials/1.success.json) | 3️⃣ | 14,198 ms
[2. success](./trials/2.success.json) | 3️⃣ | 10,143 ms
[3. success](./trials/3.success.json) | 3️⃣ | 14,843 ms
[4. success](./trials/4.success.json) | 2️⃣ | 10,285 ms
[5. success](./trials/5.success.json) | 4️⃣ | 27,238 ms
[6. success](./trials/6.success.json) | 2️⃣ | 8,795 ms
[7. success](./trials/7.success.json) | 1️⃣ | 12,101 ms
[8. success](./trials/8.success.json) | 3️⃣ | 12,854 ms
[9. success](./trials/9.success.json) | 2️⃣ | 10,594 ms
[10. success](./trials/10.success.json) | 2️⃣ | 8,668 ms