import Inicio from "../../components/Inicio";
import About from "../../components/About";
import Header from "../../components/Header";

import { Container } from "./styles";

import { Scrollbars } from "react-custom-scrollbars";

interface Prop {
  toggleTheme(): void;
}

export default function Portifolio({ toggleTheme }: Prop) {
  document.title = "ElmoJr | Portfolio";

  return (
    <Scrollbars>
      <Container>
        <Header toggleTheme={toggleTheme} />
        <Inicio />
        <About />
      </Container>
    </Scrollbars>
  );
}
