# ShoppingSaleDetail-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #1
      - 1st: #1
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 9
    - Average Time: 27944.9 ms
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
Would you show me sales in the market?

### Function Calling
```json
{
  "body": {}
}
```

### Conversation (user)
I wanna see detailed information of MacBook

## Trials
No | Status | Time
---:|:-------|------:
[1. error](./trials/1.error.json) | 😱 | 20,469 ms
[2. success](./trials/2.success.json) | 1️⃣ | 35,899 ms
[3. error](./trials/3.error.json) | 😱 | 31,533 ms
[4. error](./trials/4.error.json) | 😱 | 34,053 ms
[5. error](./trials/5.error.json) | 😱 | 26,936 ms
[6. error](./trials/6.error.json) | 😱 | 21,744 ms
[7. error](./trials/7.error.json) | 😱 | 36,751 ms
[8. error](./trials/8.error.json) | 😱 | 32,400 ms
[9. error](./trials/9.error.json) | 😱 | 20,461 ms
[10. error](./trials/10.error.json) | 😱 | 19,203 ms