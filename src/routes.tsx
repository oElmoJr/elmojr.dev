import { Routes, Route, BrowserRouter } from "react-router-dom";

import PageLinks from "./pages/PageLinks";
import Portfolio from "./pages/Portfolio";

interface Prop {
  toggleTheme(): void;
}

export default function AppRoutes({ toggleTheme }: Prop) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLinks />} />
        <Route
          path="/portfolio"
          element={<Portfolio toggleTheme={toggleTheme} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
