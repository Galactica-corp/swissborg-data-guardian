interface ImportMetaEnv {
  readonly VITE_GRAPHQL_SERVER: string;
  readonly VITE_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
