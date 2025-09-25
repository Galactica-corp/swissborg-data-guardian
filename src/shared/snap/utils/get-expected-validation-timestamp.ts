import { PublicClient } from "viem";

export async function getExpectedValidationTimestamp(pc: PublicClient) {
  const latestBlock = await pc.getBlock({ blockTag: "latest" });
  const timestamp = latestBlock.timestamp;

  const estimatedProofCreationDuration = 20n;

  const expectedValidationTimestamp =
    timestamp + estimatedProofCreationDuration;

  return Number(expectedValidationTimestamp);
}
