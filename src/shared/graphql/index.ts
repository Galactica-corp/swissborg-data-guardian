import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Base64: { input: any; output: any };
  BigInt: { input: any; output: any };
  Time: { input: any; output: any };
};

export type CertificateStatus = "DONE" | "ERROR" | "PENDING";

export type CreateZkCertificateIn = {
  encryptionPubKey: Scalars["Base64"]["input"];
  holderCommitment: Scalars["BigInt"]["input"];
};

export type CreateZkCertificateOut = {
  __typename?: "CreateZKCertificateOut";
  certificate?: Maybe<Scalars["String"]["output"]>;
  status: CertificateStatus;
};

export type Mutation = {
  __typename?: "Mutation";
  createZKCertificate: CreateZkCertificateOut;
};

export type MutationCreateZkCertificateArgs = {
  in: CreateZkCertificateIn;
};

export type Query = {
  __typename?: "Query";
  fakeLogin: Scalars["Boolean"]["output"];
  swissborgLogin: Scalars["Boolean"]["output"];
  swissborgSessionSetup: SwissborgSessionSetupOut;
};

export type QueryFakeLoginArgs = {
  code: Scalars["String"]["input"];
};

export type QuerySwissborgLoginArgs = {
  code: Scalars["String"]["input"];
};

export type QuerySwissborgSessionSetupArgs = {
  in: SwissborgSessionSetupIn;
};

export type SwissborgSessionSetupIn = {
  encryptionPubKey: Scalars["Base64"]["input"];
  holderCommitment: Scalars["BigInt"]["input"];
};

export type SwissborgSessionSetupOut = {
  __typename?: "SwissborgSessionSetupOut";
  code: Scalars["String"]["output"];
  expiresAt: Scalars["Time"]["output"];
  url: Scalars["String"]["output"];
};

export type CreateZkCertificateMutationVariables = Exact<{
  in: CreateZkCertificateIn;
}>;

export type CreateZkCertificateMutation = {
  __typename?: "Mutation";
  createZKCertificate: {
    __typename?: "CreateZKCertificateOut";
    certificate?: string | null;
    status: CertificateStatus;
  };
};

export type LoginQueryVariables = Exact<{
  code: Scalars["String"]["input"];
}>;

export type LoginQuery = { __typename?: "Query"; swissborgLogin: boolean };

export type SessionSetupQueryVariables = Exact<{
  in: SwissborgSessionSetupIn;
}>;

export type SessionSetupQuery = {
  __typename?: "Query";
  swissborgSessionSetup: {
    __typename?: "SwissborgSessionSetupOut";
    code: string;
    expiresAt: any;
    url: string;
  };
};

export const CreateZkCertificateDocument = gql`
  mutation CreateZKCertificate($in: CreateZKCertificateIn!) {
    createZKCertificate(in: $in) {
      certificate
      status
    }
  }
`;
export const LoginDocument = gql`
  query Login($code: String!) {
    swissborgLogin(code: $code)
  }
`;
export const SessionSetupDocument = gql`
  query SessionSetup($in: SwissborgSessionSetupIn!) {
    swissborgSessionSetup(in: $in) {
      code
      expiresAt
      url
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    CreateZKCertificate(
      variables: CreateZkCertificateMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<CreateZkCertificateMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateZkCertificateMutation>(
            CreateZkCertificateDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "CreateZKCertificate",
        "mutation",
        variables
      );
    },
    Login(
      variables: LoginQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<LoginQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<LoginQuery>(LoginDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "Login",
        "query",
        variables
      );
    },
    SessionSetup(
      variables: SessionSetupQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<SessionSetupQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SessionSetupQuery>(SessionSetupDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "SessionSetup",
        "query",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
