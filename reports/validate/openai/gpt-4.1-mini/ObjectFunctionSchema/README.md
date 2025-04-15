# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #1
      - 2nd: #1
      - 3rd: #2
    - Failure: #2
    - Nothing: #0
    - Error: 0
    - Average Time: 24573.2 ms
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
[1. success](./trials/1.success.json) | 5️⃣ | 29,346 ms
[2. success](./trials/2.success.json) | 2️⃣ | 11,689 ms
[3. success](./trials/3.success.json) | 4️⃣ | 22,084 ms
[4. success](./trials/4.success.json) | 5️⃣ | 26,113 ms
[5. success](./trials/5.success.json) | 4️⃣ | 29,989 ms
[6. success](./trials/6.success.json) | 1️⃣ | 9,863 ms
[7. success](./trials/7.success.json) | 3️⃣ | 15,754 ms
[8. failure](./trials/8.failure.json) | ❌ | 55,363 ms
[9. success](./trials/9.success.json) | 3️⃣ | 20,600 ms
[10. failure](./trials/10.failure.json) | ❌ | 24,931 ms