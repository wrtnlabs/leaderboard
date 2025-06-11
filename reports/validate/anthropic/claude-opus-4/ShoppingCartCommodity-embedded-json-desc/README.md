# ShoppingCartCommodity-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #2
      - 1st: #2
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 8
    - Average Time: 26436.9 ms
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
[1. error](./trials/1.error.json) | 😱 | 32,127 ms
[2. success](./trials/2.success.json) | 1️⃣ | 25,296 ms
[3. error](./trials/3.error.json) | 😱 | 12,862 ms
[4. error](./trials/4.error.json) | 😱 | 25,151 ms
[5. error](./trials/5.error.json) | 😱 | 31,001 ms
[6. error](./trials/6.error.json) | 😱 | 37,827 ms
[7. success](./trials/7.success.json) | 1️⃣ | 27,317 ms
[8. error](./trials/8.error.json) | 😱 | 18,155 ms
[9. error](./trials/9.error.json) | 😱 | 30,094 ms
[10. error](./trials/10.error.json) | 😱 | 24,539 ms