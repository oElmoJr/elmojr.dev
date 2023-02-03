import { Container } from "./style";

interface Text {
  text: string;
}

export default function Text({ text }: Text) {
  let id = 0;
  let splitedText = text.split("");

  let formatedText = splitedText.map((e) => {
    id++;
    if (e === "|") return <br key={id} />;
    return e;
  });

  return <Container>{formatedText}</Container>;
}
