import { Container, Image, Title, Subtitle } from "./styles";

const profilePhoto = require('./images/profilephoto.png');

export default function Header() {
    return (
        <Container>
            <Image src={profilePhoto}/>            
            <Title>ElmoJr<span>.</span></Title>
            <Subtitle>frontend developer</Subtitle>
        </Container>
    );
}