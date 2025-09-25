import { Address, WalletClient, getContract } from "viem";

import { ageCitizenshipKYCVerifier } from "../abi/age-citizenship-kyc-verifier";

export const checkVerifierErrors = async (
  verifierAddress: Address,
  walletClient: WalletClient,
  publicInputs: bigint[]
) => {
  const verifierContract = getContract({
    abi: ageCitizenshipKYCVerifier,
    address: verifierAddress,
    client: walletClient,
  });

  const errorIndex = await verifierContract.read.INDEX_ERROR();
  const error = Number(publicInputs[errorIndex]);

  if (error === 0) return;

  let errorMessage = "";
  if ((error & 1) !== 0) {
    errorMessage = "zkKYC is not valid";
  }
  if ((error & 2) !== 0) {
    errorMessage = "Age requirement not met";
  }
  if ((error & 4) !== 0) {
    errorMessage = "Sanction country exclusion not met";
  }
  errorMessage = `Proof generation failed with error code: ${error}`;

  throw new Error(errorMessage);
};
