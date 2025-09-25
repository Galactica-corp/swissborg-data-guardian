import { useOutletContext } from "react-router";

type HolderCommitment = {
  encryptionPubKey: string;
  holderCommitment: string;
};

export const useHolderCommitment = () => {
  const ctx = useOutletContext<HolderCommitment>();
  return ctx;
};
