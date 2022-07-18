import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"



export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
  );
}