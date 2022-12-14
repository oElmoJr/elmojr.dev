import { Container, Logo, Nav, NavItem } from "./style"

import { useNavigate } from "react-router-dom"

export default function NavBar() {
    
    const navigate = useNavigate();

    return (
        <Container>
            <Logo>ElmoJr<span>.</span></Logo>
            <Nav>
                <NavItem href="#inicio" >Inicio</NavItem>
                <NavItem>Sobre</NavItem>
                <NavItem>Projetos</NavItem>
                <NavItem onClick={() => navigate("/")}>Contato</NavItem>
            </Nav>
        </Container>
    )
}