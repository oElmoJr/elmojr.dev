import { Container, Icon } from "./styles";

const linkedin = require('./images/linkedin.png');
const github = require('./images/github.png');
const email = require('./images/email.png');
const telegram = require('./images/telegram.png');
const instagram = require('./images/instagram.png');
const twitter = require('./images/twitter.png');

export default function Social() {
    return (
        <Container>
            <a href="https://www.linkedin.com/in/elmojr/" target="_blank" rel="noreferrer">
                <Icon src={linkedin} alt="LinkedIn Icon" />
            </a>

            <a href="https://github.com/oElmoJr" target="_blank" rel="noreferrer">
                <Icon src={github} alt="GitHub Icon" />
            </a>

            <a href="mailto:elmojrdv@gmail.com" target="_blank" rel="noreferrer">
                <Icon src={email} alt="Email Icon" />
            </a>

            <a href="https://t.me/oElmoJr" target="_blank" rel="noreferrer">
                <Icon src={telegram} alt="Telegram Icon" />
            </a>

            <a href="https://instagram.com/_elmojr" target="_blank" rel="noreferrer">
                <Icon src={instagram} alt="Instagram Icon" />
            </a>
            
            <a href="https://twitter.com/_ElmoJr" target="_blank" rel="noreferrer">
                <Icon src={twitter} alt="Twitter Icon" />
            </a>
        </Container>
    )
}