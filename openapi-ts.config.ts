import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  client: "@hey-api/client-fetch",
  // input: "./src/shared/openapi/session.yaml",
  input: "./src/shared/openapi/galactica.yaml",
  output: {
    format: "prettier",
    // path: "./src/shared/openapi/session",
    path: "./src/shared/openapi/certificate",
  },
});
