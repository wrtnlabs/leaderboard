# ShoppingCartCommodity
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #9
      - 2nd: #1
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 40644.3 ms
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
[1. success](./trials/1.success.json) | 🥇 | 42,520 ms
[2. success](./trials/2.success.json) | 🥇 | 38,345 ms
[3. success](./trials/3.success.json) | 🥇 | 40,115 ms
[4. success](./trials/4.success.json) | 🥇 | 28,641 ms
[5. success](./trials/5.success.json) | 🥇 | 40,621 ms
[6. success](./trials/6.success.json) | 2️⃣ | 70,648 ms
[7. success](./trials/7.success.json) | 🥇 | 37,719 ms
[8. success](./trials/8.success.json) | 🥇 | 29,874 ms
[9. success](./trials/9.success.json) | 🥇 | 33,722 ms
[10. success](./trials/10.success.json) | 🥇 | 44,238 ms