## Benchmark
```bash
mv .env.example .env
echo "OPENAI_API_KEY=sk-..." >> .env
pnpm install
pnpm run build

pnpm run auto

# or you can configure the model and schema manually

OPENAI_MODEL="openai/gpt-4o" SCHEMA_MODEL="chatgpt"  pnpm start
```

Benchmark program for Ryoppippi's paper.

Try editing the properties of the `src/index.ts` file.

Also, benchmark report would be written under the `reports` directory.

## Structure

```bash
.
├── README.md
├── dist // executable files
├── reports // benchmark reports
├── scenarios // benchmark scenarios
└── src // source code
```

