import './styles.css';

import UXDESIGN from './assets/UX-DESIGN.png';
import FRONTEND from './assets/FRONT-END.png';
import RESPONSIVIDADE from './assets/RESPONSIVIDADE.png';
import ACESSIBILIDADE from './assets/ACESSIBILIDADE.png';

import ServiceCard from '../../components/ServiceCard';
import Tech from '../../components/TechCarousel';
import Heading2 from '../../components/Typography/Heading2';
import Heading3 from '../../components/Typography/Heading3';

export default function Services() {
  return (
    <div id="services" className="services-container section-padding">
      <Heading2>Serviços:</Heading2>

      <div className="services-cards-container">
        <ServiceCard
          cardImage={UXDESIGN}
          title="UI/UX DESIGN"
          description="processo de criar experiências digitais funcionais e atrativas."
        />
        <ServiceCard
          cardImage={FRONTEND}
          title="FRONT-END"
          description="Desenvolvimento da interface visível ao usuário em um site ou aplicativo."
        />
        <ServiceCard
          cardImage={RESPONSIVIDADE}
          title="RESPONSIVIDADE"
          description="Adaptação do design para diferentes dispositivos e telas."
        />
        <ServiceCard
          cardImage={ACESSIBILIDADE}
          title="ACESSIBILIDADE"
          description="Garantia de que produtos digitais sejam usáveis para todos."
        />
      </div>

      <div>
        <Heading3>Experiencias:</Heading3>
        <Tech />
      </div>
    </div>
  );
}
