import styled from "styled-components";

export const GlobalView = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  position: absolute;

  right: 0%;
  bottom: 0%;
`;
export const MenuItems = styled.nav`
  /* background-color: aqua; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
  /* margin-top: 1rem; */

  ul {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
  }
  li {
    padding-left: 2rem;
    list-style: none;

    a {
      color: aliceblue;
      text-decoration: none;
    }
  }
`;
