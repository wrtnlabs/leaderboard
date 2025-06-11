# ShoppingSaleDetail
## Summary
  - Aggregation
    - Trial: #10
    - Success: #6
      - 1st: #6
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 4
    - Average Time: 24737.3 ms
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
[1. error](./trials/1.error.json) | 😱 | 42,878 ms
[2. success](./trials/2.success.json) | 1️⃣ | 7,355 ms
[3. error](./trials/3.error.json) | 😱 | 41,667 ms
[4. success](./trials/4.success.json) | 1️⃣ | 7,600 ms
[5. success](./trials/5.success.json) | 1️⃣ | 7,010 ms
[6. error](./trials/6.error.json) | 😱 | 53,247 ms
[7. success](./trials/7.success.json) | 1️⃣ | 17,666 ms
[8. error](./trials/8.error.json) | 😱 | 49,538 ms
[9. success](./trials/9.success.json) | 1️⃣ | 12,140 ms
[10. success](./trials/10.success.json) | 1️⃣ | 8,272 ms