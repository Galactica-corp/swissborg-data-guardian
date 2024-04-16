import { createEffect, createEvent, createStore, sample } from "effector";
import { interval } from "patronum";

import { graphqlSdk } from "shared/graphql/client";

export type HolderCommitmentProps = {
  encryptionPubKey: string;
  holderCommitment: string;
};
export type CertificateStep = "download" | "generation" | "idle";

const createModel = () => {
  const generateCertificate = createEvent<HolderCommitmentProps>();
  const setDone = createEvent();

  const $step = createStore<CertificateStep>("idle");
  const $certificateLink = createStore("");
  const $dataS = createStore<HolderCommitmentProps>({
    encryptionPubKey: "",
    holderCommitment: "",
  });

  const generateCertificateFx = createEffect(
    async ({ encryptionPubKey, holderCommitment }: HolderCommitmentProps) => {
      return await graphqlSdk.CreateZKCertificate({
        in: { encryptionPubKey, holderCommitment },
      });
    }
  );

  sample({
    source: generateCertificateFx.doneData,
    fn: (data) => data.createZKCertificate.certificate ?? "",
    target: $certificateLink,
  });

  sample({
    source: generateCertificateFx.doneData,
    filter: (data) => data?.createZKCertificate?.progress === 100,
    target: setDone,
  });

  sample({
    clock: setDone,
    fn: () => "download" as CertificateStep,
    target: $step,
  });

  sample({
    source: generateCertificateFx,
    fn: () => "generation" as CertificateStep,
    target: $step,
  });

  sample({
    source: generateCertificateFx.fail,
    fn: () => "idle" as CertificateStep,
    target: $step,
  });

  sample({
    source: generateCertificateFx.fail,
    target: setDone,
  });

  const { tick } = interval({
    timeout: 2000,
    start: generateCertificate,
    stop: setDone,
  });

  sample({
    clock: generateCertificate,
    target: $dataS,
  });

  sample({
    clock: tick,
    source: $dataS,
    target: generateCertificateFx,
  });

  return {
    $step,
    $certificateLink,
    generateCertificate,
  };
};

export const { ...$$certificateModel } = createModel();
