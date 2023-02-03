import JobTitle from "../JobTitle";
import Title from "../Title";
import { Container } from "./style";

export default function Inicio() {
  return (
    <Container id="inicio">
      <h1>
        <Title text="Oi, eu sou o ElmoJr." />
      </h1>
      <JobTitle />
    </Container>
  );
}
