# ShoppingCartCommodity
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
    - Average Time: 1028.1 ms
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
[1. error](./trials/1.error.json) | 😱 | 962 ms
[2. error](./trials/2.error.json) | 😱 | 1,008 ms
[3. error](./trials/3.error.json) | 😱 | 1,106 ms
[4. error](./trials/4.error.json) | 😱 | 1,310 ms
[5. error](./trials/5.error.json) | 😱 | 919 ms
[6. error](./trials/6.error.json) | 😱 | 888 ms
[7. error](./trials/7.error.json) | 😱 | 981 ms
[8. error](./trials/8.error.json) | 😱 | 1,074 ms
[9. error](./trials/9.error.json) | 😱 | 1,085 ms
[10. error](./trials/10.error.json) | 😱 | 948 ms