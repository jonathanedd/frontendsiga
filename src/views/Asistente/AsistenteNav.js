import React from "react";
import { Link } from "react-router-dom";
import { AsistantNavCont } from "../../styles/asistantnav";
import Logout from "../../components/Logout";

export default function AsistantNav() {
  return (
    <AsistantNavCont>
      <ul>
        <li>
          <Link to="/">Asistencias</Link>
        </li>
        <li>
          <Link to={`/`}>Matriculas</Link>
        </li>
        <li>
          <Link to={`/`}>Comunicados</Link>
        </li>
        <li>
          <Link to={``}>Alumnos</Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </AsistantNavCont>
  );
}
