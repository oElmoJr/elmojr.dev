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

  p {
    font-size: 20px;
    width: 220px;
    height: 35px;
    line-height: 35px;
  }

  @media (max-width: 830px) {
    width: 265px;

    p {
      font-size: 14px;
      width: 170px;
      height: 27px;
      line-height: 27px;
    }
  }
`;
