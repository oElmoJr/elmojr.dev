import styled from "styled-components";

export const Text = styled.h2`
  font-family: "Aleo";
  line-height: 100%;
  letter-spacing: normal;

  cursor: default;

  span {
    color: ${(props) => props.theme.palette.colors.yellow};
  }
`;
