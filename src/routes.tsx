import { Routes, Route, BrowserRouter } from "react-router-dom";

import PageLinks from "./pages/PageLinks";
import Portifolio from "./pages/Portifolio";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLinks />} />
        <Route path="/portifolio" element={<Portifolio />} />
      </Routes>
    </BrowserRouter>
  );
}