# ShoppingCartCommodity
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #4
      - 2nd: #4
      - 3rd: #1
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 52726.7 ms
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
[1. success](./trials/1.success.json) | 1️⃣ | 38,504 ms
[2. success](./trials/2.success.json) | 2️⃣ | 45,810 ms
[3. success](./trials/3.success.json) | 2️⃣ | 62,664 ms
[4. success](./trials/4.success.json) | 3️⃣ | 77,873 ms
[5. success](./trials/5.success.json) | 1️⃣ | 33,475 ms
[6. success](./trials/6.success.json) | 1️⃣ | 36,480 ms
[7. success](./trials/7.success.json) | 4️⃣ | 112,837 ms
[8. success](./trials/8.success.json) | 2️⃣ | 43,436 ms
[9. success](./trials/9.success.json) | 1️⃣ | 21,287 ms
[10. success](./trials/10.success.json) | 2️⃣ | 54,901 ms