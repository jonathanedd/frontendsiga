import React, { useState, useRef, useContext } from "react";

//icons
import { MdAttachFile } from "react-icons/md";
import { IoSend } from "react-icons/io5";

//services
import { createComunicado } from "../services/comunicados.service";

//components
import { AuthContext } from "../utils/AuthContext";

//styles
import {
  PublicacionCont,
  PublicacionForm,
  InputTitle,
  InputText,
  FileInputWrapper,
  FileInput,
  IconWrapper,
} from "../styles/comunicado";

//COMPONENT
export default function ComunicadoForm({ updateComunicados }) {
  const [formComunicado, setFormComunicado] = useState({
    titulocomunicado: "",
    contenidocomunicado: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const { role } = useContext(AuthContext);
  const puedePublicar =
    role &&
    ["ADMIN", "COORDINADOR", "DIRECTOR", "DOCENTE", "ASISTENTE"].includes(role);

  const fileInputRef = useRef(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormComunicado((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoComunicado = await createComunicado(formComunicado);
      if (nuevoComunicado) {
        setSuccessMessage("Comunicado creado con éxito");
        setFormComunicado({ titulocomunicado: "", contenidocomunicado: "" });
        updateComunicados();
      } else {
        setError(new Error("No se pudo crear el comunicado"));
      }
    } catch (error) {
      console.error("Error al crear comunicado", error);
      setError(error);
    }
  };

  return (
    <div>
      {puedePublicar && (
        <PublicacionCont>
          {error && <div>Error: {error.message}</div>}
          {successMessage && <div>{successMessage}</div>}
          <PublicacionForm action="" onSubmit={handleSubmit}>
            <InputTitle
              type="text"
              name="titulocomunicado"
              placeholder="Agrega un asunto"
              value={formComunicado.titulocomunicado}
              onChange={handleChange}
            />
            <InputText
              type="text"
              name="contenidocomunicado"
              placeholder="Escribe un comunicado"
              value={formComunicado.contenidocomunicado}
              onChange={handleChange}
            />

            <FileInputWrapper onClick={handleClick}>
              <IconWrapper>
                <MdAttachFile />
              </IconWrapper>
              <FileInput
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  // Maneja el archivo seleccionado
                  console.log(e.target.files[0]);
                }}
              />
            </FileInputWrapper>

            <button
              type="submit"
              style={{ background: "transparent", border: "none" }}
            >
              <IoSend
                size={20}
                style={{ marginLeft: "5px", cursor: "pointer" }}
              />
            </button>
          </PublicacionForm>
        </PublicacionCont>
      )}
    </div>
  );
}
