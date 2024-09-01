import React from "react";
import { Link } from "react-router-dom";
import {
  AsistenteSideCont,
  ListItem,
  Icon,
  Text,
} from "../../styles/asistenteside";

export default function AlumnoSide() {
  return (
    <AsistenteSideCont>
      <ListItem>
        <Link to={`/tareas`}>
          <Icon src="" alt="" />
          <Text>Tareas</Text>
        </Link>
      </ListItem>
    </AsistenteSideCont>
  );
}
