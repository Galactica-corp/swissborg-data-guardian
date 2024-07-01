import type { CodegenConfig } from "@graphql-codegen/cli";

import { loadEnv } from "vite";

const env = loadEnv("production", "");

const config: CodegenConfig = {
  overwrite: true,
  schema: `${env.VITE_GRAPHQL_SERVER}/query`,
  documents: "src/shared/graphql/**/*.graphql",
  generates: {
    "src/shared/graphql/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        constEnums: true,
        enumsAsTypes: true,
      },
    },
  },
  hooks: {
    afterOneFileWrite: "prettier --write",
  },
};

export default config;
