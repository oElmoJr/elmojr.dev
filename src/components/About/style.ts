import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  gap: 64px;

  height: 100vh;
  margin: 0 auto;

  .Photo {
    min-width: 298px;
    min-height: 375px;

    @media (max-width: 768px) {
      min-height: 288px;
      min-width: 288px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-size: 48px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  }

  @media (max-width: 768px) {
    gap: 16px;

    p {
      width: 60vw;
    }
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.palette.colors.yellow};
  color: ${(props) => props.theme.palette.colors.black};
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);

  border: 1px solid ${(props) => props.theme.palette.common.secondary.border};
  border-radius: 50px;

  width: 129px;
  height: 32px;

  transition: opacity 200ms;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
