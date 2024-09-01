import React, { useState } from "react";
import { createPeiWithArchivo } from "../services/pei.service";

export default function PeiForm() {
  const [nombrecolegio, setNombrecolegio] = useState("");
  const [descripcionpei, setDescripcionpei] = useState("");
  const [mision, setMision] = useState("");
  const [vision, setVision] = useState("");

  const [idProcesoEducativo, setIdProcesoEducativo] = useState(null);
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const peiData = {
        nombrecolegio,
        descripcionpei,
        mision,
        vision,
        fkprocedupei: idProcesoEducativo,
      };

      console.log(setIdProcesoEducativo);

      const result = await createPeiWithArchivo(peiData, file);
      console.log("PEI y archivo subidos exitosamente", result);
      // redirigir al usuario o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al subir PEI y archivo", error);
      // mostrar un mensaje de error al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nombrecolegio}
        onChange={(e) => setNombrecolegio(e.target.value)}
        placeholder="Nombre del Colegio"
        required
      />
      <textarea
        value={descripcionpei}
        onChange={(e) => setDescripcionpei(e.target.value)}
        placeholder="Descripción del PEI"
        required
      />
      <input
        type="text"
        value={mision}
        onChange={(e) => setMision(e.target.value)}
        placeholder="Misión"
        required
      />
      <input
        type="text"
        value={vision}
        onChange={(e) => setVision(e.target.value)}
        placeholder="Visión"
        required
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept=".pdf"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
