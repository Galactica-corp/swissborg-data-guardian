import type { CodegenConfig } from "@graphql-codegen/cli";

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
        exposeQueryKeys: true,
        addSuspenseQuery: true,
        reactQueryVersion: 5,
        avoidOptionals: true,
        constEnums: true,
        enumsAsTypes: true,

        fetcher: {
          func: "./fetcher.ts#fetcherFn",
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
