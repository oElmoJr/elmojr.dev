import React from "react";

import * as Popover from "@radix-ui/react-popover";
import Heading3 from "../Typography/Heading3";
import { icons } from "./icons";
import "./styles.css";

export default function TechCarousel() {
  const scrollers = document.querySelectorAll(".scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", `${true}`);
    });
  }

  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        {icons.map((icon) => (
          <li>
            <Popover.Root>
              <Popover.Trigger>
                <img src={icon.img} alt={`${icon.name}: ${icon.desc}`} />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="PopoverContent" sideOffset={5}>
                  <Heading3>{icon.name + ":"}</Heading3>
                  {icon.desc}
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </li>
        ))}

        {!window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? icons.map((icon) => (
              <li aria-hidden="true">
                <Popover.Root>
                  <Popover.Trigger>
                    <img src={icon.img} alt={`${icon.name}: ${icon.desc}`} />
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="PopoverContent" sideOffset={5}>
                      <Heading3>{icon.name + ":"}</Heading3>
                      {icon.desc}
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}
