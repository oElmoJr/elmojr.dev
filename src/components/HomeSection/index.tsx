import JobTitle from "../JobTitle";
import Title from "../Title";
import { Container } from "./style";

export default function HomeSection() {
    return (
        <Container className="inicio">
            <Title text="Oi, eu sou o ElmoJr." />
            <JobTitle />
        </Container>
    )
}