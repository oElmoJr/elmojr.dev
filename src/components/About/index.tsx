import ProfilePiture from "../ProfilePiture";
import SectionTitle from "../SectionTitle";
import Text from "../Text";
import { Button, Container, AboutInfo } from "./style";

export default function About() {
  return (
    <Container>
      <ProfilePiture />
      <AboutInfo>
        <SectionTitle text="Sobre mim:" />

        <Text
          text="Oi meu nome é Elmo Junior, estou cursando ciências da
              computação na UNESA, sempre gostei de tecnologia e me apaixonei
              por desenvolvimento web e frontend, então decidi  continuar por
              esse caminho. ||
              Desenvolvi alguns projetos utilizando as principais linguagens e 
              tecnologias para desenvolvimento web."
        />
        <Button>Baixar CV</Button>
      </AboutInfo>
    </Container>
  );
}