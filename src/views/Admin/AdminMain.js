import React from "react";

import { Route, Routes } from "react-router-dom";
import RegistroUsuario from "./RegistroUsuario";
import Statistics from "./Statistics";
import Comunicado from "../../pages/Comunicado.jsx";

//styles
import { AdminMainCont } from "../../styles/adminmain";
import Pei from "../../pages/Pei.jsx";

export default function AdminMain({ children }) {
  return (
    <AdminMainCont>
      <Routes>
        <Route path="/registrousuario" element={<RegistroUsuario />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/inicio" element={<Comunicado />} />
        <Route path="/pei" element={<Pei />} />
      </Routes>
    </AdminMainCont>
  );
}
