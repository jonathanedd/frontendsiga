import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 80%;
  height: 100vh;
  border-radius: 2rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 15px 0 10px rgba(0, 0, 0, 0.2), -15px 0 10px rgba(0, 0, 0, 0.2);
`;

export const BlueBox = styled.div`
  width: 40%;
  height: 91.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  margin: 0.5rem;
  background-color: #2558e6;
  padding: 2rem;
  h3 {
    color: aliceblue;
    text-decoration: none;
  }
  img {
    width: 400px;
    opacity: 20%;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: violet; */
  width: 55%;
  height: 98%;
  form {
    display: flex;
    flex-direction: column;

    input {
      width: 450px;
      height: 45px;
      margin-bottom: 3rem;
      border-radius: 0.5rem;
    }
  }
`;
