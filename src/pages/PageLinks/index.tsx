import { Container, ProfileContainer, TitleContainer, Button, LinkContainer} from "./styles";

import ProfilePiture from "../../components/ProfilePiture";
import Title from "../../components/Title";
import JobTitle from "../../components/JobTitle";
import SocialMediaLinks from "../../components/SocialMediaLinks"

import { useNavigate } from "react-router-dom"

export default function PageLinks() {
    
    const navigate = useNavigate();
    document.title = "ElmoJr | Links";

    return (
        <Container>
            <ProfileContainer>
                <ProfilePiture/>
                <TitleContainer>
                    <Title text="ElmoJr." />
                    <JobTitle/>
                </TitleContainer>
            </ProfileContainer>

            <LinkContainer>
                <Button onClick={() => navigate("/portfolio")} >Portfólio</Button>
                <SocialMediaLinks />
            </LinkContainer>

        </Container>
    )
}