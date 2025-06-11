# ShoppingCartCommodity-embedded-json-desc
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #3
      - 2nd: #6
      - 3rd: #1
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 10177 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 5,370 ms
[2. success](./trials/2.success.json) | 2️⃣ | 8,818 ms
[3. success](./trials/3.success.json) | 2️⃣ | 13,885 ms
[4. success](./trials/4.success.json) | 2️⃣ | 11,803 ms
[5. success](./trials/5.success.json) | 2️⃣ | 10,507 ms
[6. success](./trials/6.success.json) | 1️⃣ | 5,554 ms
[7. success](./trials/7.success.json) | 2️⃣ | 11,732 ms
[8. success](./trials/8.success.json) | 1️⃣ | 8,835 ms
[9. success](./trials/9.success.json) | 3️⃣ | 13,600 ms
[10. success](./trials/10.success.json) | 2️⃣ | 11,666 ms