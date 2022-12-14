import { Text } from "./style"

interface titletext {
    text: string;
    dot: string
}

export default function Title(props:titletext) {
    return (
        <Text>{props.text}<span>{props.dot}</span></Text>
    )
}