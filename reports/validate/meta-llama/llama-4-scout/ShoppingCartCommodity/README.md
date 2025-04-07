# ShoppingCartCommodity
## Summary
  - Aggregation
    - Trial: #10
    - Success: #2
      - 1st: #1
      - 2nd: #1
      - 3rd: #0
    - Failure: #0
    - Nothing: #8
    - Error: 0
    - Average Time: 14478.2 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 12,287 ms
[2. success](./trials/2.success.json) | 2️⃣ | 16,236 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 26,473 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 25,153 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 5,935 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 4,851 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 8,454 ms
[8. success](./trials/8.success.json) | 1️⃣ | 9,288 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 9,580 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 26,525 ms