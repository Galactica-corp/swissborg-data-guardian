import { createEffect, createEvent, createStore, sample } from "effector";
import { createApi } from "effector/effector.mjs";
// import { interval } from "patronum";

import { graphqlSdk } from "shared/graphql/client";

export type HolderCommitmentProps = {
  encryptionPubKey: string;
  holderCommitment: string;
};
export type CertificateStep = "download" | "fail" | "generation" | "idle";

const createModel = () => {
  const generateCertificate = createEvent<HolderCommitmentProps>();
  const setDone = createEvent();

  const $step = createStore<CertificateStep>("idle");
  const $errMsg = createStore("");

  const $certificate = createStore("");
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

  const stepApi = createApi($step, {
    idle: () => "idle",
    fail: () => "fail",
    generation: () => "generation",
    download: () => "download",
  });

  sample({
    source: generateCertificateFx.doneData,
    fn: (data) => data.createZKCertificate.certificate ?? "",
    target: $certificate,
  });

  sample({
    source: generateCertificateFx.doneData,
    filter: (data) => Boolean(data?.createZKCertificate?.certificate),
    target: setDone,
  });

  sample({
    source: generateCertificateFx,
    target: stepApi.generation,
  });

  sample({
    source: generateCertificateFx.failData,
    target: [setDone, stepApi.fail],
  });

  sample({
    source: generateCertificateFx.failData,
    fn: (err) => {
      return err.message;
    },
    target: $errMsg,
  });

  // const { tick } = interval({
  //   timeout: 2000,
  //   start: generateCertificate,
  //   stop: setDone,
  // });

  sample({
    clock: generateCertificate,
    target: $dataS,
  });

  // sample({
  //   clock: tick,
  //   source: $dataS,
  //   target: generateCertificateFx,
  // });

  return {
    $step,
    $certificate,
    $errMsg,
    generateCertificate,
  };
};

export const { ...$$certificateModel } = createModel();
