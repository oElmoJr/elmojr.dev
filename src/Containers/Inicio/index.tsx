import JobTitle from "../../components/JobTitle";
import Title from "../../components/Title";
import { Container } from "./style";

export default function Inicio() {
  return (
    <Container id="inicio">
      <Title text="Oi, eu sou o ElmoJr." />
      <JobTitle />
    </Container>
  );
}
