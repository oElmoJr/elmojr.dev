import JobTitle from "../JobTitle";
import Title from "../Title";
import { Container, Image} from "./styles";

const profilePhoto = require('./images/profilephoto.png');

export default function Header() {
    return (
        <Container>
            <Image src={profilePhoto}/>            
            <Title text="ElmoJr."/>
            <JobTitle/>
        </Container>
    );
}