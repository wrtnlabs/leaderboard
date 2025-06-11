# ShoppingCartCommodity
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
    - Average Time: 27257.6 ms
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

### Function Calling
```json
{
  "id": "7212bc44-31f8-4571-b3e9-5362040aee50"
}
```

### Conversation (user)
Select the (silver, 16gb, 1tb, English) stock and put it to the shopping cart

## Trials
No | Status | Time
---:|:-------|------:
[1. success](./trials/1.success.json) | 1️⃣ | 16,157 ms
[2. error](./trials/2.error.json) | 😱 | 65,308 ms
[3. success](./trials/3.success.json) | 1️⃣ | 11,981 ms
[4. error](./trials/4.error.json) | 😱 | 42,496 ms
[5. error](./trials/5.error.json) | 😱 | 42,176 ms
[6. success](./trials/6.success.json) | 1️⃣ | 13,671 ms
[7. success](./trials/7.success.json) | 1️⃣ | 12,051 ms
[8. success](./trials/8.success.json) | 1️⃣ | 10,909 ms
[9. success](./trials/9.success.json) | 1️⃣ | 12,586 ms
[10. error](./trials/10.error.json) | 😱 | 45,241 ms