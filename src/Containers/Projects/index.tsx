import Heading2 from '../../components/Heading2';
import './styles.css';

export default function Projects() {
  return (
    <div className="section-padding" id="projects">
      <Heading2>Portifolio:</Heading2>
      <div className="projects-menu">
        <ul>
          <li>
            <button className="active">Todos</button>
          </li>
          <li>
            <button>Web</button>
          </li>
          <li>
            <button>Mobile</button>
          </li>
          <li>
            <button>Design</button>
          </li>
          <li>
            <input type="search" placeholder="Pesquisar" />
          </li>
        </ul>
      </div>

      <div className="projects-wrapper">
        <div className="project">
          <div className="project-banner">
            <div className="project-icon"></div>
          </div>
          <div className="project-info">
            <h3>Task calendar</h3>
            <div className="project-tags">
              <p className="tag1">WebSite</p>
              <p className="tag2">React</p>
              <p className="tag3">Node.js</p>
            </div>
            <p className="project-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              quidem.
            </p>
            <div className="links">
              <a>GitHub</a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-banner">
            <div className="project-icon"></div>
          </div>
          <div className="project-info">
            <h3>Task calendar</h3>
            <div className="project-tags">
              <p className="tag1">WebSite</p>
              <p className="tag2">React</p>
              <p className="tag3">Node.js</p>
            </div>
            <p className="project-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              quidem.
            </p>
            <div className="links">
              <a>GitHub</a>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-banner">
            <div className="project-icon"></div>
          </div>
          <div className="project-info">
            <h3>Task calendar</h3>
            <div className="project-tags">
              <p className="tag1">WebSite</p>
              <p className="tag2">React</p>
              <p className="tag3">Node.js</p>
            </div>
            <p className="project-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              quidem.
            </p>
            <div className="links">
              <a>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
