import { wrtnlabs } from "@wrtnlabs/eslint-config";

export default wrtnlabs({
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  rules: {
    "ts/no-namespace": "error",
    "no-redeclare": "error",
    "antfu/no-top-level-await": "off",
  },
});
