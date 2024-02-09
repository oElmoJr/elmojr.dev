import Button from '../../components/Button';
import SearchIcon from '@mui/icons-material/Search';
import Heading2 from '../../components/Typography/Heading2';
import './styles.css';
import Heading3 from '../../components/Typography/Heading3';
import Body from '../../components/Typography/Body';
import Tags from '../../components/Tags';

export default function Projects() {
  const projects = {
    nome: 'TaskTide',
    tags: [
      'web',
      'react',
      'node',
      'mongodb',
      'axios',
      'express',
      'fullcalendar',
      'nodemon',
      'styled-components',
      'uuid',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue sem nec libero volutpat, non sollicitudin odio consectetur.',
    links: {
      nome: 'GitHub',
      link: 'https://github.com/oElmoJr/TaskCalendar',
    },
    images: {
      icon: 'https://camo.githubusercontent.com/fb5819b9118e5524d2cc1984e6a04584464f4f3291c93710905fe2189000ab4d/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3831383937393635353034363236363838322f313135323337323738353030303232363936382f37396461363164382d623036362d346634322d623566322d6437333063376561396466312e706e67',
      cover:
        'https://github.com/oElmoJr/TaskCalendar/raw/main/assets/images/Anima%C3%A7%C3%A3o.gif',
    },
  };

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
        <div className="project">
          <div className="project-banner">
            <img className="project-icon" src={projects.images.icon} alt="" />
            <img className="project-cover" src={projects.images.cover} alt="" />
          </div>
          <div className="project-info">
            <Heading3>{projects.nome}</Heading3>
            <Tags id="primeiro" taglist={projects.tags} />
            <Body>{projects.description}</Body>
            <div className="project-links">
              <a href={projects.links.link} target="_blank">
                {projects.links.nome}
              </a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-banner">
            <img className="project-icon" src={projects.images.icon} alt="" />
            <img className="project-cover" src={projects.images.cover} alt="" />
          </div>
          <div className="project-info">
            <Heading3>{projects.nome}</Heading3>
            <Tags id="segundo" taglist={projects.tags} />
            <Body>{projects.description}</Body>
            <div className="project-links">
              <a href={projects.links.link} target="_blank">
                {projects.links.nome}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
