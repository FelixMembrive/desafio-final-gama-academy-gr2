import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import PaginaFelix from "./pages/PaginaFelix";



export default function RoutesComponent() {
  return (
      <Routes>
        {/* Dev-testes */}
        <Route path="HomeDev" element={<HomeDev />} />
        <Route path="Felix" element={<PaginaFelix />} />

      {/* Aplicação */}
        <Route path="" element={<Home />} />
      </Routes>
  );
}