import React, { useEffect, useState, useContext } from "react";

//componentes
import ComentarioContent from "./ComentarioContent";
import ComentarioForm from "./ComentarioForm";
import { AuthContext } from "../utils/AuthContext";
import ComunicadoForm from "./ComunicadoForm";

//services
import { getComentariosByComunicado } from "../services/comentario.service";
import { getComunicados } from "../services/comunicados.service";

//styles
import { Publicaciones, ComunicadoData, SmallLink } from "../styles/comunicado";

//COMPONENTE hijo
export default function ComunicadoContent() {
  const [activeComunicado, setActiveComunicado] = useState(null);
  const [comentarios, setComentarios] = useState({});
  const [showComunicado, setShowComunicado] = useState([]);
  const [error, setError] = useState(null);
  const [showFormComunicado, setShowFormComunicado] = useState(false);

  const { role } = useContext(AuthContext);

  const toggleComentario = (idcomunicado) => {
    setActiveComunicado((prevActive) =>
      prevActive === idcomunicado ? null : idcomunicado
    );
  };

  const fetchComentarios = async (idcomunicado) => {
    try {
      const fetchedComentarios = await getComentariosByComunicado(idcomunicado);
      setComentarios((prev) => ({
        ...prev,
        [idcomunicado]: fetchedComentarios,
      }));
    } catch (error) {
      console.error("Error al obtener comentarios", error);
    }
  };

  const handleComentarioAdded = (idcomunicado) => {
    fetchComentarios(idcomunicado);
  };

  //Obtiene los comunicados
  const fetchComunicado = async () => {
    try {
      const responseComunicado = await getComunicados();
      setShowComunicado(responseComunicado);
    } catch (error) {
      console.log("Error fetching comunicado useEffect", error);
      setError(error);
    }
  };

  useEffect(() => {
    if (activeComunicado) {
      fetchComentarios(activeComunicado);
    }
    fetchComunicado();
  }, [activeComunicado]);

  const getSmallLinkText = (idcomunicado) => {
    if (activeComunicado === idcomunicado) {
      return "Cerrar";
    } else if (role === "ALUMNO") {
      return "Ver comentarios";
    } else {
      return "Responder";
    }
  };

  const toggleComunicadoForm = () => {
    setShowFormComunicado((prevShow) => !prevShow);
  };

  return (
    <Publicaciones>
      {role &&
        ["ADMIN", "COORDINADOR", "DIRECTOR", "DOCENTE", "ASISTENTE"].includes(
          role
        ) && (
          <button onClick={toggleComunicadoForm}>
            {showFormComunicado ? "Cancelar" : "Publicar nuevo comunicado"}
          </button>
        )}
      {/* <ComunicadoForm updateComunicados={fetchComunicado} /> */}
      {showFormComunicado && (
        <ComunicadoForm updateComunicados={fetchComunicado} />
      )}
      {error && <div>{error.message}</div>}
      <ul>
        <h4>Comunicados</h4>
        {showComunicado.map((comunicado) => (
          <ComunicadoData key={comunicado.idcomunicado}>
            <p style={{ fontSize: "12px" }}>
              {comunicado.usuario?.nombres} {comunicado.usuario?.apellidos},{" "}
              {comunicado.fechacomunicado}
            </p>
            <h1>{comunicado.titulocomunicado}</h1>
            <span>{comunicado.contenidocomunicado}</span>
            <br />

            <SmallLink
              onClick={() => toggleComentario(comunicado.idcomunicado)}
            >
              {getSmallLinkText(comunicado.idcomunicado)}
            </SmallLink>
            {activeComunicado === comunicado.idcomunicado && (
              <>
                <ComentarioForm
                  idcomunicado={comunicado.idcomunicado}
                  onComentarioAdded={() =>
                    handleComentarioAdded(comunicado.idcomunicado)
                  }
                />
                <ComentarioContent
                  comentarios={comentarios[comunicado.idcomunicado] || []}
                />
              </>
            )}
          </ComunicadoData>
        ))}
      </ul>
    </Publicaciones>
  );
}
