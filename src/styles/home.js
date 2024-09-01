import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding-top: 20px;
`;

export const FadeBox = styled.div`
  background: linear-gradient(to right, #2558e6, #ffffff);
  /* display: flex;
  align-items: center;
  justify-content: center; */
  height: 500px;
  border-radius: 2rem;
  margin: 3rem;
  display: grid;
  grid-template-columns: 60% 30%;
  grid-template-rows: 30%;
  img {
    margin: 1rem;
  }
  h1 {
    color: #ffffff;
    font-size: 3rem;
    margin: 1rem;
  }
`;
