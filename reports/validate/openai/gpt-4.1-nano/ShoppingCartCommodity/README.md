# ShoppingCartCommodity
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #8
    - Nothing: #0
    - Error: 2
    - Average Time: 73097.4 ms
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
[1. failure](./trials/1.failure.json) | ❌ | 36,356 ms
[2. failure](./trials/2.failure.json) | ❌ | 72,034 ms
[3. failure](./trials/3.failure.json) | ❌ | 33,660 ms
[4. failure](./trials/4.failure.json) | ❌ | 40,668 ms
[5. failure](./trials/5.failure.json) | ❌ | 32,938 ms
[6. failure](./trials/6.failure.json) | ❌ | 37,958 ms
[7. error](./trials/7.error.json) | 😱 | 143,357 ms
[8. failure](./trials/8.failure.json) | ❌ | 36,621 ms
[9. error](./trials/9.error.json) | 😱 | 263,509 ms
[10. failure](./trials/10.failure.json) | ❌ | 33,873 ms