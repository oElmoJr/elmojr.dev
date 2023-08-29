import './styles.css';

interface TitleProps {
  children: string;
}

export default function Heading3({ children }: TitleProps) {
  let splitedText = children.split('');

  let formatedText = splitedText.map((e, i) => {
    if (e === '.') return <span key={`${e}-${i}`}>{e}</span>;
    if (e === ',') return <span key={`${e}-${i}`}>{e}</span>;
    if (e === ':') return <span key={`${e}-${i}`}>{e}</span>;

    return e;
  });

  return <h3>{formatedText}</h3>;
}
