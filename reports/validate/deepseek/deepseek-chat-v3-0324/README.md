# Validate Benchmark
## Summary
  - Model
    - schema: chatgpt
    - vendor: deepseek/deepseek-chat-v3-0324
  - Aggregation
    - Scenarios: #8
    - Trial: #80
    - Success: #76
      - 1st: #56
      - 2nd: #16
      - 3rd: #2
    - Failure: #0
    - Nothing: #3
    - Error: #1
    - Average Time: 19897.8375 ms
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

## Experiments
Name | Status | Time / Avg
:----|:-------|------------:
[ValidateObjectConstraint](./ValidateObjectConstraint/README.md) | 1️⃣1️⃣1️⃣1️⃣2️⃣1️⃣1️⃣1️⃣1️⃣2️⃣
[ValidateObjectFunctionSchema](./ValidateObjectFunctionSchema/README.md) | 2️⃣2️⃣⚠️4️⃣3️⃣⚠️3️⃣⚠️⚠️4️⃣
[ValidateObjectGeometry](./ValidateObjectGeometry/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectHierarchical](./ObjectHierarchical/README.md) | 1️⃣1️⃣1️⃣2️⃣2️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectJsonSchema](./ObjectJsonSchema/README.md) | 2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣
[ObjectSimple](./ObjectSimple/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionExplicit](./ObjectUnionExplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣
[ObjectUnionImplicit](./ObjectUnionImplicit/README.md) | 1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣