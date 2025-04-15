# ObjectFunctionSchema
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #7
    - Nothing: #0
    - Error: 3
    - Average Time: 93243.1 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 23,866 ms
[2. error](./trials/2.error.json) | 😱 | 304,008 ms
[3. failure](./trials/3.failure.json) | ❌ | 117,070 ms
[4. failure](./trials/4.failure.json) | ❌ | 27,775 ms
[5. failure](./trials/5.failure.json) | ❌ | 21,828 ms
[6. failure](./trials/6.failure.json) | ❌ | 22,063 ms
[7. failure](./trials/7.failure.json) | ❌ | 51,835 ms
[8. error](./trials/8.error.json) | 😱 | 218,273 ms
[9. failure](./trials/9.failure.json) | ❌ | 27,126 ms
[10. error](./trials/10.error.json) | 😱 | 118,587 ms