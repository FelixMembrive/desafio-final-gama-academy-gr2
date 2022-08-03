import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home";
import AreaCandidata from "./pages/AreaCandidata";
import Amir_AreaCandidata from "./pages/Amir_AreaCandidata";
import Amir_Redirec_MentAge from "./pages/Amir_Redirec_MentAge";
import MentoraAgendamento from "./pages/MentoraAgendamento";
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
      <Route path="/amir_redirec_mentage" element={<Amir_Redirec_MentAge/>}/>
      <Route path="/mentora-agendamento" element={<MentoraAgendamento />} />
      <Route path="/candidaturas" element={<MinhasCandidaturas />} />
      <Route path="/listamentoras" element={<ListaMentoras />} />
      <Route path="/mentora" element={<Mentora />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
