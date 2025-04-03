import fs from "fs";
import typia from "typia";

import { IValidateBenchmarkResult } from "../structures/IValidateBenchmarkResult";
import { IValidateBenchmarkScenario } from "../structures/IValidateBenchmarkScenario";

export const mountValidateBenchmarkExperiments = async (): Promise<
  IValidateBenchmarkResult.IExperiment[]
> => {
  const collection: IValidateBenchmarkResult.IExperiment[] = [];
  for (const file of await fs.promises.readdir(`${__dirname}/../scenarios`)) {
    if (file.endsWith(".js") === false) continue;
    const location: string = `${__dirname}/../scenarios/${file}`;
    const modulo: IModulo = await import(location);
    for (const [key, value] of Object.entries(modulo))
      if (typia.is<IValidateBenchmarkScenario>(value))
        collection.push({
          name: key,
          scenario: value,
          trials: [],
        });
  }
  return collection;
};

interface IModulo {
  [key: string]: unknown;
}
