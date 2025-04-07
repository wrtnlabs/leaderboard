# ShoppingCartCommodity
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #10
    - Error: 0
    - Average Time: 38752.8 ms
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 18,576 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 27,558 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 89,911 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 28,156 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 18,459 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 9,989 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 6,977 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 29,851 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 67,901 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 90,150 ms