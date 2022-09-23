import { Container } from "./styles";

import { useNavigate } from "react-router-dom"

export default function Portifolio() {

    const navigate = useNavigate()
    
    return (
        <Container>
            <h1>🚧 em construção 🚧</h1>
            <button onClick={() => navigate("/")} >Voltar</button>
        </Container>
    )
}