import { getSdk } from "shared/graphql";
import { GraphQLClient } from "graphql-request";

const endpoint = `${import.meta.env.VITE_GRAPHQL_SERVER}/query` ?? "";

const client = new GraphQLClient(endpoint, {
  credentials: "include",
  mode: "cors",
});

export const graphqlSdk = getSdk(client);
