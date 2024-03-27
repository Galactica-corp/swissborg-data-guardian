import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DevPage } from "pages/dev";
import { HomePage } from "pages/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<HolderCommitmentGuard />} path="/"> */}
        <Route element={<HomePage />} path="/" />
        {/* </Route> */}
        <Route element={<DevPage />} path="/dev" />
      </Routes>
    </BrowserRouter>
  );
};
