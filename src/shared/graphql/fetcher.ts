import { GraphQLClient, Variables, gql } from "graphql-request";

const client = new GraphQLClient(
  `${import.meta.env.VITE_GRAPHQL_SERVER}/query`,
  {
    requestMiddleware: (request) => {
      // request.credentials = "include";
      // request.mode = "cors";
      return request;
    },
  }
);

export const fetcherFn =
  <TData, TVariables extends Variables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit["headers"]
  ) =>
  async () => {
    const document = gql`
      ${query}
    `;

    const result: TData = await client.request(document, variables, {
      "Content-Type": "application/json",
      ...options,
    });
    return result;
  };
