import { useNavigate } from "react-router-dom";
import { Button } from "./style";

export default function ContactButton() {
  const navigate = useNavigate();

  return <Button onClick={() => navigate("/")}>Contatos</Button>;
}
