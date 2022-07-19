import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import PaginaFelix from "./pages/PaginaFelix";
import PaginaMayume from "./pages/PaginaMayume";



export default function RoutesComponent() {
  return (
      <Routes>
        {/* Dev-testes */}
        <Route path="HomeDev" element={<HomeDev />} />
        <Route path="Felix" element={<PaginaFelix />} />
        <Route path="Mayume" element={<PaginaMayume />} />

      {/* Aplicação */}
        <Route path="" element={<Home />} />
      </Routes>
  );
}