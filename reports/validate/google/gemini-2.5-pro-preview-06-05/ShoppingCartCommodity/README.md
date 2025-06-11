# ShoppingCartCommodity
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #5
    - Nothing: #5
    - Error: 0
    - Average Time: 152650.8 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 178,058 ms
[2. failure](./trials/2.failure.json) | ❌ | 203,374 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 65,360 ms
[4. failure](./trials/4.failure.json) | ❌ | 163,072 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 256,614 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 109,082 ms
[7. failure](./trials/7.failure.json) | ❌ | 221,620 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 10,034 ms
[9. failure](./trials/9.failure.json) | ❌ | 199,758 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 119,536 ms