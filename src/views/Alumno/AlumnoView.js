import React from "react";
import Layout from "../../components/Layout";
import { GlobalView, MenuItems } from "../../styles/globalview";
import AlumnoNav from "./AlumnoNav";
import AlumnoMain from "./AlumnoMain";
import { Routes, Route } from "react-router-dom";
import AlumnoSide from "./AlumnoSide";

//COMPONENT
export default function AlumnoView() {
  return (
    <>
      <Layout />
      <GlobalView>
        <MenuItems>
          <AlumnoNav />
          <Routes>
            <Route path="/" element={<AlumnoMain />} />
            Mas rutas dentro de AlumnoMain
          </Routes>
          <AlumnoSide />
          <AlumnoMain />
        </MenuItems>
      </GlobalView>
    </>
  );
}
