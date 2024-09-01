import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #2558e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  img {
    padding-left: 4rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding-left: 20px;
    padding-right: 20px;
    a {
      color: aliceblue;
      text-decoration: none;
    }
  }
`;

export const Ingresar = styled.a`
  a {
    color: black;
    text-decoration: none;
    font-weight: 700;
  }
`;
