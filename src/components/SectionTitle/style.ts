import styled from "styled-components";

export const Title = styled.h2`
  font-size: 48px;
  font-family: "Aleo";

  cursor: default;

  span {
    color: ${(props) => props.theme.palette.colors.yellow};
  }

  @media (max-width: 830px) {
    font-size: 40px;
  }
`;
