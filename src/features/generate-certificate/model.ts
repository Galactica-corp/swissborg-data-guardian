import {
  attach,
  createEffect,
  createEvent,
  createStore,
  merge,
  sample,
} from "effector";
import { createApi } from "effector/effector.mjs";
import { interval } from "patronum";

import { $$homePage } from "pages/home/model";

export type HolderCommitmentProps = {
  encryptionPubKey: string;
  holderCommitment: string;
};
export type CertificateStep = "download" | "fail" | "generation" | "idle";

const createModel = () => {
  const checkCertificateStatus = createEvent();
  const setDone = createEvent();

  const $step = createStore<CertificateStep>("idle");
  const $errMsg = createStore("");
  const $certificate = createStore("");

  const baseUrl = `${import.meta.env.VITE_API_URL}/v1`;
  const headers = {
    "Content-Type": "application/json",
  };

  const checkCertificateStatusFx = attach({
    source: $$homePage.$sessionToken,
    effect: async (sessionToken) => {
      const res = await fetch(baseUrl + "/galactica/cert", {
        cache: "no-cache",
        credentials: "include",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${sessionToken}`,
          ...headers,
        },
      });
      return await res.json();
    },
  });

  const generateCertificateFx = createEffect(
    async ({
      encryptionPubKey,
      holderCommitment,
      sessionToken,
    }: HolderCommitmentProps & { sessionToken: string }) => {
      const body = {
        encryptionPubKey,
        holderCommitment,
      };
      console.log("body:", body);
      console.log("sessionToken: ", sessionToken);

      const res = await fetch(baseUrl + "/galactica/cert/generate", {
        method: "POST",
        cache: "no-cache",
        credentials: "include",
        mode: "cors",
        headers: {
          Authorization: `Bearer ${sessionToken}`,
          ...headers,
        },
        body: JSON.stringify(body),
      });
      return await res.json();
    }
  );

  const startGenCertificate = attach({
    source: $$homePage.$sessionToken,
    effect: generateCertificateFx,
    mapParams: (
      { holderCommitment, encryptionPubKey }: HolderCommitmentProps,
      sessionToken
    ) => ({ holderCommitment, encryptionPubKey, sessionToken }),
  });

  const stepApi = createApi($step, {
    idle: () => "idle",
    fail: () => "fail",
    generation: () => "generation",
    download: () => "download",
  });

  sample({
    source: checkCertificateStatus,
    target: checkCertificateStatusFx,
  });

  sample({
    source: checkCertificateStatusFx.doneData,
    fn: (data) => data.certificate ?? "",
    target: $certificate,
  });

  sample({
    source: checkCertificateStatusFx.doneData,
    filter: (data) => Boolean(data?.status === "DONE"),
    target: [setDone, stepApi.download],
  });

  sample({
    source: generateCertificateFx,
    target: stepApi.generation,
  });

  sample({
    source: generateCertificateFx.doneData,
    target: checkCertificateStatus,
  });

  sample({
    source: merge([
      generateCertificateFx.failData,
      checkCertificateStatusFx.failData,
    ]),
    target: [setDone, stepApi.fail],
  });

  sample({
    source: generateCertificateFx.failData,
    fn: (err) => {
      return err.message;
    },
    target: $errMsg,
  });

  const { tick } = interval({
    timeout: 2000,
    start: checkCertificateStatus,
    stop: setDone,
  });

  sample({
    clock: tick,
    target: checkCertificateStatusFx,
  });

  return {
    $step,
    $certificate,
    $errMsg,
    generateCertificate: startGenCertificate,
  };
};

export const { ...$$certificateModel } = createModel();
