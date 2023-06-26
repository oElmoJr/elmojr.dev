import "./styles.css";

import UXDESIGN from "./assets/UX-DESIGN.png";
import FRONTEND from "./assets/FRONT-END.png";
import RESPONSIVIDADE from "./assets/RESPONSIVIDADE.png";
import ACESSIBILIDADE from "./assets/ACESSIBILIDADE.png";

export default function Services() {
  return (
    <div id="services" className="services-container section-padding">
      <h2>O que eu faço?</h2>
      <div className="services-cards-container">
        <div className="services-card">
          <img src={UXDESIGN} alt="" />
          <p>UI/UX DESIGN</p>
        </div>
        <div className="services-card">
          <img src={FRONTEND} alt="" />
          <p>FRONT-END</p>
        </div>
        <div className="services-card">
          <img src={RESPONSIVIDADE} alt="" />
          <p>RESPONSIVIDADE</p>
        </div>
        <div className="services-card">
          <img src={ACESSIBILIDADE} alt="" />
          <p>ACESSIBILIDADE</p>
        </div>
      </div>
    </div>
  );
}
