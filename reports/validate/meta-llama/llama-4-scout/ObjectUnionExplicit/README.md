# ObjectUnionExplicit
## Summary
  - Aggregation
    - Trial: #10
    - Success: #8
      - 1st: #4
      - 2nd: #2
      - 3rd: #1
    - Failure: #0
    - Nothing: #2
    - Error: 0
    - Average Time: 9727.4 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 3,528 ms
[2. success](./trials/2.success.json) | 1️⃣ | 3,281 ms
[3. success](./trials/3.success.json) | 1️⃣ | 3,686 ms
[4. success](./trials/4.success.json) | 2️⃣ | 4,981 ms
[5. success](./trials/5.success.json) | 4️⃣ | 24,985 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 16,307 ms
[7. success](./trials/7.success.json) | 2️⃣ | 5,517 ms
[8. success](./trials/8.success.json) | 1️⃣ | 3,580 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 15,583 ms
[10. success](./trials/10.success.json) | 3️⃣ | 15,826 ms