import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;

  height: 457px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 376px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;

export const LinkContainer = styled.div`
  width: 376px;

  @media (max-width: 768px) {
    width: 210px;
  }

  .disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  background: none;
  color: ${(props) => props.theme.palette.common.primary.text};
  border: 2px solid ${(props) => props.theme.palette.common.primary.text};
  border-radius: 16px;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);

  font-size: 20px;
  cursor: pointer;

  height: 60px;
  width: 376px;
  margin: 48px 0 16px;

  transition: opacity ease-in-out 50ms;
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    width: 210px;
  }
`;
