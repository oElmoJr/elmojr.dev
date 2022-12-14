import { Text } from "./style"

interface titletext {
    text: string;
}

export default function Title(props:titletext) {

    let splitText = props.text.split("")
        
    let text = splitText.map(e => {
        if (e === ".") return <span key={e} >{e}</span>
        if (e === ",") return <span key={e} >{e}</span>
        if (e === ":") return <span key={e} >{e}</span>
        return e
    })

    return (
        <Text>{text}</Text>
    )
}