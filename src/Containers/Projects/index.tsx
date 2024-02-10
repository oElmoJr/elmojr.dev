import Button from '../../components/Button';
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';
import Heading2 from '../../components/Typography/Heading2';
import Heading3 from '../../components/Typography/Heading3';
import Body from '../../components/Typography/Body';
import Tags from '../../components/Tags';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Projects() {
  const exempleProjects = {
    images: {
      icon: 'https://camo.githubusercontent.com/fb5819b9118e5524d2cc1984e6a04584464f4f3291c93710905fe2189000ab4d/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3831383937393635353034363236363838322f313135323337323738353030303232363936382f37396461363164382d623036362d346634322d623566322d6437333063376561396466312e706e67',
      cover:
        'https://github.com/oElmoJr/TaskCalendar/raw/main/assets/images/Anima%C3%A7%C3%A3o.gif',
    },
  };

  const [erro, setErro] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/oelmojr/repos`)
      .then((Response: any) => {
        const repositories = Response.data;
        const repositoriesInfo: any = [];

        const filteredRepositories = repositories.filter((repo: any) => {
          return repo.topics.includes('portfolio');
        });

        filteredRepositories.map((repository: any) => {
          repositoriesInfo.push(repository);
          return '';
        });

        setProjects(repositoriesInfo);
        setErro(false);
      })
      .catch((err: any) => {
        setErro(true);
      });
  }, []);

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
        {projects.map((project: any) => {
          return (
            <div key={project.id} className="project">
              <div className="project-banner">
                <img
                  className="project-icon"
                  src={exempleProjects.images.icon}
                  alt=""
                />
                <img
                  className="project-cover"
                  src={exempleProjects.images.cover}
                  alt=""
                />
              </div>
              <div className="project-info">
                <Heading3>{project.name}</Heading3>
                <Tags id={project.node_id} taglist={project.topics} />
                <Body>{project.description}</Body>
                <div className="project-links">
                  <a href={project.html_url} target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
