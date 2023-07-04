import React from "react";

import * as Popover from "@radix-ui/react-popover";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper";
import "swiper/css";

import { icons } from "./icons";
import Title from "../../components/Title";
import "./styles.css";

export default function Tech() {
  return (
    <div id="tech" className="techa-container section-padding">
      <Title>Tecnologias que uso:</Title>

      <Swiper
        className="mySwiper"
        modules={[Autoplay, A11y]}
        slidesPerView={4.5}
        spaceBetween={5}
        speed={3000}
        loop={true}
        preventClicks={false}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{ 768: { width: 768, slidesPerView: 8 } }}
      >
        {
          /* repeat 2x */
          [1, 2].map((repetiçao, i) => (
            <React.Fragment key={repetiçao + i}>
              {
                /* icons */
                icons.map((e) => (
                  <SwiperSlide key={e.name + i}>
                    <Popover.Root>
                      <Popover.Trigger>
                        <img src={e.img} alt={`${e.name}: ${e.desc}`} />
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content
                          className="PopoverContent"
                          sideOffset={5}
                        >
                          <h3>
                            {e.name}
                            <span className="yellow">:</span>
                          </h3>
                          {e.desc}
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  </SwiperSlide>
                ))
              }
            </React.Fragment>
          ))
        }
      </Swiper>
    </div>
  );
}
