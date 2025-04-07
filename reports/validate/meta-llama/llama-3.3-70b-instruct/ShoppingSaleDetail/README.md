# ShoppingSaleDetail
## Summary
  - Aggregation
    - Trial: #10
    - Success: #7
      - 1st: #7
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #3
    - Error: 0
    - Average Time: 21253.1 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 29,870 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 19,408 ms
[3. success](./trials/3.success.json) | 1️⃣ | 29,055 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 47,245 ms
[5. success](./trials/5.success.json) | 1️⃣ | 9,589 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 27,859 ms
[7. success](./trials/7.success.json) | 1️⃣ | 27,943 ms
[8. success](./trials/8.success.json) | 1️⃣ | 8,655 ms
[9. success](./trials/9.success.json) | 1️⃣ | 8,606 ms
[10. success](./trials/10.success.json) | 1️⃣ | 4,301 ms
