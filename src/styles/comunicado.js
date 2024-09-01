import styled, { keyframes } from "styled-components";

//=============COMUNICADO PADRE==============\\
export const ComunicadoCont = styled.div`
  width: 60%;
  /* height: 100%; */
  height: calc(100%);
  background-color: #191919;
  /* background-color: #efefef; */
`;

//=============COMUNICADO FORM==============\\
export const PublicacionCont = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 80%;
  /* height: 100%; */
  padding: 1rem;
  /* background-color: blueviolet; */
  background-color: #ffffff;
  margin: auto;
  /* border: 1px solid #e2dad6; */
  border-radius: 5px;
`;

export const PublicacionForm = styled.form`
  /* background-color: #fff; */

  border-radius: 0.5rem;
  padding-top: 10px;
`;

export const InputTitle = styled.input`
  height: 35px;
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
`;
export const InputText = styled.input`
  height: 60px;
  background-color: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
`;

export const FileInputWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer; /* Cambia el cursor para mostrar que es clickeable */
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0; /* Oculta el input real */
  cursor: pointer; /* Cambia el cursor al pasar sobre el input */
`;

export const IconWrapper = styled.div`
  font-size: 24px; /* Ajusta el tamaño del icono */
  color: #333; /* Cambia el color del icono si es necesario */
`;

//=============COMUNICADO CONTENT==============\\
export const Publicaciones = styled.div`
  /* background-color: aqua; */

  /* height: calc(100%); */
  height: 100%;
  max-height: 100vh;
  overflow-y: auto; /* Habilita el scroll vertical cuando el contenido se desborde */
  //padding: 10px;
  h4 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const ComunicadoData = styled.div`
  margin-bottom: 5px;
  width: 91%;
  /* background-color: #efefef; */
  background-color: #ffffff;
  /* border-bottom: 1px solid #000; */
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-y: auto; /* Habilita el scroll vertical cuando el contenido se desborde */
  /* padding: 10px; */

  h1 {
    font-size: 18px; /* Ajusta el tamaño del título según tus necesidades */
  }

  span {
    font-size: 14px; /* Ajusta el tamaño del contenido según tus necesidades */
    line-height: 1.5; /* Ajusta el interlineado del contenido */
  }

  p {
    font-size: 12px;
    color: #666;
    margin-top: 5px; /* Espacio superior para separar del contenido */
  }
`;

//=============COMENTARIO FORM==============\\
export const ComentarioFrm = styled.form`
  /* background-color: cadetblue; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;

  input {
    /* background-color: aqua; */
    width: 100%;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 1px grey solid;
  }
`;

//=============COMENTARIO CONTENT==============\\
export const ComentariosUl = styled.ul`
  /* background-color: aquamarine; */
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const ComentariosList = styled.li`
  /* background-color: #EFEFEF; */
  width: 90%;
  border-bottom: solid 1px #e2dad6;
  padding-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in forwards; // Duración de 0.5s para el efecto
  margin-bottom: 10px; // Espaciado entre los comentarios
`;

export const SmallLink = styled.a`
  font-size: 13px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
`;
