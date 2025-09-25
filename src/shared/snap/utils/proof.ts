import { ZkCertProof } from "../types/types";

export function processProof(proof: ZkCertProof["proof"]) {
  const piA = [BigInt(proof.pi_a[0]), BigInt(proof.pi_a[1])] as const;
  const piB = [
    [BigInt(proof.pi_b[0][1]), BigInt(proof.pi_b[0][0])],
    [BigInt(proof.pi_b[1][1]), BigInt(proof.pi_b[1][0])],
  ] as const;

  const piC = [BigInt(proof.pi_c[0]), BigInt(proof.pi_c[1])] as const;
  return [piA, piB, piC] as const;
}

export function processPublicSignals(publicSignals: string[]) {
  const formatedInputs = publicSignals.map((value) => BigInt(value));
  return formatedInputs;
}
