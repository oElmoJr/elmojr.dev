import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./styles.css";
import logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";

const Menu = (): any => {
  const navigate = useNavigate();
  return (
    <>
      <p>
        <a href="#home">Inicio</a>
      </p>
      <p>
        <a href="#about">Sobre</a>
      </p>
      <p>
        <a href="#services">Serviços</a>
      </p>
      <p>
        <a href="#tech">Tecnologias</a>
      </p>
      <p>
        <a href="#projects">Portifólio</a>
      </p>
      <p onClick={() => navigate("/")}>
        <a>Contato</a>
      </p>
    </>
  );
};

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        <div className="navbar-links-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <Menu />
        </div>
        <div className="navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu-container">
              <div className="navbar-menu-container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
