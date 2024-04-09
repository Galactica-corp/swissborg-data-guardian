import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "pages/home";
import { HolderCommitmentGuard } from "shared/providers/holder-commitment-guard";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HolderCommitmentGuard />} path="/">
          <Route element={<HomePage />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
