import { Dispatch, createContext, useContext } from "react";

import invariant from "invariant";

import { State } from "./const";

export const TempCtx = createContext<
  [State, Dispatch<Partial<State>>] | undefined
>(undefined);

export const useCtx = () => {
  const ctx = useContext(TempCtx);
  invariant(ctx, "Error");
  return ctx;
};
