import Button from '../../components/Button';
import Heading0 from '../../components/Typography/Heading0';
import './styles.css';


export default function Header() {

  return (
    <div id="home" className="header-container" data-aos="zoom-in">
      <div  className="header-title-container" >
        <Heading0 >Oi, eu sou o ElmoJr.</Heading0>
        <Button buttonClass={'active'}>Desenvolvedor Front-end</Button>
      </div>
    </div>
  );
}
