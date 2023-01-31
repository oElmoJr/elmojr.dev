import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #323232;
  background: #ffc412;
  font-family: "Roboto";
  font-size: 14px;
  line-height: 14px;

  border: 1px solid #4f4f4f;
  border-radius: 50px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  width: 90px;
  height: 30px;

  transition: opacity 200ms;

  :hover {
    opacity: 0.7;
  }
`;
