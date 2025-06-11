# Test Report for Validate

- Each test is run 10 times.
- The first attempt is the first try of the test, which uses tool calling without any validation feedback. We pass schema and prompt to the model.
- The second and later attempts are the same as the first attempt, but with type validation feedback.
- The maximum number of attempts is 5.

We call each model with [OpenRouter.ai](https://openrouter.ai/).

### Table 1. First Try Success Rate by Task (No Validation Feedback)

This table shows the percentage of immediate ("1️⃣") successes per task.

| **Model** | **ObjConstraint** | **ObjFunctionSchema** | **ObjHierarchical** | **ObjJsonSchema** | **ObjSimple** | **ObjUnionExp** | **ObjUnionImpl** | **ShoppingCartComm** | **ShoppingOrderCreate** | **ShoppingOrderPublish** | **ShoppingSaleDetail** | **ShoppingSalePage** | **ObjConstraint** | **ObjFunctionSchema** | **ObjGeometry** |
|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|
| claude-3.5-sonnet (anthropic/claude-3.5-sonnet) | 100.0% | 100.0% | 100.0% | 0.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| claude-3.7-sonnet (anthropic/claude-3.7-sonnet) | 100.0% | 100.0% | 100.0% | 0.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| claude-opus-4 (anthropic/claude-opus-4) | 100.0% | 40.0% | 100.0% | 90.0% | 100.0% | 100.0% | 100.0% | 60.0% | 70.0% | 50.0% | 60.0% | 100.0% | N/A | N/A | N/A |
| claude-sonnet-4 (anthropic/claude-sonnet-4) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| deepseek-chat-v3-0324 (deepseek/deepseek-chat-v3-0324) | 100.0% | 30.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| deepseek-r1 (deepseek/deepseek-r1) | 70.0% | 0.0% | 20.0% | 40.0% | 30.0% | 40.0% | 60.0% | 0.0% | 0.0% | 0.0% | 0.0% | 0.0% | N/A | N/A | N/A |
| gemini-2.0-flash-001 (google/gemini-2.0-flash-001) | N/A | N/A | 0.0% | 0.0% | 100.0% | 0.0% | 0.0% | N/A | N/A | N/A | N/A | N/A | 100.0% | 0.0% | 100.0% |
| gemini-pro-1.5 (google/gemini-pro-1.5) | N/A | N/A | 0.0% | 0.0% | 100.0% | 0.0% | 0.0% | N/A | N/A | N/A | N/A | N/A | 100.0% | 0.0% | 100.0% |
| llama-3.3-70b-instruct (meta-llama/llama-3.3-70b-instruct) | 100.0% | 50.0% | 100.0% | 80.0% | 100.0% | 100.0% | 90.0% | 100.0% | 100.0% | 90.0% | 70.0% | 100.0% | N/A | N/A | N/A |
| llama-4-maverick (meta-llama/llama-4-maverick) | 0.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% | N/A | N/A | N/A |
| llama-4-scout (meta-llama/llama-4-scout) | 90.0% | 0.0% | 100.0% | 10.0% | 100.0% | 80.0% | 90.0% | 20.0% | 90.0% | 40.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| mistral-small-3.1-24b-instruct (mistralai/mistral-small-3.1-24b-instruct) | N/A | N/A | 100.0% | 40.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A | N/A | N/A | 90.0% | 20.0% | 100.0% |
| gpt-4.1 (openai/gpt-4.1) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 90.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4.1-mini (openai/gpt-4.1-mini) | 100.0% | 80.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4.1-nano (openai/gpt-4.1-nano) | 100.0% | 0.0% | 40.0% | 100.0% | 100.0% | 90.0% | 100.0% | 0.0% | 90.0% | 0.0% | 0.0% | 100.0% | N/A | N/A | N/A |
| gpt-4o-2024-08-06 (openai/gpt-4o-2024-08-06) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4o-2024-11-20 (openai/gpt-4o-2024-11-20) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4o-mini-2024-07-18 (openai/gpt-4o-mini-2024-07-18) | 100.0% | 10.0% | 100.0% | 80.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| o3-mini-2025-01-31 (openai/o3-mini-2025-01-31) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 90.0% | 100.0% | 100.0% | N/A | N/A | N/A |

---

### Table 2. Overall Success Rate

For each task the cell shows the percentage of trials (out of 10) that ultimately succeeded (including those that needed extra feedback).

| **Model** | **ObjConstraint** | **ObjFunctionSchema** | **ObjHierarchical** | **ObjJsonSchema** | **ObjSimple** | **ObjUnionExp** | **ObjUnionImpl** | **ShoppingCartComm** | **ShoppingOrderCreate** | **ShoppingOrderPublish** | **ShoppingSaleDetail** | **ShoppingSalePage** | **ObjConstraint** | **ObjFunctionSchema** | **ObjGeometry** |
|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|:-----------:|
| claude-3.5-sonnet (anthropic/claude-3.5-sonnet) | 100.0% | 100.0% | 100.0% | 0.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| claude-3.7-sonnet (anthropic/claude-3.7-sonnet) | 100.0% | 100.0% | 100.0% | 0.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| claude-opus-4 (anthropic/claude-opus-4) | 100.0% | 40.0% | 100.0% | 90.0% | 100.0% | 100.0% | 100.0% | 60.0% | 70.0% | 50.0% | 60.0% | 100.0% | N/A | N/A | N/A |
| claude-sonnet-4 (anthropic/claude-sonnet-4) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| deepseek-chat-v3-0324 (deepseek/deepseek-chat-v3-0324) | 100.0% | 30.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| deepseek-r1 (deepseek/deepseek-r1) | 70.0% | 0.0% | 20.0% | 40.0% | 30.0% | 40.0% | 60.0% | 0.0% | 0.0% | 0.0% | 0.0% | 0.0% | N/A | N/A | N/A |
| gemini-2.0-flash-001 (google/gemini-2.0-flash-001) | N/A | N/A | 0.0% | 0.0% | 100.0% | 0.0% | 0.0% | N/A | N/A | N/A | N/A | N/A | 100.0% | 0.0% | 100.0% |
| gemini-pro-1.5 (google/gemini-pro-1.5) | N/A | N/A | 0.0% | 0.0% | 100.0% | 0.0% | 0.0% | N/A | N/A | N/A | N/A | N/A | 100.0% | 0.0% | 100.0% |
| llama-3.3-70b-instruct (meta-llama/llama-3.3-70b-instruct) | 100.0% | 50.0% | 100.0% | 80.0% | 100.0% | 100.0% | 90.0% | 100.0% | 100.0% | 90.0% | 70.0% | 100.0% | N/A | N/A | N/A |
| llama-4-maverick (meta-llama/llama-4-maverick) | 0.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 0.0% | 0.0% | 0.0% | 0.0% | 100.0% | N/A | N/A | N/A |
| llama-4-scout (meta-llama/llama-4-scout) | 90.0% | 0.0% | 100.0% | 10.0% | 100.0% | 80.0% | 90.0% | 20.0% | 90.0% | 40.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| mistral-small-3.1-24b-instruct (mistralai/mistral-small-3.1-24b-instruct) | N/A | N/A | 100.0% | 40.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A | N/A | N/A | 90.0% | 20.0% | 100.0% |
| gpt-4.1 (openai/gpt-4.1) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 90.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4.1-mini (openai/gpt-4.1-mini) | 100.0% | 80.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4.1-nano (openai/gpt-4.1-nano) | 100.0% | 0.0% | 40.0% | 100.0% | 100.0% | 90.0% | 100.0% | 0.0% | 90.0% | 0.0% | 0.0% | 100.0% | N/A | N/A | N/A |
| gpt-4o-2024-08-06 (openai/gpt-4o-2024-08-06) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4o-2024-11-20 (openai/gpt-4o-2024-11-20) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| gpt-4o-mini-2024-07-18 (openai/gpt-4o-mini-2024-07-18) | 100.0% | 10.0% | 100.0% | 80.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | N/A | N/A | N/A |
| o3-mini-2025-01-31 (openai/o3-mini-2025-01-31) | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 100.0% | 90.0% | 100.0% | 100.0% | N/A | N/A | N/A |

---

### Table 3. Summary of Successes

| **Model** | **First Try Success** | **Final Success** | **Improvement** | **Improvement %** | **Failed Tasks** | **Avg Trials** | **Max Trials** | **Min Trials** |
|-----------|:---------------------:|:------------------:|:---------------:|:-----------------:|:----------------:|:--------------:|:--------------:|:--------------:|
| claude-3.5-sonnet (anthropic/claude-3.5-sonnet) | 110 | 110 | 0 | 0.00% | 10 | 1.458 | 6 | 1 |
| claude-3.7-sonnet (anthropic/claude-3.7-sonnet) | 110 | 110 | 0 | 0.00% | 10 | 1.425 | 6 | 1 |
| claude-opus-4 (anthropic/claude-opus-4) | 97 | 97 | 0 | 0.00% | 23 | 1.050 | 2 | 1 |
| claude-sonnet-4 (anthropic/claude-sonnet-4) | 120 | 120 | 0 | 0.00% | 0 | 1.000 | 1 | 1 |
| deepseek-chat-v3-0324 (deepseek/deepseek-chat-v3-0324) | 113 | 113 | 0 | 0.00% | 7 | 1.175 | 5 | 1 |
| deepseek-r1 (deepseek/deepseek-r1) | 26 | 26 | 0 | 0.00% | 94 | 1.000 | 1 | 1 |
| gemini-2.0-flash-001 (google/gemini-2.0-flash-001) | 30 | 30 | 0 | 0.00% | 50 | 3.500 | 6 | 1 |
| gemini-pro-1.5 (google/gemini-pro-1.5) | 30 | 30 | 0 | 0.00% | 50 | 3.513 | 6 | 1 |
| llama-3.3-70b-instruct (meta-llama/llama-3.3-70b-instruct) | 108 | 108 | 0 | 0.00% | 12 | 1.242 | 6 | 1 |
| llama-4-maverick (meta-llama/llama-4-maverick) | 70 | 70 | 0 | 0.00% | 50 | 1.075 | 3 | 1 |
| llama-4-scout (meta-llama/llama-4-scout) | 82 | 82 | 0 | 0.00% | 38 | 1.317 | 6 | 1 |
| mistral-small-3.1-24b-instruct (mistralai/mistral-small-3.1-24b-instruct) | 65 | 65 | 0 | 0.00% | 15 | 1.150 | 2 | 1 |
| gpt-4.1 (openai/gpt-4.1) | 119 | 119 | 0 | 0.00% | 1 | 1.042 | 3 | 1 |
| gpt-4.1-mini (openai/gpt-4.1-mini) | 118 | 118 | 0 | 0.00% | 2 | 1.433 | 6 | 1 |
| gpt-4.1-nano (openai/gpt-4.1-nano) | 72 | 72 | 0 | 0.00% | 48 | 2.542 | 6 | 1 |
| gpt-4o-2024-08-06 (openai/gpt-4o-2024-08-06) | 120 | 120 | 0 | 0.00% | 0 | 1.208 | 4 | 1 |
| gpt-4o-2024-11-20 (openai/gpt-4o-2024-11-20) | 120 | 120 | 0 | 0.00% | 0 | 1.067 | 2 | 1 |
| gpt-4o-mini-2024-07-18 (openai/gpt-4o-mini-2024-07-18) | 109 | 109 | 0 | 0.00% | 11 | 1.475 | 6 | 1 |
| o3-mini-2025-01-31 (openai/o3-mini-2025-01-31) | 119 | 119 | 0 | 0.00% | 1 | 1.258 | 6 | 1 |

---