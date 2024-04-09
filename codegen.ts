import type { CodegenConfig } from "@graphql-codegen/cli";

import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "");

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/shared/graphql/schema.graphql",
  documents: "src/shared/graphql/**/*.graphql",
  generates: {
    "src/shared/graphql/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        reactQueryVersion: 5,
        avoidOptionals: true,
        constEnums: true,
        fetcher: {
          endpoint: `"${env.VITE_ENDPOINT}"`,
          fetchParams: {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          },
        },
      },
    },
  },
  hooks: {
    afterOneFileWrite: "prettier --write",
  },
};

export default config;
