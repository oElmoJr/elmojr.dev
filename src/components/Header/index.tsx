import { useContext } from "react";
import { ThemeContext } from "styled-components";

import Title from "../Title";
import { Button, Container, Nav } from "./style";
import * as Switch from "@radix-ui/react-switch";
import { useNavigate } from "react-router-dom";

interface Prop {
  toggleTheme(): void;
}

export default function Header({ toggleTheme }: Prop) {
  const { title } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <Container>
      <Title text="ElmoJr." />
      <Nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre" >Sobre</a></li>
          <li><a href="#servicos" >Serviços</a></li>
          <li><a href="#portifolio" >Portifólio</a></li>

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
            <Button onClick={() => navigate("/")}>Contatos</Button>{" "}
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
