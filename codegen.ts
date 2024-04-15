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
