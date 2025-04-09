# ObjectUnionExplicit
## Summary
  - Aggregation
    - Trial: #10
    - Success: #4
      - 1st: #4
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #6
    - Error: 0
    - Average Time: 113656.7 ms
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
Draw a canvas with "shape" filename and following shapes.

At first, draw 5 points of below:

  - (0, 0),
  - (100, 50),
  - (200, 100),
  - (300, 150),
  - (400, 200)

Then, draw a line between (0, 0) and (400, 200).

After that, draw three circles with below:

  - center (100, 50) with radius 50
  - center (200, 100) with radius 100
  - center (300, 150) with radius 150

At next, draw a triangle ((0, 0), (100, 50), (200, 100)).

Then, draw two rectangle with below points:

  - (0, 0), (100, 50), (200, 100), (300, 150)
  - (100, 50), (200, 100), (300, 150), (400, 200)

At last, draw a polygon with below points:

  - outer: (0, 0), (100, 50), (200, 100), (300, 150), (400, 200)
  - inner
    - (50, 25), (150, 75), (250, 125), (350, 175)
    - (75, 37), (175, 87), (275, 137), (375, 187)

## Trials
No | Status | Time
---:|:-------|------:
[1. nothing](./trials/1.nothing.json) | ⚠️ | 201,206 ms
[2. success](./trials/2.success.json) | 1️⃣ | 34,626 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 202,510 ms
[4. success](./trials/4.success.json) | 1️⃣ | 36,471 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 74,988 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 194,100 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 164,190 ms
[8. success](./trials/8.success.json) | 1️⃣ | 32,499 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 163,439 ms
[10. success](./trials/10.success.json) | 1️⃣ | 32,538 ms