import JobTitle from "../JobTitle";
import ProfilePiture from "../ProfilePiture";
import Title from "../Title";
import { Container} from "./styles";


export default function Header() {
    return (
        <Container>
            <ProfilePiture/>
            <Title text="ElmoJr."/>
            <JobTitle/>
        </Container>
    );
}