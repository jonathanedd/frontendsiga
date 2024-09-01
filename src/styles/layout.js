import styled from "styled-components";

// Estilos para la barra superior
export const TopBar = styled.div`
  img {
    object-fit: contain;
  }

  .logo {
    width: 50px;
    object-fit: contain;
    padding-left: 2rem;
  }

  .escudo {
    width: 60px;
    object-fit: contain;
    padding-left: 1rem;
  }
  p {
    padding-left: 0.5rem;
  }
  background-color: #2558e6;
  color: #fff;
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  /* padding: 0 20px; */
  position: absolute;
  border-bottom: 1px solid #474555;
`;

// Estilos para la barra lateral izquierda
export const SideBar = styled.div`
  background-color: #2558e6;
  color: #fff;
  height: 100vh;
  width: 15%;
  /* padding: 20px; */
  position: absolute;
  border-right: 1px solid #474555;
`;

// Contenedor principal que contiene ambas barras
export const Container = styled.div`
  display: flex;
  background-color: chocolate;
`;
