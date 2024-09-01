import React from "react";
import { Link } from "react-router-dom";
import Logout from "../../components/Logout";

export default function AlumnoNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to={`inicio`}>INICIO</Link>
        </li>

        <li>
          <Link to={`pei`}>PEI</Link>
        </li>
        <li>
          <Link to={``}>MI CURSO</Link>
        </li>
        <li>
          <Link to={``}>CALIFICACIONES</Link>
        </li>

        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}
