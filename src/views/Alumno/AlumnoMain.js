import React from "react";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//Components
import Comunicado from "../../pages/Comunicado";
import Pei from "../../pages/Pei";

//styles
import { AdminMainCont } from "../../styles/adminmain";

export default function AlumnoMain() {
  return (
    <AdminMainCont>
      <Routes>
        {/* Revisar tareas por ejemplo */}
        {/* <Route path="/" element={<></>} /> */}
        <Route path="/inicio" element={<Comunicado />} />
        <Route path="/pei" element={<Pei />} />
      </Routes>
      <Outlet />
    </AdminMainCont>
  );
}
