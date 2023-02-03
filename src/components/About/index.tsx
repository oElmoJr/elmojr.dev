import ProfilePiture from "../ProfilePiture";
import Text from "../Text";
import Title from "../Title";
import { Button, Container, AboutInfo } from "./style";

export default function About() {
  return (
    <Container>
      <ProfilePiture />
      <AboutInfo>
        <h2>
          <Title text="Sobre mim:" />
        </h2>
        <Text
          text="Oi meu nome é Elmo Junior, estou cursando ciências da
              computação na UNESA, sempre gostei de tecnologia e me apaixonei
              por desenvolvimento web e frontend, então decidi  continuar por
              esse caminho. ||
              Desenvolvi alguns projetos utilizando as principais linguagens e 
              tecnologias para desenvolvimento web."
        />
        <Button href="">Baixar CV</Button>
      </AboutInfo>
    </Container>
  );
}
