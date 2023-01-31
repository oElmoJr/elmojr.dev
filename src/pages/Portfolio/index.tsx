import Inicio from "../../components/Inicio";
import { Container } from "./styles";
import { Scrollbars } from "react-custom-scrollbars";
import About from "../../components/About";
import Header from "../../components/Header";

export default function Portifolio() {
  document.title = "ElmoJr | Portfolio";

  return (
    <Scrollbars>
      <Container>
        <Header />
        <Inicio />
        <About />
      </Container>
    </Scrollbars>
  );
}
