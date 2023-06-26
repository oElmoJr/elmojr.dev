import "./styles.css";
import { Scrollbars } from "react-custom-scrollbars";

import {
  Header,
  About,
  Services,
  Tech,
  Projects,
  Footer,
} from "../../Containers/imports";
import NavBar from "../../components/NavBar";

export default function Portifolio() {
  document.title = "ElmoJr | Portifólio";

  return (
    <Scrollbars>
      <div className="potifolio-container">
        <NavBar />
        <Header />
        <About />
        <Services />
        <Tech />
        <Projects />
        <Footer />
      </div>
    </Scrollbars>
  );
}
