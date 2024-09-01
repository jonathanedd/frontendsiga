import styled from "styled-components";

export const AsistenteSideCont = styled.div`
  height: 90vh;
  width: 15%;
  position: absolute;
  bottom: 0;
  left: 0;
  /* background-color: #2c3e50; */
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 30px;
  /* border-bottom: 0.01rem solid #c9fce9; */

  /* position: relative; */

  /* &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 0.01rem;
    background: gray;
    box-shadow: 0 0 5px #00a373, 0 0 10px #00a373, 0 0 15px #00a373,
      0 0 20px #00a373;
    animation: shine 2s infinite;
  }

  @keyframes shine {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  } */
`;

export const Icon = styled.img`
  height: 60px;
  margin-right: 10px;
`;

export const Text = styled.span`
  font-size: 13px;
  color: aliceblue;
`;
