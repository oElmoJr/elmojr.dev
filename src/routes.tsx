import { Routes, Route, BrowserRouter } from "react-router-dom";

import PageLinks from "./pages/PageLinks";
import Portfolio from "./pages/Portfolio";

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