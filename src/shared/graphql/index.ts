import {
  useMutation,
  useQuery,
  useSuspenseQuery,
  UseMutationOptions,
  UseQueryOptions,
  UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import { fetcherFn } from "./fetcher.ts";
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

export type CreateZkCertificateIn = {
  encryptionPubKey: Scalars["Base64"]["input"];
  holderCommitment: Scalars["BigInt"]["input"];
};

export type CreateZkCertificateOut = {
  __typename?: "CreateZKCertificateOut";
  certificate: Maybe<Scalars["String"]["output"]>;
  progress: Scalars["Float"]["output"];
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
  swissborgLogin: Scalars["Boolean"]["output"];
  swissborgSessionSetup: SwissborgSessionSetupOut;
};

export type QuerySwissborgLoginArgs = {
  code: Scalars["String"]["input"];
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
    progress: number;
    certificate: string | null;
  };
};

export type LoginQueryVariables = Exact<{
  code: Scalars["String"]["input"];
}>;

export type LoginQuery = { __typename?: "Query"; swissborgLogin: boolean };

export type SessionSetupQueryVariables = Exact<{ [key: string]: never }>;

export type SessionSetupQuery = {
  __typename?: "Query";
  swissborgSessionSetup: {
    __typename?: "SwissborgSessionSetupOut";
    code: string;
    expiresAt: any;
    url: string;
  };
};

export const CreateZkCertificateDocument = `
    mutation CreateZKCertificate($in: CreateZKCertificateIn!) {
  createZKCertificate(in: $in) {
    progress
    certificate
  }
}
    `;

export const useCreateZkCertificateMutation = <
  TError = unknown,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    CreateZkCertificateMutation,
    TError,
    CreateZkCertificateMutationVariables,
    TContext
  >
) => {
  return useMutation<
    CreateZkCertificateMutation,
    TError,
    CreateZkCertificateMutationVariables,
    TContext
  >({
    mutationKey: ["CreateZKCertificate"],
    mutationFn: (variables?: CreateZkCertificateMutationVariables) =>
      fetcherFn<
        CreateZkCertificateMutation,
        CreateZkCertificateMutationVariables
      >(CreateZkCertificateDocument, variables)(),
    ...options,
  });
};

export const LoginDocument = `
    query Login($code: String!) {
  swissborgLogin(code: $code)
}
    `;

export const useLoginQuery = <TData = LoginQuery, TError = unknown>(
  variables: LoginQueryVariables,
  options?: Omit<UseQueryOptions<LoginQuery, TError, TData>, "queryKey"> & {
    queryKey?: UseQueryOptions<LoginQuery, TError, TData>["queryKey"];
  }
) => {
  return useQuery<LoginQuery, TError, TData>({
    queryKey: ["Login", variables],
    queryFn: fetcherFn<LoginQuery, LoginQueryVariables>(
      LoginDocument,
      variables
    ),
    ...options,
  });
};

useLoginQuery.getKey = (variables: LoginQueryVariables) => ["Login", variables];

export const useSuspenseLoginQuery = <TData = LoginQuery, TError = unknown>(
  variables: LoginQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<LoginQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseSuspenseQueryOptions<LoginQuery, TError, TData>["queryKey"];
  }
) => {
  return useSuspenseQuery<LoginQuery, TError, TData>({
    queryKey: ["LoginSuspense", variables],
    queryFn: fetcherFn<LoginQuery, LoginQueryVariables>(
      LoginDocument,
      variables
    ),
    ...options,
  });
};

useSuspenseLoginQuery.getKey = (variables: LoginQueryVariables) => [
  "LoginSuspense",
  variables,
];

export const SessionSetupDocument = `
    query SessionSetup {
  swissborgSessionSetup {
    code
    expiresAt
    url
  }
}
    `;

export const useSessionSetupQuery = <
  TData = SessionSetupQuery,
  TError = unknown,
>(
  variables?: SessionSetupQueryVariables,
  options?: Omit<
    UseQueryOptions<SessionSetupQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<SessionSetupQuery, TError, TData>["queryKey"];
  }
) => {
  return useQuery<SessionSetupQuery, TError, TData>({
    queryKey:
      variables === undefined ? ["SessionSetup"] : ["SessionSetup", variables],
    queryFn: fetcherFn<SessionSetupQuery, SessionSetupQueryVariables>(
      SessionSetupDocument,
      variables
    ),
    ...options,
  });
};

useSessionSetupQuery.getKey = (variables?: SessionSetupQueryVariables) =>
  variables === undefined ? ["SessionSetup"] : ["SessionSetup", variables];

export const useSuspenseSessionSetupQuery = <
  TData = SessionSetupQuery,
  TError = unknown,
>(
  variables?: SessionSetupQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<SessionSetupQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseSuspenseQueryOptions<
      SessionSetupQuery,
      TError,
      TData
    >["queryKey"];
  }
) => {
  return useSuspenseQuery<SessionSetupQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ["SessionSetupSuspense"]
        : ["SessionSetupSuspense", variables],
    queryFn: fetcherFn<SessionSetupQuery, SessionSetupQueryVariables>(
      SessionSetupDocument,
      variables
    ),
    ...options,
  });
};

useSuspenseSessionSetupQuery.getKey = (
  variables?: SessionSetupQueryVariables
) =>
  variables === undefined
    ? ["SessionSetupSuspense"]
    : ["SessionSetupSuspense", variables];
