import EmConstrucao from "../../components/EmConstrução";
import HomeSection from "../../components/HomeSection";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";
import { Scrollbars } from "react-custom-scrollbars";
import AboutSection from "../../components/AboutSection";

export default function Portifolio() {

    document.title = "ElmoJr | Portfolio";
    
    return (
        <Scrollbars>      
            <Container>
                <NavBar/>
                <HomeSection />
                <AboutSection />
                <EmConstrucao />
            </Container>
        </Scrollbars>
    )
}