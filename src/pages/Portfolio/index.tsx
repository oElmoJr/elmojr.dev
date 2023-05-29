import Inicio from "../../Containers/Inicio";
import About from "../../Containers/About";
import Header from "../../Containers/Header";

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
