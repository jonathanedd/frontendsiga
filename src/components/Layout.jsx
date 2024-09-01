import React from "react";
import logoWhite from "../assets/iconwhite.png";
import escudocolegio from "../assets/escudocolegio.png";

import { TopBar, SideBar, Container } from "../styles/layout";
// import AdminNav from "../views/Admin/AdminNav";
// import AsistantNav from "../views/Asistente/AsistantNav";

export default function Layout() {
  return (
    <Container>
      <SideBar></SideBar>
      <TopBar>
        <img className="logo" src={logoWhite} alt="" />
        {/* <p>S.I.G.A</p> */}
        <img className="escudo" src={escudocolegio} alt="" />
        <p>Colegio Real Holandés</p>
      </TopBar>
    </Container>
  );
}
