import './styles.css';
import photo from '../../assets/Foto.png';
import Heading2 from '../../components/Typography/Heading2';
import Button from '../../components/Button';
import Body from '../../components/Typography/Body';
import 'aos/dist/aos.css'

export default function About() {
  return (
    <div data-aos="zoom-in-down" id="about" className="about-container section-padding">
      <img src={photo} alt="Uma foto minha" />
      <div  className="about-info-container">
        <Heading2>Sobre mim:</Heading2>
        <div className='description-container'>
          <Body>
            Sou estudante de Ciência da Computação na UNESA. Tenho um grande
            interesse pela tecnologia, especialmente pelo desenvolvimento web e
            frontend. Essa paixão me impulsionou a seguir esse caminho e aprimorar
            minhas habilidades.
          </Body>
          <Body>
            Durante minha jornada, tive a oportunidade de desenvolver vários
            projetos utilizando as principais linguagens e tecnologias para a web.
            Essas experiências me deram um conhecimento prático sólido,
            permitindo-me explorar diferentes abordagens e encontrar soluções
            criativas para desafios complexos.
          </Body>
          <Body>
            Estou sempre em busca de novas oportunidades para expandir meu
            conhecimento e aprimorar minhas habilidades. Sou entusiasta e adoro
            aprender e aplicar as últimas tendências e melhores práticas do setor.
          </Body>
        </div>
        <div className="about-link-container">
          <Button buttonClass={'active'}>Baixar CV</Button>
          <a target="_blank" href="https://www.linkedin.com/in/elmojr/">
            LinkedIn
          </a>
          <a target="_blank" href="https://github.com/oElmoJr">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
