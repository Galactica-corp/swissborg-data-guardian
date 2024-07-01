import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import invariant from "invariant";

import { graphqlSdk } from "shared/graphql/client";

export type HomePageModel = ReturnType<typeof createModel>;

const createModel = () => {
  const setupSession = createEvent();
  const login = createEvent();
  const setUser = createEvent<boolean>();

  const $url = createStore("");
  const $code = createStore("");
  const $userLoggedIn = createStore(false);

  const sessionSetupFx = createEffect(async () => {
    const searchParams = new URLSearchParams(document.location.search);
    const holderCommitmentParam = searchParams.get("holderCommitment");
    const encryptionPubKeyParam = searchParams.get("encryptionPubKey");

    return await graphqlSdk.SessionSetup({
      in: {
        holderCommitment: holderCommitmentParam,
        encryptionPubKey: encryptionPubKeyParam,
      },
    });
  });

  const loginFx = attach({
    source: $code,
    async effect(code) {
      invariant(code, "No code has been found.");
      return await graphqlSdk.Login({ code });
    },
  });

  sample({
    source: sessionSetupFx.doneData,
    fn: (data) => data.swissborgSessionSetup.url,
    target: $url,
  });

  sample({
    source: sessionSetupFx.doneData,
    fn: (data) => data.swissborgSessionSetup.code,
    target: $code,
  });

  sample({
    source: setupSession,
    target: sessionSetupFx,
  });

  sample({
    source: $code,
    target: login,
  });

  sample({
    source: loginFx.doneData,
    fn: (data) => data.swissborgLogin,
    target: $userLoggedIn,
  });

  sample({
    clock: login,
    source: [$userLoggedIn, $code],
    filter: ([userLoggedIn, code]) => !userLoggedIn && Boolean(code),
    target: loginFx,
  });

  sample({
    source: setUser,
    target: $userLoggedIn,
  });

  setupSession();
  setInterval(login, 2000);

  return {
    $url,
    $userLoggedIn,
    setupSession,
  };
};

export const { ...$$homePage } = createModel();
