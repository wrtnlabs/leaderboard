# ObjectUnionImplicit-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 10
    - Average Time: 15145.9 ms
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
[1. error](./trials/1.error.json) | 😱 | 21,120 ms
[2. error](./trials/2.error.json) | 😱 | 19,619 ms
[3. error](./trials/3.error.json) | 😱 | 11,666 ms
[4. error](./trials/4.error.json) | 😱 | 17,808 ms
[5. error](./trials/5.error.json) | 😱 | 14,447 ms
[6. error](./trials/6.error.json) | 😱 | 12,006 ms
[7. error](./trials/7.error.json) | 😱 | 11,890 ms
[8. error](./trials/8.error.json) | 😱 | 11,470 ms
[9. error](./trials/9.error.json) | 😱 | 19,815 ms
[10. error](./trials/10.error.json) | 😱 | 11,618 ms