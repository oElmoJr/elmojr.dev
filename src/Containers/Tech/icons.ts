import vscode from "./assets/vscode-original 1.svg";
import html from "./assets/html5-original 1.svg";
import css from "./assets/css3-original 1.svg";
import js from "./assets/javascript-original 1.svg";
import ts from "./assets/typescript-original 1.svg";
import react from "./assets/react-original 2.svg";
import figma from "./assets/figma-original 1.svg";
import canva from "./assets/canva-original 1.svg";
import git from "./assets/git-original 1.svg";
import github from "./assets/github-original 1.svg";
import bootstrap from "./assets/bootstrap-original 1.svg";
import tailwind from "./assets/tailwindcss-plain 1.svg";
import wordpress from "./assets/wordpress-plain 1.svg";

interface ITech {
  name: string;
  img: any;
  desc: string;
}

export const icons: ITech[] = [
  {
    name: "VSCode",
    img: vscode,
    desc: "Um poderoso editor de código-fonte desenvolvido pela Microsoft, conhecido por sua interface intuitiva, extensibilidade e suporte a várias linguagens de programação.",
  },
  {
    name: "HTML",
    img: html,
    desc: "Linguagem de marcação usada para estruturar e exibir o conteúdo de páginas da web, fornecendo a base para a criação de sites.",
  },
  {
    name: "CSS",
    img: css,
    desc: "Linguagem de estilo em cascata utilizada para definir a aparência e o layout de elementos HTML em páginas da web, permitindo a personalização visual.",
  },
  {
    name: "JavaScript",
    img: js,
    desc: "Uma linguagem de programação de alto nível, amplamente utilizada para criar interatividade e dinamismo em páginas da web, além de ser suportada em outros ambientes também.",
  },
  {
    name: "TypeScript ",
    img: ts,
    desc: "Uma linguagem de programação que se baseia no JavaScript, mas com recursos adicionais como tipagem estática, facilitando o desenvolvimento de aplicativos mais robustos e escaláveis.",
  },
  {
    name: "React",
    img: react,
    desc: "Uma biblioteca JavaScript de código aberto usada para criar interfaces de usuário interativas e reutilizáveis. É amplamente adotada para o desenvolvimento de aplicativos web e móveis.",
  },
  {
    name: "Figma",
    img: figma,
    desc: "Uma ferramenta de design de interface de usuário (UI) baseada em nuvem, que permite criar protótipos interativos, colaborar com equipes e criar designs visualmente atraentes.",
  },
  {
    name: "Canva",
    img: canva,
    desc: "Uma plataforma online de design gráfico que permite criar de forma fácil e rápida gráficos, banners, convites, postagens em mídias sociais e outros materiais visuais.",
  },
  {
    name: "Git",
    img: git,
    desc: "Um sistema de controle de versão distribuído usado para rastrear mudanças em arquivos e coordenar o trabalho colaborativo em projetos de desenvolvimento de software.",
  },
  {
    name: "GitHub",
    img: github,
    desc: "Uma plataforma de hospedagem de código-fonte baseada em Git, que fornece recursos adicionais, como controle de versão, colaboração e integração contínua, facilitando o desenvolvimento colaborativo de software.",
  },
  {
    name: "Bootstrap",
    img: bootstrap,
    desc: "Um framework de código aberto para desenvolvimento web que oferece componentes e estilos pré-construídos, agilizando a criação de interfaces responsivas e modernas.",
  },
  {
    name: "Tailwind",
    img: tailwind,
    desc: "Um framework de CSS utilitário que fornece classes pré-definidas para estilização rápida de elementos HTML, permitindo um desenvolvimento mais ágil e flexível.",
  },
  {
    name: "WordPress",
    img: wordpress,
    desc: "Um sistema de gerenciamento de conteúdo (CMS) popular e de código aberto, amplamente utilizado para criar e gerenciar websites, oferecendo uma interface amigável e personalizável.",
  },
];
