# ShoppingOrderPublish
## Summary
  - Aggregation
    - Trial: #10
    - Success: #0
      - 1st: #0
      - 2nd: #0
      - 3rd: #0
    - Failure: #0
    - Nothing: #10
    - Error: 0
    - Average Time: 19414.8 ms
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
        "commodity_id": "d9a8ddfe-0f99-4c90-ba86-71fecec4d016",
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
[1. nothing](./trials/1.nothing.json) | ⚠️ | 17,558 ms
[2. nothing](./trials/2.nothing.json) | ⚠️ | 12,774 ms
[3. nothing](./trials/3.nothing.json) | ⚠️ | 17,274 ms
[4. nothing](./trials/4.nothing.json) | ⚠️ | 6,666 ms
[5. nothing](./trials/5.nothing.json) | ⚠️ | 62,749 ms
[6. nothing](./trials/6.nothing.json) | ⚠️ | 16,824 ms
[7. nothing](./trials/7.nothing.json) | ⚠️ | 17,484 ms
[8. nothing](./trials/8.nothing.json) | ⚠️ | 16,812 ms
[9. nothing](./trials/9.nothing.json) | ⚠️ | 10,918 ms
[10. nothing](./trials/10.nothing.json) | ⚠️ | 15,089 ms