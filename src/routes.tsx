import { Routes, Route, BrowserRouter } from "react-router-dom";

import PageLinks from "./pages/PageLinks/index";
import Portfolio from "./pages/Portfolio/index";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLinks />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}
