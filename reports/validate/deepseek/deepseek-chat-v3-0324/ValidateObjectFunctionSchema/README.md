# ValidateObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #6
      - 1st: #0
      - 2nd: #2
      - 3rd: #2
    - Failure: #0
    - Nothing: #3
    - Error: 1
    - Average Time: 56201.3 ms
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
[1. success](./trials/1.success.json) | 2️⃣ | 44,754 ms
[2. success](./trials/2.success.json) | 2️⃣ | 46,176 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 68,154 ms
[4. success](./trials/4.success.json) | 4️⃣ | 80,087 ms
[5. success](./trials/5.success.json) | 3️⃣ | 56,065 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 72,440 ms
[7. success](./trials/7.success.json) | 3️⃣ | 67,836 ms
[8. error](./trials/8.error.json) | ⚠️ | 23,039 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 24,435 ms
[10. success](./trials/10.success.json) | 4️⃣ | 79,027 ms