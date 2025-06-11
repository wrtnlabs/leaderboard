# ObjectUnionImplicit-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #9
      - 1st: #9
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 1
    - Average Time: 4325.5 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 726 ms
[2. success](./trials/2.success.json) | 1️⃣ | 5,527 ms
[3. success](./trials/3.success.json) | 1️⃣ | 4,647 ms
[4. success](./trials/4.success.json) | 1️⃣ | 5,392 ms
[5. error](./trials/5.error.json) | 😱 | 6,340 ms
[6. success](./trials/6.success.json) | 1️⃣ | 5,394 ms
[7. success](./trials/7.success.json) | 1️⃣ | 3,859 ms
[8. success](./trials/8.success.json) | 1️⃣ | 3,648 ms
[9. success](./trials/9.success.json) | 1️⃣ | 3,588 ms
[10. success](./trials/10.success.json) | 1️⃣ | 4,134 ms