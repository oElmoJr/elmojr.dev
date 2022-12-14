import Title from "../Title";
import { Container, Image, Subtitle } from "./styles";

const profilePhoto = require('./images/profilephoto.png');

export default function Header() {
    return (
        <Container>
            <Image src={profilePhoto}/>            
            <Title text="ElmoJr" dot="."/>
            <Subtitle>frontend developer</Subtitle>
        </Container>
    );
}