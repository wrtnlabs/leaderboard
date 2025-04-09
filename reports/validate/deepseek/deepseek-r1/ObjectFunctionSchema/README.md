# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #9
    - Error: 1
    - Average Time: 43430.7 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 29,723 ms
[2. error](./trials/2.error.json) | 😱 | 34,805 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 61,709 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 47,537 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 41,799 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 53,211 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 34,061 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 47,950 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 25,363 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 58,149 ms