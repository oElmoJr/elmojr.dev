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

  @media (max-width: 830px) {
    width: 265px;
  }
`;
