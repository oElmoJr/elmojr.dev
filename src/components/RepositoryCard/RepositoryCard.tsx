// RepositoryCard.tsx
import { Repository } from '../../types/index'; // Defina a interface Repository em um arquivo separado
import Heading3 from '../../components/Typography/Heading3';
import Tags from '../../components/Tags';
import Body from '../../components/Typography/Body';
import Button from '../../components/Button';
import { sortTags } from '../../utils/sortTags';

interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <div className="project" key={repo.id}>
      <div className="project-banner">
        <img loading="lazy" className="project-icon" src={repo.images[1]} alt="" />
        <img loading="lazy" className="project-cover" src={repo.images[5]} alt="" />
      </div>
      <div className="project-info">
        <Heading3>{repo.name}</Heading3>
        <Tags id={repo.id.toString()} taglist={sortTags(repo.topics)} />
        <Body>{repo.description}</Body>
        <div className="project-links">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <Button>Github</Button>
          </a>
          <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
            <Button aria-label="Visitar página do repositório no GitHub">Visitar Página</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;