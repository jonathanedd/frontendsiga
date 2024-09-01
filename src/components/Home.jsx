import React from "react";
import logowhite from "../assets/logowhite.ico";
import dashboard1 from "../assets/dashboard1.png";

//Styles components
import { FadeBox, HomeContainer } from "../styles/home";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeContainer>
        <FadeBox>
          <img width="250px" src={logowhite} alt="SIGA" />
          <img width="400px" src={dashboard1} alt="dashboard" />
          <h1>Sistema de Información para la Gestión Académica</h1>
        </FadeBox>
      </HomeContainer>
    </>
  );
}
