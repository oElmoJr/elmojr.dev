import Button from '../../components/Button';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';
import Heading2 from '../../components/Typography/Heading2';


import useRepositories from '../../hooks/useRepositories';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';

export default function Projects() {
  const { repositoriesInfo, error } = useRepositories();


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