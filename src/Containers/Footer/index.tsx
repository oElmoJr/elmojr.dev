import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Heading2 from '../../components/Typography/Heading2';
import './styles.css';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="section-padding">
      <div className="footer">
        <div className="footer-container">
          <Heading2>Vamos conversar sobre o seu projeto?</Heading2>
          <Button
            buttonClass={'active'}
            click={() => {
              navigate('/');
            }}
          >
            Contatos
          </Button>
        </div>
      </div>
    </div>
  );
}
