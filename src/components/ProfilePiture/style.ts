import styled from "styled-components";

const profilePhoto = require("../../assets/Foto.png");

export const Image = styled.div`
  width: 110px;
  height: 110px;
  background-image: url(${profilePhoto});
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 210px;
    height: 210px;
  }
`;
