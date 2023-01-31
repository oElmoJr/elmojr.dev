import { Container, Nav } from "./style";
import { ContactButton } from "../ContactButton";

import Logo from "./images/logo.svg";
import * as Switch from "@radix-ui/react-switch";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo ElmoJr" />
      
      <Nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a>Sobre</a></li>
          <li><a>Serviços</a></li>
          <li><a>Portifólio</a></li>
          <li>
            <Switch.Root className="SwitchRoot">
              <Switch.Thumb className="SwitchThumb " />
            </Switch.Root>
          </li>
          <li><ContactButton /></li>
        </ul>
      </Nav>
    </Container>
  );
}
