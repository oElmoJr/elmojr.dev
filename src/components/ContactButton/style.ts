import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.palette.colors.yellow};
  color: ${(props) => props.theme.palette.colors.black};
  border: 1px solid ${(props) => props.theme.palette.common.secondary.border};
  border-radius: 50px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  font-family: "Roboto";
  font-size: 14px;
  line-height: 14px;

  width: 90px;
  height: 30px;

  transition: opacity 200ms;

  :hover {
    opacity: 0.7;
  }
`;
