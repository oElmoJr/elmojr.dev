import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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

import Title from "../../components/Title";

import "swiper/css";
import "./styles.css";

export default function Tech() {
  return (
    <div id="tech" className="techa-container section-padding">
      <Title>Tecnologias que uso:</Title>

      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={10}
        loop={true}
        speed={2000}
        slidesPerView={4}
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 8,
          },
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={vscode} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={html} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={css} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={js} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ts} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={react} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={figma} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={canva} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={git} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={github} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bootstrap} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tailwind} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wordpress} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vscode} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={html} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={css} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={js} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ts} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={react} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={figma} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={canva} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={git} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={github} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bootstrap} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tailwind} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wordpress} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
