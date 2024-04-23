import React, { useEffect, useState } from "react";

import * as Popover from "@radix-ui/react-popover";
import Heading3 from "../Typography/Heading3";
import { icons } from "./icons";
import "./styles.css";

export default function TechCarousel() {
  const scrollers = document.querySelectorAll(".scroller");

  function addAnimation(bool: boolean) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", `${bool}`);
    });
  }
  
  const [atualiza, setAtualiza] = useState(Boolean)

  useEffect(()=> {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { 
      addAnimation(true)
    }
  }, [atualiza])
  
  

  return (
    <div className="scroller">
      <ul className="tag-list scroller__inner">
        {icons.map((icon) => (
          <li onLoad={() => (setAtualiza(true))} key={icon.name + "1"}>
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
              <li aria-hidden={true} key={icon.name + "2"}>
                <Popover.Root>
                  <Popover.Trigger>
                    <img src={icon.img} alt={`${icon.name}: ${icon.desc}` }  />
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

