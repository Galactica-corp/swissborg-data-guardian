import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import { HomePage } from "pages/home";
import { HolderCommitmentGuard } from "shared/providers/holder-commitment-guard";
import { RqProvider } from "shared/providers/rq";
import { WagmiProvider } from "shared/providers/wagmi";

import "./index.css";

export const App = () => {
  return (
    <WagmiProvider>
      <RqProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<HolderCommitmentGuard />} path="/">
              <Route element={<HomePage />} index />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </RqProvider>
    </WagmiProvider>
  );
};
