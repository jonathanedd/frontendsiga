import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const RegistroUsuarioCont = styled.div`
  /* background-color: #008170; */
  width: 50%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  confirmationCont {
    position: fixed;
    width: 300px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #9babb8;
    border: 1px solid #008170;
    color: #008170;
    padding: 20px;
    border-radius: 5px;
    animation: ${fadeInOut} 3s ease-in-out;
    text-align: center;
  }
`;

export const RegistroUsuarioForm = styled.form`
  background-color: #efefef;
  display: flex;
  width: fit-content;
  justify-content: center;
  text-align: left;
  padding: 2rem;
  border-radius: 0.5rem;

  .column_one {
    /* background-color: aqua; */
    height: 100%;
    margin: 1rem;
  }

  .column_two {
    margin: 1rem;
  }

  h1 {
    color: #7882a4;
  }

  label {
    color: #7882a4;
    text-align: left;
  }
  span {
    color: red;
    font-size: 0.9rem;
  }
  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 30px;
    border-radius: 0.2rem;
    margin-bottom: 0.5rem;
  }
  select {
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    height: 35px;
    width: 150px;
  }
  button {
    margin-top: 1.5rem;
    width: 100px;
    height: 30px;
    background-color: transparent;
    border: 0.5px, solid, black;
    border-radius: 0.5rem;
  }
`;

// export const confirmationCont = styled.div`
//   position: fixed;
//   width: 150px;
//   height: 150px;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #9babb8;
//   border: 1px solid #008170;
//   color: #008170;
//   padding: 20px;
//   border-radius: 5px;
//   animation: ${fadeInOut} 3s ease-in-out;
// `;
