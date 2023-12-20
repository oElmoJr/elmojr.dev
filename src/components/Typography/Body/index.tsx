import './styles.css';

type BodyProps = {
  children: String;
};

export default function Body({ children }: BodyProps) {
  return <p>{children}</p>;
}
