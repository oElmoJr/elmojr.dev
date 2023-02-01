import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100vh;
  padding: 0 155px;

  img {
    height: 300px;
    width: 300px;

    @media (max-width: 768px) {
      height: 288px;
      width: 288px;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;

    flex-direction: column;
    padding: 0 20px;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 300px;

  h1 {
    font-family: "Aleo";
    font-weight: 700;
    font-size: 48px;

    width: 400px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 80vw;
      font-size: 30px;
    }
  }

  p {
    height: 165px;
    width: 612px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 80vw;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;
