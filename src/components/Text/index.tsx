import { Container } from "./style";

interface Text {
    text: string;
}

export default function Text(props: Text) {

    let id=0
    let splitText = props.text.split("")    
    let text1 = splitText.map(e => {
        id++
        if (e === "|") return <br key={id}/>
        return e
    })

    return (
        <Container>
            {text1}
        </Container>
    )
}