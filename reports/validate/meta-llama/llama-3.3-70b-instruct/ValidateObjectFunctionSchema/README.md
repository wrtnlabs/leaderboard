# ValidateObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #1
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #3
    - Nothing: #6
    - Error: 0
    - Average Time: 37682.6 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 16,277 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 25,963 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 32,091 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 45,567 ms
[5. failure](./trials/5.failure.json) | ❌ | 47,150 ms
[6. failure](./trials/6.failure.json) | ❌ | 52,960 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 32,226 ms
[8. success](./trials/8.success.json) | 4️⃣ | 35,832 ms
[9. failure](./trials/9.failure.json) | ❌ | 40,276 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 48,484 ms