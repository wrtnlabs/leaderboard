# ObjectUnionImplicit-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #0
      - 2nd: #4
      - 3rd: #1
    - Failure: #1
    - Nothing: #0
    - Error: 1
    - Average Time: 151612.6 ms
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
[1. success](./trials/1.success.json) | 5️⃣ | 162,763 ms
[2. success](./trials/2.success.json) | 2️⃣ | 114,387 ms
[3. success](./trials/3.success.json) | 3️⃣ | 94,722 ms
[4. success](./trials/4.success.json) | 5️⃣ | 227,184 ms
[5. failure](./trials/5.failure.json) | ❌ | 282,807 ms
[6. success](./trials/6.success.json) | 2️⃣ | 74,271 ms
[7. success](./trials/7.success.json) | 2️⃣ | 38,319 ms
[8. success](./trials/8.success.json) | 2️⃣ | 78,976 ms
[9. success](./trials/9.success.json) | 5️⃣ | 213,434 ms
[10. error](./trials/10.error.json) | 😱 | 229,263 ms