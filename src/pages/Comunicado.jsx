import React from "react";

//components
// import ComunicadoForm from "../components/ComunicadoForm";
import ComunicadoContent from "../components/ComunicadoContent";

//services

//styles
import { ComunicadoCont } from "../styles/comunicado";

//COMPONENT father
export default function Comunicado() {
  return (
    <ComunicadoCont>
      <ComunicadoContent />
    </ComunicadoCont>
  );
}
