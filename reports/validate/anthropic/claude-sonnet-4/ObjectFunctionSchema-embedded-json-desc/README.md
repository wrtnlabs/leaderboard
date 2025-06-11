# ObjectFunctionSchema-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #10
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 13028.2 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 14,390 ms
[2. success](./trials/2.success.json) | 1️⃣ | 9,335 ms
[3. success](./trials/3.success.json) | 1️⃣ | 10,158 ms
[4. success](./trials/4.success.json) | 1️⃣ | 12,929 ms
[5. success](./trials/5.success.json) | 1️⃣ | 17,836 ms
[6. success](./trials/6.success.json) | 1️⃣ | 7,754 ms
[7. success](./trials/7.success.json) | 1️⃣ | 7,687 ms
[8. success](./trials/8.success.json) | 1️⃣ | 18,922 ms
[9. success](./trials/9.success.json) | 1️⃣ | 13,922 ms
[10. success](./trials/10.success.json) | 1️⃣ | 17,349 ms