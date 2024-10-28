import Button from '../../components/Button';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';
import Heading2 from '../../components/Typography/Heading2';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Heading3 from '../../components/Typography/Heading3';
import Tags from '../../components/Tags';
import Body from '../../components/Typography/Body';

// Definindo a interface para o repositório
interface Repository {
  name: string;
  id: number;
  topics: string[];
  description: string;
  readme: string;
  html_url: string;
  images: string[]; // Novo campo para armazenar as URLs das imagens
}

export default function Projects() {
  const [error, setError] = useState<boolean>(false);
  const [repositoriesInfo, setRepositoriesInfo] = useState<Repository[]>([]);

  useEffect(() => {
    axios
      .get<Repository[]>(`https://api.github.com/users/oelmojr/repos`)
      .then(async (response: AxiosResponse<Repository[]>) => {
        const repositories = response.data;

        // Filtrar repositórios com base nos tópicos
        const filteredRepositories = repositories.filter((repo) => 
          repo.topics.includes('portfolio')
        );

        // Fazer uma segunda chamada para obter o README de cada repositório
        const updatedRepositories = await Promise.all(
          filteredRepositories.map(async (repository) => {
            try {
              const readmeResponse = await axios.get(
                `https://api.github.com/repos/oElmoJr/${repository.name}/contents/README.md`
              );
              const readmeContent = readmeResponse.data.content;
              const decodedReadme = atob(readmeContent);

              // Extrair URLs de imagens do README
              const imageUrls = Array.from(
                decodedReadme.matchAll(/<img[^>]*src=["']([^"']+)["'][^>]*>/g),
                match => match[1]
              );

              return {
                ...repository,
                readme: decodedReadme,
                images: imageUrls, // Armazenar URLs das imagens no array
              };
            } catch (err) {
              console.error(`Erro ao carregar o README para o repositório ${repository.name}`);
              return {
                ...repository,
                readme: "README não encontrado.",
                images: [],
              };
            }
          })
        );

        // Atualizar o estado com o array de repositórios e conteúdo de README
        setRepositoriesInfo(updatedRepositories);
      })
      .catch((err) => {
        setError(true);
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
      {/* <div className="project" key={repositoriesInfo[2].id}>
          <div className="project-banner">
            <img
              className="project-icon"
              src={repositoriesInfo[2].images[1]}
              alt=""
            />
            <img
              className="project-cover"
              src={repositoriesInfo[2].images[4]} // Exibe a primeira imagem ou um placeholder
              alt=""
            />
          </div>
          <div className="project-info">
            <Heading3>{repositoriesInfo[2].name}</Heading3>
            <Tags id={repositoriesInfo[2].id.toString()} taglist={repositoriesInfo[2].topics} />
            <Body>{repositoriesInfo[2].description}</Body>
            <div className="project-links">
              <a href={repositoriesInfo[2].html_url} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
             <p>{repo.readme}</p> 
            </div>
          </div>
        </div> */}

        {repositoriesInfo.length > 0 ? (
          repositoriesInfo.map((repo) => (
            <div className="project" key={repo.id}>
              <div className="project-banner">
                <img
                  className="project-icon"
                  src={repo.images[1]}
                  alt=""
                />
                <img
                  className="project-cover"
                  src={repo.images[4]} // Exibe a primeira imagem ou um placeholder
                  alt=""
                />
              </div>
              <div className="project-info">
                <Heading3>{repo.name}</Heading3>
                <Tags id={repo.id.toString()} taglist={repo.topics} />
                <Body>{repo.description}</Body>
                <div className="project-links">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  {/* <p>{repo.readme}</p> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum repositório encontrado.</p>
        )}

      </div>
    </div>
  );
}
