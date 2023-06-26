import "./styles.css";
import photo from "../../assets/Foto.png";

export default function About() {
  return (
    <div id="about" className="about-container section-padding">
      <img src={photo} alt="Uma foto minha" />
      <div className="about-info-container">
        <h2>
          Sobre mim<span className="yellow">:</span>
        </h2>
        <p>
          Sou estudante de Ciência da Computação na UNESA. Tenho um grande
          interesse pela tecnologia, especialmente pelo desenvolvimento web e
          frontend. Essa paixão me impulsionou a seguir esse caminho e aprimorar
          minhas habilidades.
          <br />
          <br />
          Durante minha jornada, tive a oportunidade de desenvolver vários
          projetos utilizando as principais linguagens e tecnologias para a web.
          Essas experiências me deram um conhecimento prático sólido,
          permitindo-me explorar diferentes abordagens e encontrar soluções
          criativas para desafios complexos.
          <br />
          <br />
          Estou sempre em busca de novas oportunidades para expandir meu
          conhecimento e aprimorar minhas habilidades. Sou entusiasta e adoro
          aprender e aplicar as últimas tendências e melhores práticas do setor.
        </p>
        <div className="about-link-container">
          <a href="#">Baixar CV</a>
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
