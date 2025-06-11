# ObjectFunctionSchema-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #10
    - Nothing: #0
    - Error: 0
    - Average Time: 34970.1 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 43,479 ms
[2. failure](./trials/2.failure.json) | ❌ | 22,063 ms
[3. failure](./trials/3.failure.json) | ❌ | 41,144 ms
[4. failure](./trials/4.failure.json) | ❌ | 27,570 ms
[5. failure](./trials/5.failure.json) | ❌ | 32,098 ms
[6. failure](./trials/6.failure.json) | ❌ | 27,076 ms
[7. failure](./trials/7.failure.json) | ❌ | 31,265 ms
[8. failure](./trials/8.failure.json) | ❌ | 36,802 ms
[9. failure](./trials/9.failure.json) | ❌ | 40,451 ms
[10. failure](./trials/10.failure.json) | ❌ | 47,753 ms