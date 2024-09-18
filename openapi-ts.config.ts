import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  input: "./src/shared/openapi/schema.yaml",
  output: {
    format: "prettier",
    path: "./src/shared/openapi/client",
  },
});
