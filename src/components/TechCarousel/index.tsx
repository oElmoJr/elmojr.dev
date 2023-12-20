import React from 'react';

import * as Popover from '@radix-ui/react-popover';
import Heading3 from '../Typography/Heading3';
import { icons } from './icons';
import './styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper';
import 'swiper/css';

export default function TechCarousel() {
  return (
    <div className="techa-container ">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, A11y]}
        slidesPerView={6}
        spaceBetween={60}
        speed={3000}
        loop={true}
        preventClicks={false}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{ 768: { width: 768, slidesPerView: 10 } }}
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
                          <Heading3>{e.name + ':'}</Heading3>
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
