import { Text } from "./style";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  let splitedText = text.split("");

  let formatedText = splitedText.map((e, i) => {
    if (e === ".") return <span key={`${e}-${i}`}>{e}</span>;
    if (e === ",") return <span key={`${e}-${i}`}>{e}</span>;
    if (e === ":") return <span key={`${e}-${i}`}>{e}</span>;
    return e;
  });

  return <Text>{formatedText}</Text>;
}
