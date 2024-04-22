import Button from '../../components/Button';
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';
import Heading2 from '../../components/Typography/Heading2';


export default function Projects() {


  return (
    <div className="section-padding" id="projects">
      <Heading2>Portifolio:</Heading2>

      <div className="projects-menu">
        <ul>
          <li>
            <Button buttonClass={'active'}>Todos</Button>
          </li>
          <li>
            <Button>Web</Button>
          </li>
          <li>
            <Button>Mobile</Button>
          </li>
          <li>
            <Button>Design</Button>
          </li>
          <li>
            <input type="search" placeholder="Pesquisar" />
            <SearchIcon />
          </li>
        </ul>
      </div>

      <div className="projects-container">
        {"projeto do portifolio estatico"}

      
      </div>
    </div>
  );
}
