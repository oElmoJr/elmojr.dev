import { Title } from "./style";

interface TitleProps {
  text: string;
}

export default function SectionTitle({ text }: TitleProps) {
  let splitedText = text.split("");

  let formatedText = splitedText.map((e, i) => {
    if (e === ".") return <span key={`${e}-${i}`}>{e}</span>;
    if (e === ",") return <span key={`${e}-${i}`}>{e}</span>;
    if (e === ":") return <span key={`${e}-${i}`}>{e}</span>;
    return e;
  });

  return <Title>{formatedText}</Title>;
}
