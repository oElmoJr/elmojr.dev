import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  background-color: ${(props) => props.theme.palette.common.primary.background};

  height: 64px;
  width: 100%;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }

  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
  }

  button {
    all: unset;
  }

  .SwitchRoot {
    width: 40px;
    height: 23px;
    background-color: ${(props) => props.theme.palette.common.primary.text};
    border-radius: 9999px;
    position: relative;

    &[data-state="checked"] {
      background-color: ${(props) => props.theme.palette.common.primary.text};
    }
  }

  .SwitchThumb {
    display: block;
    width: 19px;
    height: 19px;
    background-color: ${(props) =>
      props.theme.palette.common.primary.background};
    border-radius: 9999px;
    transition: transform 200ms;
    transform: translateX(2px);
    will-change: transform;

    &[data-state="checked"] {
      transform: translateX(19px);
      background-color: ${(props) =>
        props.theme.palette.common.primary.background};
    }
  }
`;

export const Nav = styled.nav`
  color: ${(props) => props.theme.palette.common.primary.text};

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    height: 24px;

    gap: 24px;
  }

  li {
    @media (max-width: 768px) {
      display: none;

      :last-child,
      :nth-last-child(2) {
        display: block;
      }
    }
  }

  a {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 15px;

    cursor: pointer;
    transition: opacity 200ms;

    :hover {
      opacity: 0.7;
    }

    :visited {
      color: ${(props) => props.theme.palette.common.primary.text};
    }
  }
`;
