import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout";

export default function AdminNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to={`inicio`}>INICIO</Link>
        </li>

        <li>
          <Link to={`pei`}>PEI</Link>
        </li>
        <li></li>
        <li>
          <Link to={`statistics`}>DASHBOARD</Link>
        </li>

        <li>
          <Link to={``}>DOCENTES</Link>
        </li>
        <li>
          <Link to={``}>CURSOS</Link>
        </li>
        <li>
          <Link to={``}>ALUMNOS</Link>
        </li>
        <li>
          <Link to="registrousuario">NUEVO USUARIO</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
