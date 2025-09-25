interface ImportMetaEnv {
  readonly VITE_GRAPHQL_SERVER: string;
  readonly VITE_ENDPOINT: string;
  readonly VITE_CHAIN_ID: "843843" | "9302";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
