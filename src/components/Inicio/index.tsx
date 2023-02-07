import JobTitle from "../JobTitle";
import Title from "../Title";
import { Container } from "./style";

export default function Inicio() {
  return (
    <Container id="inicio">
      <Title text="Oi, eu sou o ElmoJr." />
      <JobTitle />
    </Container>
  );
}
