import { Container, Nav, Ancor, ListItem, List } from "./style";

import { useNavigate } from "react-router-dom";
import * as Switch from "@radix-ui/react-switch";

import Logo from "./images/logo.svg";
import { ContactButton } from "../ContactButton";

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="" />

      <Nav>
        <List>
          <ListItem>
            <Ancor href="#inicio">Inicio</Ancor>
          </ListItem>

          <ListItem>
            <Ancor>Sobre</Ancor>
          </ListItem>

          <ListItem>
            <Ancor>Serviços</Ancor>
          </ListItem>

          <ListItem>
            <Ancor>Portifólio</Ancor>
          </ListItem>

          <ListItem>
            <Switch.Root className="SwitchRoot">
              <Switch.Thumb className="SwitchThumb " />
            </Switch.Root>
          </ListItem>

          <ListItem>
            <ContactButton />
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
}
