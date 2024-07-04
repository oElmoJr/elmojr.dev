import Button from '../../components/Button';
import SearchIcon from '@mui/icons-material/Search';

import './styles.css';
import Heading2 from '../../components/Typography/Heading2';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Projects() {
  const [error, setErro] = useState(Boolean)

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/oelmojr/repos`)
      .then((Response: any) => {
        const repositories = Response.data;
        
        const repositoriesInfo = [{}];

        const filteredRepositories = repositories.filter((repo: any) => {
          return repo.topics.includes('portfolio');
        });

        filteredRepositories.map((repository: any) => {
          repositoriesInfo.push({
            name: repository.name,
            id: repository.id,
            topics: repository.topics,
            description: repository.description,
            readme: "",
        });
        });

        console.log(repositoriesInfo)

      }).catch((err: any) => {
        setErro(true);
      });
  
    }, [""]);

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
        {/* {"projeto do portifolio estatico"} */}

        {/* <div className="project">
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
            </div> */}
      
      </div>
    </div>
  );
}
