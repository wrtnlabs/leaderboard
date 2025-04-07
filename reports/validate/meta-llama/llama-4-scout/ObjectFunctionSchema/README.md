# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #7
    - Error: 3
    - Average Time: 13335 ms
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
[1. error](./trials/1.error.json) | ⚠️ | 12,612 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 18,524 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 20,843 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 6,544 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 16,970 ms
[6. error](./trials/6.error.json) | ⚠️ | 7,789 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 3,858 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 15,693 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 10,497 ms
[10. error](./trials/10.error.json) | ⚠️ | 20,020 ms