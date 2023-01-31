import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  background-color: #202020;

  height: 64px;
  width: 100%;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 0 25px;
    background-color: #202020;
  }

  button {
    all: unset;
  }

  .SwitchRoot {
    width: 40px;
    height: 23px;
    background-color: #e5e6e0;
    border-radius: 9999px;
    position: relative;
    box-shadow: 0 2px 10px #323232;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &[data-state="checked"] {
      background-color: #323232;
    }
  }

  .SwitchThumb {
    display: block;
    width: 19px;
    height: 19px;
    background-color: #323232;
    border-radius: 9999px;
    transition: transform 200ms;
    transform: translateX(2px);
    will-change: transform;

    &[data-state="checked"] {
      transform: translateX(19px);
      background-color: #e5e6e0;
    }
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    height: 24px;

    gap: 24px;

    li {
      @media (max-width: 768px) {
        display: none;

        :last-child,
        :nth-last-child(2) {
          display: block;
        }
      }

      a {
        color: #e5e6e0;

        font-family: "Roboto";
        font-weight: 500;
        font-size: 15px;

        cursor: pointer;
        transition: opacity 200ms;

        :hover {
          opacity: 0.7;
        }

        :visited {
          color: #e5e6e0;
        }
      }
    }
  }
`;
