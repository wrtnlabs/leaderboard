## Benchmark
```bash
mv .env.example .env
echo "OPENAI_API_KEY=sk-..." >> .env
pnpm install
pnpm run build
OPENAI_MODEL="gpt-4o" pnpm start
```

Benchmark program for Ryoppippi's paper.

I made it ASAP. So LLM token costs tracing like detailed features are not yet.

Try editing the properties of the `src/index.ts` file.

Also, benchmark report would be written under the `reports` directory.




## Adding Scenario
Just add scenario file in the `src/validate/scnearios` directory.

I'll add more scenarios about e-commerce at tomorrow.
