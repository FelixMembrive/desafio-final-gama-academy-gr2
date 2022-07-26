import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import AreaCandidata from "./pages/AreaCandidata";
import Pesquisa from "./pages/Pesquisa";
import Amir_AreaCandidata from "./pages/Amir_AreaCandidata";
import ListaMentoras from "./pages/ListaMentoras";
import MinhasCandidaturasAndamento from "./pages/MinhasCandidaturasAndamento";
import MinhasCandidaturasSalvas from "./pages/MinhasCandidaturasSalvas";
import MinhasCandidaturasFinalizadas from "./pages/MinhasCandidaturasFinalizadas";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="" element={<HomeDev />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/areacandidata" element={<AreaCandidata />} />
        <Route path="/amir_areacandidata" element={<Amir_AreaCandidata />} />
        <Route path="/candidaturas-salvas" element={<MinhasCandidaturasSalvas/>} />
        <Route path="/candidaturas-andamento" element={<MinhasCandidaturasAndamento/>} />
        <Route path="/candidaturas-finalizadas" element={<MinhasCandidaturasFinalizadas/>} />
        <Route path="/listamentoras" element={<ListaMentoras />} />
      </Routes>
  );
}