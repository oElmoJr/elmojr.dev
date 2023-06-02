import "./styles.css";

import prototipagem from "./assets/prototipagem.png";
import cleancode from "./assets/cleancode.png";
import mobiledev from "./assets/mobiledev.png";
import webdev from "./assets/webdev.png";

export default function Services() {
  return (
    <div id="services" className="services-container section-padding">
      <h2>O que eu faço?</h2>
      <div className="services-cards-container">
        <div className="services-card">
          <img src={prototipagem} alt="" />
          <p>PROTOTIPAGEM</p>
        </div>
        <div className="services-card">
          <img src={cleancode} alt="" />
          <p>CLEAN CODE</p>
        </div>
        <div className="services-card">
          <img src={mobiledev} alt="" />
          <p>DESENVOLVIMENTO DE APLIATIVOS</p>
        </div>
        <div className="services-card">
          <img src={webdev} alt="" />
          <p>DESENVOLVIMENTO DE WEBSITES</p>
        </div>
      </div>
    </div>
  );
}
