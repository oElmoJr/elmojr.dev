import Button from '../../components/Button';

import './styles.css';
import Heading2 from '../../components/Typography/Heading2';


import useRepositories from '../../hooks/useRepositories';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import { RepositoryMenu } from '../../components/RepositoryMenu/RepositoryMenu';

export default function Projects() {
  const { repositoriesInfo, error } = useRepositories();

  return (
    <div data-aos="zoom-in-up" className="section-padding" id="projects">
    <Heading2>Portifolio:</Heading2>

    <RepositoryMenu />

    <div className="projects-container">
      {error ? (
        <div>
          <p>Ocorreu um erro ao carregar os repositórios.</p>
          <Button click={() => window.location.reload()}>Tentar novamente</Button>
        </div>
      ) : repositoriesInfo.length > 0 ? ( 
        repositoriesInfo.map((repo) => <RepositoryCard key={repo.id} repo={repo} />)
      ) : ( 
        <p>Nenhum repositório encontrado.</p>
      )}
    </div>
  </div>
  );
}