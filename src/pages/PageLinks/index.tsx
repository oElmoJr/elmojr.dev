import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Links from "../../components/Links";

export default function PageLinks() {

    document.title = "ElmoJr | Links";

    return (
        <Container>
            <Header />
            <Links />
        </Container>
    )
}