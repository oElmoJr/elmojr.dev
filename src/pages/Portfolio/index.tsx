import "./styles.css";
import { Scrollbars } from "react-custom-scrollbars";

import {
  Header,
  About,
  Services,
  Experience,
  Projects,
  Footer,
} from "../../Containers/imports";
import NavBar from "../../components/NavBar";

export default function Portifolio() {
  document.title = "ElmoJr | Portfolio";

  return (
    <Scrollbars>
      <div className="potifolio-container">
        <NavBar />
        <Header />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </Scrollbars>
  );
}
