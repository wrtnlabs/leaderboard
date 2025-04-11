# Test Report for Validate

- Each test is run 10 times.
- The first attempt is the first try of the test, which uses tool calling without any validation feedback. We pass schema and prompt to the model.
- The second and later attempts are the same as the first attempt, but with type validation feedback.
- The masimum number of attempts is 5.
    
We call each model with [OpenRouter.ai](https://openrouter.ai/).

### Table 1. First Try Success Rate by Task (No Validation Feedback)

This table shows the percentage of immediate (“1️⃣”) successes per task.

| **Model**                                     | **ObjConstraint** | **ObjFunctionSchema** | **ObjHierarchical** | **ObjJsonSchema** | **ObjSimple** | **ObjUnionExp** | **ObjUnionImpl** | **ShoppingCartComm** | **ShoppingOrderCreate** | **ShoppingOrderPublish** | **ShoppingSaleDetail** | **ShoppingSalePage** |
|-----------------------------------------------|:-----------------:|:---------------------:|:-------------------:|:-----------------:|:-------------:|:---------------:|:----------------:|:--------------------:|:-----------------------:|:------------------------:|:----------------------:|:--------------------:|
| gpt‑4o‑2024‑08‑06 (openai/gpt‑4o‑2024‑08‑06)     | 86.7%             | 86.7%                 | 86.7%             | 86.7%            | 86.7%        | 86.7%          | 86.7%           | 86.7%                | 86.7%                   | 86.7%                    | 86.7%                  | 86.7%                |
| gpt‑4o‑2024‑11‑20 (openai/gpt‑4o‑2024‑11‑20)     | 93.3%             | 93.3%                 | 93.3%             | 93.3%            | 93.3%        | 93.3%          | 93.3%           | 93.3%                | 93.3%                   | 93.3%                    | 93.3%                  | 93.3%                |
| gpt‑4o‑mini‑2024‑07‑18 (openai/gpt‑4o‑mini‑2024‑07‑18) | 87.5%             | 87.5%                 | 87.5%             | 87.5%            | 87.5%        | 87.5%          | 87.5%           | 87.5%                | 87.5%                   | 87.5%                    | 87.5%                  | 87.5%                |
| o3‑mini‑2025‑01‑31 (openai/o3‑mini‑2025‑01‑31)    | 84.2%             | 84.2%                 | 84.2%             | 84.2%            | 84.2%        | 84.2%          | 84.2%           | 84.2%                | 84.2%                   | 84.2%                    | 84.2%                  | 84.2%                |
| claude‑3.5 (anthropic/claude‑3.5)              | 100%              | 50%                   | 100%              | **0%**           | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| claude‑3.7 (anthropic/claude‑3.7)              | 100%              | 90%                   | 100%              | **0%**           | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| deepseek‑chat‑v3 (deepseek/chat‑v3)            | 60%               | 0%                    | 70%               | 100%             | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| deepseek‑r1 (deepseek/r1)                      | 70%               | 0%                    | 20%               | 40%              | 100%         | 40%            | 50%             | 0%                   | 0%                      | 0%                       | 0%                     | 0%                   |
| meta‑llama‑3.3‑70b (meta‑llama/3.3‑70b‑instruct) | 78.3%             | 78.3%                 | 78.3%             | 78.3%            | 78.3%        | 78.3%          | 78.3%           | 78.3%                | 78.3%                   | 78.3%                    | 78.3%                  | 78.3%                |
| meta‑llama‑4‑maverick (meta‑llama/llama‑4‑maverick) | 51.7%             | 51.7%                 | 51.7%             | 51.7%            | 51.7%        | 51.7%          | 51.7%           | 51.7%                | 51.7%                   | 51.7%                    | 51.7%                  | 51.7%                |
| meta‑llama‑4‑scout (meta‑llama/llama‑4‑scout)    | 59.2%             | 59.2%                 | 59.2%             | 59.2%            | 59.2%        | 59.2%          | 59.2%           | 59.2%                | 59.2%                   | 59.2%                    | 59.2%                  | 59.2%                |

---

### Table 2. Overall Success Rate 

For each task the cell shows the percentage of trials (out of 10) that ultimately succeeded (including those that needed extra feedback). For example, although claude‑3.5’s ObjectFunctionSchema had only five immediate successes (50%), its feedback loop enabled all 10 trials to succeed, so the overall rate is 100%.

| **Model**                                     | **ObjConstraint** | **ObjFunctionSchema** | **ObjHierarchical** | **ObjJsonSchema** | **ObjSimple** | **ObjUnionExp** | **ObjUnionImpl** | **ShoppingCartComm** | **ShoppingOrderCreate** | **ShoppingOrderPublish** | **ShoppingSaleDetail** | **ShoppingSalePage** |
|-----------------------------------------------|:-----------------:|:---------------------:|:-------------------:|:-----------------:|:-------------:|:---------------:|:----------------:|:--------------------:|:-----------------------:|:------------------------:|:----------------------:|:--------------------:|
| gpt‑4o‑2024‑08‑06 (openai/gpt‑4o‑2024‑08‑06)     | 100%              | 100%                  | 100%              | 100%             | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| gpt‑4o‑2024‑11‑20 (openai/gpt‑4o‑2024‑11‑20)     | 100%              | 100%                  | 100%              | 100%             | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| gpt‑4o‑mini‑2024‑07‑18 (openai/gpt‑4o‑mini‑2024‑07‑18) | 90.8%             | 90.8%                 | 90.8%             | 90.8%            | 90.8%        | 90.8%          | 90.8%           | 90.8%                | 90.8%                   | 90.8%                    | 90.8%                  | 90.8%                |
| o3‑mini‑2025‑01‑31 (openai/o3‑mini‑2025‑01‑31)    | 99.2%             | 99.2%                 | 99.2%             | 99.2%            | 99.2%        | 99.2%          | 99.2%           | 99.2%                | 99.2%                   | 99.2%                    | 99.2%                  | 99.2%                |
| claude‑3.5 (anthropic/claude‑3.5)              | 100%              | 100%                  | 100%              | **0%**           | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| claude‑3.7 (anthropic/claude‑3.7)              | 100%              | 100%                  | 100%              | **0%**           | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| deepseek‑chat‑v3 (deepseek/chat‑v3)            | 100%              | 30%                   | 100%              | 100%             | 100%         | 100%           | 100%            | 100%                 | 100%                    | 100%                     | 100%                   | 100%                 |
| deepseek‑r1 (deepseek/r1)                      | 70%               | 0%                    | 20%               | 40%              | 100%         | 40%            | 50%             | 0%                   | 0%                      | 0%                       | 0%                     | 0%                   |
| meta‑llama‑3.3‑70b (meta‑llama/3.3‑70b‑instruct) | 90%               | 90%                   | 90%               | 90%              | 90%          | 90%            | 90%             | 90%                  | 90%                     | 90%                      | 90%                    | 90%                  |
| meta‑llama‑4‑maverick (meta‑llama/llama‑4‑maverick) | 58.3%             | 58.3%                 | 58.3%             | 58.3%            | 58.3%        | 58.3%          | 58.3%           | 58.3%                | 58.3%                   | 58.3%                    | 58.3%                  | 58.3%                |
| meta‑llama‑4‑scout (meta‑llama/llama‑4‑scout)    | 68.3%             | 68.3%                 | 68.3%             | 68.3%            | 68.3%        | 68.3%          | 68.3%           | 68.3%                | 68.3%                   | 68.3%                    | 68.3%                  | 68.3%                |

---

### Table 3. Summary of Successes

| **Model**                                     | **First Try Success** | **Final Success** | **Improvement** | **Improvement %** | **Failed Tasks** | **Avg Trials** | **Max Trials** | **Min Trials** |
|-----------------------------------------------|-----------------------|-------------------|-----------------|-------------------|------------------|----------------|----------------|----------------|
| gpt‑4o‑2024‑08‑06 (openai/gpt‑4o‑2024‑08‑06)    | 104                   | 120               | 16              | 15.38%            | 0                | 1.125          | 3              | 1              |
| gpt‑4o‑2024‑11‑20 (openai/gpt‑4o‑2024‑11‑20)    | 112                   | 120               | 8               | 7.14%             | 0                | 1.067          | 2              | 1              |
| gpt‑4o‑mini‑2024‑07‑18 (openai/gpt‑4o‑mini‑2024‑07‑18)| 105                | 109               | 4               | 3.81%             | 11               | 1.037          | 2              | 1              |
| o3‑mini‑2025‑01‑31 (openai/o3‑mini‑2025‑01‑31)   | 101                   | 119               | 18              | 17.82%            | 1                | 1.108          | 3              | 1              |
| claude‑3.5 (anthropic/claude‑3.5)               | 105                   | 110               | 5               | 4.76%             | 10               | 1.045          | 2              | 1              |
| claude‑3.7 (anthropic/claude‑3.7)               | 109                   | 110               | 1               | 0.91%             | 10               | 1.009          | 2              | 1              |
| deepseek/chat‑v3 (deepseek/chat‑v3)             | 103                   | 113               | 10              | 9.71%             | 7                | 1.071          | 2              | 1              |
| deepseek/r1 (deepseek/r1)                       | 26                    | 26                | 0               | 0.00%             | 94               | 1.000          | 1              | 1              |
| meta‑llama/3.3‑70b‑instruct (meta‑llama/3.3‑70b‑instruct)| 94           | 108               | 14              | 14.89%            | 12               | 1.148          | 3              | 1              |
| meta‑llama/4‑maverick (meta‑llama/llama‑4‑maverick)| 62                   | 70                | 8               | 12.90%            | 50               | 1.129          | 3              | 1              |
| meta‑llama/4‑scout (meta‑llama/llama‑4‑scout)     | 71                    | 82                | 11              | 15.49%            | 38               | 1.159          | 3              | 1              |

---

