import styled from "styled-components";

export const Container = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 368px) {
    font-size: 16px;
  }
`;
