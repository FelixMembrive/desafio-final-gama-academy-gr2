import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import Sobre from './pages/Sobre'
import Parceiros from './pages/Parceiros'
import Ajuda from './pages/Ajuda'
import Vagas from './pages/Vagas'
import Profissionais from './pages/Profissionais'
import Perfil from './pages/Perfil'
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
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
  );
}