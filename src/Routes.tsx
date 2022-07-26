import { Routes, Route, Link } from "react-router-dom";
import HomeDev from "./pages/HomeDev";
import Home from "./pages/Home"
import AreaCandidata from "./pages/AreaCandidata";
import Pesquisa from "./pages/Pesquisa";
import Amir_AreaCandidata from "./pages/Amir_AreaCandidata";
import ListaMentoras from "./pages/ListaMentoras";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="" element={<HomeDev />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/areacandidata" element={<AreaCandidata />} />
        <Route path="/amir_areacandidata" element={<Amir_AreaCandidata />} />
        <Route path="/listamentoras" element={<ListaMentoras />} />
      </Routes>
  );
}