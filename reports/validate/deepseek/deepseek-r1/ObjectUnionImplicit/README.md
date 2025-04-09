# ObjectUnionImplicit
## Summary
  - Aggregation
    - Trial: #10
    - Success: #6
      - 1st: #6
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #4
    - Error: 0
    - Average Time: 98717.3 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 24,436 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 146,845 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 150,966 ms
[4. success](./trials/4.success.json) | 1️⃣ | 29,173 ms
[5. success](./trials/5.success.json) | 1️⃣ | 27,607 ms
[6. success](./trials/6.success.json) | 1️⃣ | 63,009 ms
[7. success](./trials/7.success.json) | 1️⃣ | 44,761 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 205,244 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 271,012 ms
[10. success](./trials/10.success.json) | 1️⃣ | 24,120 ms