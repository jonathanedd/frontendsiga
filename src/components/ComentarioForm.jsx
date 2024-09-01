import React, { useState, useContext } from "react";

//icons
import { MdSend } from "react-icons/md";

//services
import { createComentario } from "../services/comentario.service";

//styles
import { ComentarioFrm } from "../styles/comunicado";

//components
import { AuthContext } from "../utils/AuthContext";

//COMPONENTE
export default function ComentarioForm({ idcomunicado, onComentarioAdded }) {
  const [comentario, setComentario] = useState("");

  const { role } = useContext(AuthContext);
  const puedeCrearComunicado =
    role &&
    ["ADMIN", "COORDINADOR", "DIRECTOR", "DOCENTE", "ASISTENTE"].includes(role);

  const handleChange = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createComentario(idcomunicado, {
        contenidocomentario: comentario,
      });

      if (response) {
        setComentario(""); // Limpiar el campo de entrada

        // Añadir el nuevo comentario al estado en ComunicadoContent
        onComentarioAdded();
      }
    } catch (error) {
      console.error("Error al crear comentario", error);
    }
  };

  return (
    <div>
      {puedeCrearComunicado && (
        <ComentarioFrm onSubmit={handleSubmit}>
          <input
            type="text"
            value={comentario}
            onChange={handleChange}
            placeholder="Comentar"
          />
          <button
            type="submit"
            style={{ background: "transparent", border: "none" }}
          >
            <MdSend
              size={20}
              style={{ marginLeft: "5px", cursor: "pointer" }}
            />
          </button>
        </ComentarioFrm>
      )}
    </div>
  );
}
