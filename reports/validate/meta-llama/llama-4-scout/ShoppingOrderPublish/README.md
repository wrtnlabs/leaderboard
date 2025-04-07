# ShoppingOrderPublish
## Summary
  - Aggregation
    - Trial: #10
    - Success: #4
      - 1st: #0
      - 2nd: #2
      - 3rd: #2
    - Failure: #0
    - Nothing: #6
    - Error: 0
    - Average Time: 24540.8 ms
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
        "commodity_id": "063ffcb3-6650-459e-89a5-8e8060ea1664",
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 34,335 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 6,321 ms
[3. success](./trials/3.success.json) | 3️⃣ | 19,501 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 6,033 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 32,942 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 22,101 ms
[7. success](./trials/7.success.json) | 2️⃣ | 37,981 ms
[8. success](./trials/8.success.json) | 2️⃣ | 17,836 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 37,352 ms
[10. success](./trials/10.success.json) | 3️⃣ | 31,006 ms