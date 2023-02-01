import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Title from "../Title";
import ContactButton from "../ContactButton";
import { Container, Nav } from "./style";
import * as Switch from "@radix-ui/react-switch";

interface Prop {
  toggleTheme(): void;
}

export default function Header({ toggleTheme }: Prop) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <Title text="ElmoJr." />
      <Nav>
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
          <li>
            <a>Serviços</a>
          </li>
          <li>
            <a>Portifólio</a>
          </li>

          <li>
            <Switch.Root
              className="SwitchRoot"
              onCheckedChange={toggleTheme}
              checked={title == "light"}
            >
              <Switch.Thumb className="SwitchThumb " />
            </Switch.Root>
          </li>

          <li>
            <ContactButton />
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
