import { getSdk } from "shared/graphql";
import { GraphQLClient } from "graphql-request";

const endpoint = import.meta.env.VITE_GRAPHQL_SERVER ?? "";
const client = new GraphQLClient(endpoint);
export const graphqlSdk = getSdk(client);
