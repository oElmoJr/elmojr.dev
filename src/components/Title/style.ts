import styled from "styled-components";

export const Text = styled.h1`
  font-size: 96px;
  font-family: "Aleo";
  line-height: 100%;

  cursor: default;

  span {
    color: ${(props) => props.theme.palette.colors.yellow};
  }

  @media (max-width: 830px) {
    font-size: 56px;
    line-height: 58px;
  }
`;
