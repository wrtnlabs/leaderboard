# ObjectUnionExplicit
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
    - Average Time: 7579.7 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 5,458 ms
[2. success](./trials/2.success.json) | 1️⃣ | 10,733 ms
[3. success](./trials/3.success.json) | 1️⃣ | 6,661 ms
[4. success](./trials/4.success.json) | 1️⃣ | 5,302 ms
[5. success](./trials/5.success.json) | 1️⃣ | 6,999 ms
[6. success](./trials/6.success.json) | 1️⃣ | 7,229 ms
[7. success](./trials/7.success.json) | 1️⃣ | 11,304 ms
[8. success](./trials/8.success.json) | 1️⃣ | 6,459 ms
[9. success](./trials/9.success.json) | 1️⃣ | 5,774 ms
[10. success](./trials/10.success.json) | 1️⃣ | 9,878 ms