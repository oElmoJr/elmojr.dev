import { Container, Button } from "./styles"
import Social from "../Social"

import { useNavigate } from "react-router-dom"

export default function Links() {

    const navigate = useNavigate();

    return (
        <Container>
            <Button onClick={() => navigate("/portifolio")} >Portfólio</Button>
            <Social />
        </Container>
    )
}
