import { StrictMode } from "react";

import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";

import { App } from "app/application";

Sentry.init({
  dsn: "https://e3e31166a5ac753015f6ca7e7774ebbd@o4505432424775680.ingest.us.sentry.io/4509044759658496",
  integrations: [
    Sentry.browserTracingIntegration({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
    }),
    Sentry.replayIntegration(),
  ],
  tracePropagationTargets: [
    "localhost",
    /^https:\/\/(stage\.)?swissborg\.galactica\.com/,
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
