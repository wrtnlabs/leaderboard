# ObjectHierarchical
## Summary
  - Aggregation
    - Trial: #10
    - Success: #4
      - 1st: #1
      - 2nd: #3
      - 3rd: #0
    - Failure: #2
    - Nothing: #0
    - Error: 4
    - Average Time: 37038.5 ms
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
A customer participates in a compaign.

The customer has come from a "general" channel,
which belongs to the "wrtnlabs" enterprise.
His referrer site is "https://wrtnlabs.com",
and his ip address is "127.0.0.1".
The time of the participation is "2023-10-01T08:27:31Z".

For reference, the "general" channel's name is same as its code,
and it priority is 9, and it is not exclusive. And the channel
has been created at "2020-08-27 09:00:00 (in Korea)".

Also, the customer has joined to our membership with
"samchon@wrtnlabs.io" email address since "2023-09-01 17:55:59".
And he is authorized to use our service with "samchon" account
with "Jeongho Nam" display name.

Additionally, hi is belonged to the "wrtnlabs" enterprise account
with "Wrtn Technologies Inc." display name, and it has been created at
"2020-08-27 09:00:00". The enterprise has the best grade of 1.

## Trials
No | Status | Time
---:|:-------|------:
[1. failure](./trials/1.failure.json) | ❌ | 19,729 ms
[2. error](./trials/2.error.json) | 😱 | 5,192 ms
[3. error](./trials/3.error.json) | 😱 | 298,312 ms
[4. success](./trials/4.success.json) | 1️⃣ | 3,638 ms
[5. success](./trials/5.success.json) | 2️⃣ | 7,251 ms
[6. failure](./trials/6.failure.json) | ❌ | 16,055 ms
[7. success](./trials/7.success.json) | 2️⃣ | 4,836 ms
[8. success](./trials/8.success.json) | 2️⃣ | 9,378 ms
[9. error](./trials/9.error.json) | 😱 | 3,374 ms
[10. error](./trials/10.error.json) | 😱 | 2,620 ms