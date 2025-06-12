# ObjectUnionImplicit-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #8
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 2
    - Average Time: 5899.3 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 6,183 ms
[2. success](./trials/2.success.json) | 1️⃣ | 6,098 ms
[3. success](./trials/3.success.json) | 1️⃣ | 5,322 ms
[4. success](./trials/4.success.json) | 1️⃣ | 5,546 ms
[5. success](./trials/5.success.json) | 1️⃣ | 5,960 ms
[6. success](./trials/6.success.json) | 1️⃣ | 6,293 ms
[7. error](./trials/7.error.json) | 😱 | 6,305 ms
[8. success](./trials/8.success.json) | 1️⃣ | 5,670 ms
[9. error](./trials/9.error.json) | 😱 | 5,807 ms
[10. success](./trials/10.success.json) | 1️⃣ | 5,809 ms