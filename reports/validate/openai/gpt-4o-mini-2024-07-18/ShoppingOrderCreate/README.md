# ShoppingOrderCreate
## Summary
  - Aggregation
    - Trial: #10
    - Success: #10
      - 1st: #10
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 0
    - Average Time: 7237 ms
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

### Function Calling
```json
{
  "body": {
    "sale_id": "7212bc44-31f8-4571-b3e9-5362040aee50",
    "stocks": [
      {
        "unit_id": "2e217919-45f4-45f3-9712-d535b7efa7b3",
        "stock_id": "92198c1d-f8f3-4f5c-b06d-59a801f20b7d",
        "choices": [],
        "quantity": 1
      },
      {
        "unit_id": "40715b49-3fcd-405e-bf7e-0bf4c922236b",
        "stock_id": "271f05b5-b3c7-4c6a-b49f-1d1fec7730ff",
        "choices": [],
        "quantity": 1
      },
      {
        "unit_id": "097ec976-d654-413a-b8f2-499601513bf1",
        "stock_id": "68656a63-49e3-4687-8575-11094be63a7d",
        "choices": [],
        "quantity": 1
      }
    ],
    "volume": 1,
    "accumulate": false
  }
}
```

### Conversation (user)
Take the shopping cart to the order

## Trials
No | Status | Time
---:|:-------|------:
[1. success](./trials/1.success.json) | 1️⃣ | 6,760 ms
[2. success](./trials/2.success.json) | 1️⃣ | 7,063 ms
[3. success](./trials/3.success.json) | 1️⃣ | 7,381 ms
[4. success](./trials/4.success.json) | 1️⃣ | 7,379 ms
[5. success](./trials/5.success.json) | 1️⃣ | 7,389 ms
[6. success](./trials/6.success.json) | 1️⃣ | 7,421 ms
[7. success](./trials/7.success.json) | 1️⃣ | 7,498 ms
[8. success](./trials/8.success.json) | 1️⃣ | 7,182 ms
[9. success](./trials/9.success.json) | 1️⃣ | 7,302 ms
[10. success](./trials/10.success.json) | 1️⃣ | 6,995 ms