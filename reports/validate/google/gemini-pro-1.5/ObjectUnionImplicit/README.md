# ObjectUnionImplicit
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
    - Average Time: 26132.2 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 28,481 ms
[2. failure](./trials/2.failure.json) | ❌ | 27,827 ms
[3. failure](./trials/3.failure.json) | ❌ | 24,474 ms
[4. failure](./trials/4.failure.json) | ❌ | 23,580 ms
[5. failure](./trials/5.failure.json) | ❌ | 24,310 ms
[6. failure](./trials/6.failure.json) | ❌ | 28,362 ms
[7. failure](./trials/7.failure.json) | ❌ | 27,874 ms
[8. failure](./trials/8.failure.json) | ❌ | 23,715 ms
[9. failure](./trials/9.failure.json) | ❌ | 24,155 ms
[10. failure](./trials/10.failure.json) | ❌ | 28,544 ms