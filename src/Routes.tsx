import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Sobre from './pages/Sobre'
import Parceiros from './pages/Parceiros'
import Ajuda from './pages/Ajuda'
import Vagas from './pages/Vagas'
import Profissionais from './pages/Profissionais'
import Perfil from './pages/Perfil'



export default function RoutesComponent() {
  return (
      <Routes>
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