import React from "react";
import {
  AsistenteSideCont,
  ListItem,
  Icon,
  Text,
} from "../../styles/asistenteside";

import aula from "../../assets/icons/aula.ico";
import pei from "../../assets/icons/pei-icon.png";
import curso from "../../assets/icons/curso.ico";
import objetivo from "../../assets/icons/objetivo.ico";
import resultado from "../../assets/icons/resultado.ico";
import reporte from "../../assets/icons/reporte.ico";

export default function AdminSide() {
  return (
    <AsistenteSideCont>
      <ListItem>
        <Icon src={pei} alt="" />
        <Text>PEI</Text>
      </ListItem>

      <ListItem>
        <Icon src={aula} alt="" />
        <Text>AULAS</Text>
      </ListItem>

      <ListItem>
        <Icon src={curso} alt="" />
        <Text>CURSOS</Text>
      </ListItem>

      <ListItem>
        <Icon src={objetivo} alt="" />
        <Text>OBJETIVOS DE DESEMPEÑO</Text>
      </ListItem>

      <ListItem>
        <Icon src={resultado} alt="" />
        <Text>RESULTADOS DE DESEMPEÑO</Text>
      </ListItem>

      <ListItem>
        <Icon src={reporte} alt="" />
        <Text>REPORTES DE DESEMPEÑO</Text>
      </ListItem>
    </AsistenteSideCont>
  );
}
