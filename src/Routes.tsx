import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home";
import AreaCandidata from "./pages/AreaCandidata";
import Amir_AreaCandidata from "./pages/Amir_AreaCandidata";
import ListaMentoras from "./pages/ListaMentoras";
import MinhasCandidaturas from "./pages/MinhasCandidaturas";
import BuscarVagas from "./pages/BuscarVagas";
import Mentora from "./pages/Mentora";
import Login from "./pages/Login";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="" element={<HomeDev />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buscarvagas" element={<BuscarVagas />} />
      <Route path="/areacandidata" element={<AreaCandidata />} />
      <Route path="/amir_areacandidata" element={<Amir_AreaCandidata />} />
      <Route path="/candidaturas" element={<MinhasCandidaturas />} />
      <Route path="/listamentoras" element={<ListaMentoras />} />
      <Route path="/mentora" element={<Mentora />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
