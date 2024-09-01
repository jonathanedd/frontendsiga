import React from "react";
import logowhite from "../assets/logowhite.ico";
import { Link } from "react-router-dom";


//Styles components
import { NavContainer, List, Ingresar } from "../styles/nav";

export default function Nav() {
  return (
    <NavContainer>
      <img width="150px" src={logowhite} alt="logoblue" />
      
      <List>
        <li>
          <Link to={`/`}>INICIO</Link>
        </li>
        <li>
          <Link to={``}>QUIENES SOMOS</Link>
        </li>
        <Ingresar>
          <Link to={`/login`}>INGRESA AQUI</Link>
        </Ingresar>
        <li>
          <Link to={``}>VENTAS</Link>
        </li>
        <li>
          <Link to={``}>SOPORTE</Link>
        </li>
      </List>
    </NavContainer>
  );
}
