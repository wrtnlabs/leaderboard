# ShoppingOrderPublish
## Summary
  - Aggregation
    - Trial: #10
    - Success: #5
      - 1st: #5
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #0
    - Error: 5
    - Average Time: 31552.2 ms
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

### Function Calling
```json
{
  "body": {
    "goods": [
      {
        "commodity_id": "cd6d8dcf-9531-4f8a-8c9c-2bca022c2afd",
        "volume": 1
      }
    ]
  }
}
```

### Conversation (user)
I'll pay it with cash, and my address is:

  - country: South Korea
  - city/province: Seoul
  - department: Wrtn Apartment
  - possession: 101-1411

## Trials
No | Status | Time
---:|:-------|------:
[1. error](./trials/1.error.json) | 😱 | 33,867 ms
[2. success](./trials/2.success.json) | 1️⃣ | 15,433 ms
[3. error](./trials/3.error.json) | 😱 | 33,108 ms
[4. success](./trials/4.success.json) | 1️⃣ | 16,315 ms
[5. success](./trials/5.success.json) | 1️⃣ | 11,329 ms
[6. error](./trials/6.error.json) | 😱 | 53,286 ms
[7. error](./trials/7.error.json) | 😱 | 42,508 ms
[8. error](./trials/8.error.json) | 😱 | 45,208 ms
[9. success](./trials/9.success.json) | 1️⃣ | 15,898 ms
[10. success](./trials/10.success.json) | 1️⃣ | 48,570 ms