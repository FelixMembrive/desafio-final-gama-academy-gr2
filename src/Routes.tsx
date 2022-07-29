<<<<<<< HEAD
import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import AreaCandidata from "./pages/AreaCandidata";
import Amir_AreaCandidata from "./pages/Amir_AreaCandidata";
import Amir_ValorMentoria from "./pages/Amir_ValorMentoria";
import ListaMentoras from "./pages/ListaMentoras";
import MinhasCandidaturasAndamento from "./pages/MinhasCandidaturasAndamento";
import MinhasCandidaturasSalvas from "./pages/MinhasCandidaturasSalvas";
import MinhasCandidaturasFinalizadas from "./pages/MinhasCandidaturasFinalizadas";
import BuscarVagas from "./pages/BuscarVagas";
import Mentora from "./pages/Mentora";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="" element={<HomeDev />} />
        <Route path="/home" element={<Home />} />
        <Route path="/buscarvagas" element={<BuscarVagas />} />
        <Route path="/areacandidata" element={<AreaCandidata />} />
        <Route path="/amir_areacandidata" element={<Amir_AreaCandidata />} />
        <Route path="/amir_valormentoria" element={<Amir_ValorMentoria />} />
        <Route path="/candidaturas-salvas" element={<MinhasCandidaturasSalvas/>} />
        <Route path="/candidaturas-andamento" element={<MinhasCandidaturasAndamento/>} />
        <Route path="/candidaturas-finalizadas" element={<MinhasCandidaturasFinalizadas/>} />
        <Route path="/listamentoras" element={<ListaMentoras />} />
        <Route path="/mentora" element={<Mentora />} />
      </Routes>
  );
}
=======
import { Routes, Route, Link } from 'react-router-dom'
import HomeDev from './pages/HomeDev'
import Home from './pages/Home'
import AreaCandidata from './pages/AreaCandidata'
import Amir_AreaCandidata from './pages/Amir_AreaCandidata'
import ListaMentoras from './pages/ListaMentoras'
import MinhasCandidaturasAndamento from './pages/MinhasCandidaturasAndamento'
import MinhasCandidaturasSalvas from './pages/MinhasCandidaturasSalvas'
import MinhasCandidaturasFinalizadas from './pages/MinhasCandidaturasFinalizadas'
import BuscarVagas from './pages/BuscarVagas'
import Mentora from './pages/Mentora'
import Login from './pages/Login'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="" element={<HomeDev />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buscarvagas" element={<BuscarVagas />} />
      <Route path="/areacandidata" element={<AreaCandidata />} />
      <Route path="/amir_areacandidata" element={<Amir_AreaCandidata />} />
      <Route
        path="/candidaturas-salvas"
        element={<MinhasCandidaturasSalvas />}
      />
      <Route
        path="/candidaturas-andamento"
        element={<MinhasCandidaturasAndamento />}
      />
      <Route
        path="/candidaturas-finalizadas"
        element={<MinhasCandidaturasFinalizadas />}
      />
      <Route path="/listamentoras" element={<ListaMentoras />} />
      <Route path="/mentora" element={<Mentora />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
>>>>>>> e09ac35c98a2fa7e57b1378868c8303b0e49cc0a
