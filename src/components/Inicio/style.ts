import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  width: 450px;
  height: 100vh;
  margin: auto;

  @media (max-width: 768px) {
    width: 265px;
  }

  /* h1 {
    @media (max-width: 768px) {
      font-size: 56px;
      line-height: 55px;
    }
  } */

  p {
    font-size: 20px;
    width: 210px;
    height: 35px;
    line-height: 35px;
  }
`;
