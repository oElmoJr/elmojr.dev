import { Container, Icon } from "./styles";

const linkedin = require('../../assets/social_Icons/linkedin.png');
const github = require('../../assets/social_Icons/github.png');
const email = require('../../assets/social_Icons/email.png');
const telegram = require('../../assets/social_Icons/telegram.png');
const instagram = require('../../assets/social_Icons/instagram.png');
const twitter = require('../../assets/social_Icons/twitter.png');

const social = [
    [
        "linkedin", //Name [0]
        "https://www.linkedin.com/in/elmojr/", //Link [1]
        linkedin //Icon [2]
    ],
    [
        "GitHub", //Name [0]
        "https://github.com/oElmoJr", //Link [1]
        github //Icon [2]
    ],
    [
        "Email", //Name [0]
        "mailto:elmojrdv@gmail.com", //Link [1]
        email //Icon [2]
    ],
    [
        "Telegram", //Name [0]
        "https://t.me/oElmoJr", //Link [1]
        telegram //Icon [2]
    ],
    [
        "Instagram", //Name [0]
        "https://instagram.com/_elmojr", //Link [1]
        instagram //Icon [2]
    ],
    [
        "Twitter", //Name [0]
        "https://twitter.com/_ElmoJr", //Link [1]
        twitter //Icon [2]
    ],

]

export default function Social() {
    return (
        <Container>
            {
                social.map((social, i) => (
                    <a href={social[1]} target="_blank" rel="noreferrer">
                        <Icon src={social[2]} alt="GitHub Icon" />
                    </a>
                ))
            }
        </Container>
    )
}