import {
  attach,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import invariant from "invariant";

import {
  Approved,
  WebAuthManagementGetSessionStatusResponse,
  getWebSessionStatus,
  initiateWebSession,
} from "shared/openapi/client";
import { client } from "shared/openapi/client";

export type HomePageModel = ReturnType<typeof createModel>;

// configure internal service client
client.setConfig({
  // set default base url for requests
  baseUrl: `${import.meta.env.VITEFd_API_URL}/v1`,
  // set default headers for requests
  // headers: {
  // 	Authorization: 'Bearer <token_from_service_client>',
  // },
});

const secret = import.meta.env.VITE_AUTH_SECRET ?? "";

const createModel = () => {
  const setupSession = createEvent();
  const checkStatus = createEvent();
  // const setUser = createEvent<boolean>();

  const $url = createStore("");
  const $code = createStore("");
  const $sessionToken = createStore<string | undefined>(undefined);
  const $userLoggedIn = $sessionToken.map(Boolean);

  const sessionSetupFx = createEffect(() => {
    return initiateWebSession({
      body: {
        audience: "galactica",
        secret,
      },
    });
  });

  const checkSessionStatusFx = attach({
    source: $code,
    async effect(code) {
      invariant(code, "No code has been found.");
      return getWebSessionStatus({
        body: {
          secret,
        },
        path: {
          code,
        },
      });
    },
  });

  sample({
    source: sessionSetupFx.doneData,
    fn: (data) =>
      `https://swissborg.com/wa/v1/web/login/${data.data?.code ?? ""}`,
    target: $url,
  });

  sample({
    source: sessionSetupFx.doneData,
    fn: (data) => data.data?.code ?? "",
    target: $code,
  });

  sample({
    source: setupSession,
    target: sessionSetupFx,
  });

  sample({
    source: $code,
    target: checkStatus,
  });

  sample({
    source: checkSessionStatusFx.doneData,
    fn: ({ data }) => {
      if (data && isApproved(data)) {
        return data.approved.session_token;
      }
      return undefined;
    },
    target: $sessionToken,
  });

  sample({
    clock: checkStatus,
    source: [$userLoggedIn, $code],
    filter: ([userLoggedIn, code]) => !userLoggedIn && Boolean(code),
    target: checkSessionStatusFx,
  });

  // sample({
  //   source: setUser,
  //   target: $sessionToken,
  // });

  setupSession();
  setInterval(checkStatus, 2000);

  return {
    $url,
    $userLoggedIn,
    setupSession,
  };
};

export const { ...$$homePage } = createModel();

function isApproved(
  res: WebAuthManagementGetSessionStatusResponse
): res is { approved: Approved } {
  return "approved" in res;
}
