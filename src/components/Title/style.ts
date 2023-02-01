import styled from "styled-components";

export const Text = styled.h1`
  font-family: "Aleo";
  line-height: 72px;
  font-size: 72px;
  cursor: default;

  span {
    color: ${(props) => props.theme.palette.colors.yellow};
  }

  @media (max-width: 768px) {
    font-size: 56px;
    line-height: 56px;
  }
`;
