import React from "react";

import { Container } from "./styles";
import Header from "../Header";
import Links from "../Links";

export default function Layout() {
    return (
        <Container>
            <Header />
            <Links />
        </Container>
    )
}