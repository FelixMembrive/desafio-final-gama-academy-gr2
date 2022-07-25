import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import AreaCandidata from "./pages/AreaCandidata";
import Pesquisa from "./pages/Pesquisa";
import Amir_AreaCandidata from "./pages/Amir_AreaCandidata";



export default function RoutesComponent() {
  return (
      <Routes>
        {/* Dev-testes */}
        <Route path="HomeDev" element={<HomeDev />} />


      {/* Aplicação */}
        <Route path="" element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/areacandidata" element={<AreaCandidata />} />
        <Route path="/amir_areacandidata" element={<Amir_AreaCandidata />} />
      </Routes>
  );
}