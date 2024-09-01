import React from "react";

//styles
import { ComentariosUl, ComentariosList } from "../styles/comunicado";

//COMPONENTE comentarios
export default function ComentarioContent({ comentarios }) {
  return (
    <div>
      <h5>Comentarios</h5>
      <br />
      {comentarios.length === 0 ? (
        <p>No hay comentarios.</p>
      ) : (
        <ComentariosUl>
          {comentarios.map((comentario) => (
            <ComentariosList key={comentario.idcomentario}>
              <p>
                {comentario.usuario?.nombres} {comentario.usuario?.apellidos}
                {" - "}
                {comentario.fechacomentario}
              </p>
              <span>{comentario.contenidocomentario}</span>
              <br />
            </ComentariosList>
          ))}
        </ComentariosUl>
      )}
    </div>
  );
}

