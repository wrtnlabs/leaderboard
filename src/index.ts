import "dotenv/config";
import fs from "fs";
import OpenAI from "openai";
import path from "path";

import { ValidateBenchmark } from "./validate/ValidateBenchmark";

const mkdir = async (str: string) => {
  try {
    await fs.promises.mkdir(str, {
      recursive: true,
    });
  } catch {}
};
const rmdir = async (str: string) => {
  try {
    await fs.promises.rm(str, {
      recursive: true,
    });
  } catch {}
};

const main = async (): Promise<void> => {
  const benchmark: ValidateBenchmark = new ValidateBenchmark({
    vendor: {
      api: new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      }),
      model: "gpt-4o",
    },
    schemaModel: "chatgpt",
    retry: 5, // validation feedback retry count
    repeat: 10, // how many times to repeat the experiment
    simultaneous: 100, // multi-threading like
  });
  await benchmark.execute((event) => {
    console.log(event.name, event.trial.type);
  });

  const docs: Record<string, string> = benchmark.report();
  const root: string = `${__dirname}/../reports/validate`;

  await rmdir(root);
  for (const [key, value] of Object.entries(docs)) {
    await mkdir(path.join(root, key.split("/").slice(0, -1).join("/")));
    await fs.promises.writeFile(path.join(root, key), value, "utf8");
  }
};
main().catch((error) => {
  console.error(error);
  process.exit(-1);
});
