import { Routes, Route, Link } from 'react-router-dom'
import HomeDev from './pages/HomeDev'
import Home from './pages/Home'
import AreaCandidata from './pages/AreaCandidata'
import Amir_AreaCandidata from './componentes/SecaoPrincipalAreaCandidata'
import MentoraAgendamento from './pages/MentoraAgendamento'
import ListaMentoras from './pages/ListaMentoras'
import MinhasCandidaturas from './pages/MinhasCandidaturas'
import BuscarVagas from './pages/BuscarVagas'
import Mentora from './pages/Mentora'
import Login from './pages/Login'
import RegisterPage from './pages/Register'
import RedirecionamentoCalendly from './pages/RedirecionamentoCalendly'
import UploadAndDisplayImage from './componentes/uploadphoto'

export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<Login />} />
        <Route path="homedev" element={<HomeDev />} />
        <Route path="areacandidata" element={<AreaCandidata />} />
        <Route path="buscarvagas" element={<BuscarVagas />} />
        <Route path="mentora-agendamento" element={<MentoraAgendamento />} />
        <Route path="candidaturas" element={<MinhasCandidaturas />} />
        <Route path="listamentoras" element={<ListaMentoras />} />
        <Route path="mentora" element={<Mentora />} />
        <Route path="redirecionamentocalendly" element={<RedirecionamentoCalendly />} />
        <Route path="uploadphoto" element={<UploadAndDisplayImage />} />
      </Routes>
  )
}
