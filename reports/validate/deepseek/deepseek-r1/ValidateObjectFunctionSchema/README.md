# ValidateObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #1
      - 1st: #1
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 9
    - Average Time: 86636.8 ms
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
[1. error](./trials/1.error.json) | ⚠️ | 79,244 ms
[2. error](./trials/2.error.json) | ⚠️ | 55,204 ms
[3. error](./trials/3.error.json) | ⚠️ | 83,059 ms
[4. error](./trials/4.error.json) | ⚠️ | 122,127 ms
[5. error](./trials/5.error.json) | ⚠️ | 84,746 ms
[6. success](./trials/6.success.json) | 1️⃣ | 62,211 ms
[7. error](./trials/7.error.json) | ⚠️ | 108,569 ms
[8. error](./trials/8.error.json) | ⚠️ | 85,313 ms
[9. error](./trials/9.error.json) | ⚠️ | 97,846 ms
[10. error](./trials/10.error.json) | ⚠️ | 88,049 ms