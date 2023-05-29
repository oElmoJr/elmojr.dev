import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;

  gap: 64px;

  height: 100vh;
  margin: 0 auto;

  .Photo {
    min-width: 298px;
    min-height: 375px;

    @media (max-width: 830px) {
      min-height: 220px;
      min-width: 220px;
    }

    @media (max-width: 480px) {
      min-height: 280px;
      min-width: 280px;
    }
  }

  @media (max-width: 830px) {
    width: 85%;
    gap: 32px;
  }

  @media (max-width: 480px) {
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 830px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 16px;
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

  @media (max-width: 830px) {
    font-size: 14px;
    width: 109px;
    height: 28px;
  }
`;
