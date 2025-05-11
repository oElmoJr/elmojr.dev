import "./styles.css";
import * as React from "react";

import { useNavigate } from "react-router-dom";
import { Alert, IconButton, Snackbar } from "@mui/material";
import {
  email,
  linkedin,
  github,
  telegram,
  instagram,
  threads,
  maratona,
  pinterest,
  spotify,
  bluesky,
  twitter,
  elmobot,
} from "./inports";

import profilePhoto from "../../assets/SquarePhoto.png";
import CloseIcon from "@mui/icons-material/Close";
import Heading1 from "../../components/Typography/Heading1";
import Button from "../../components/Button";
import Aos from "aos";


let redes = [
  {
    'image': email,
    'name': "Email",
    'url': "mailto:elmojrdv@gmail.com"
   },
  {
    'image': linkedin,
    'name': "LinkedIn",
    'url': "https://www.linkedin.com/in/elmojr/"
   },
  {
    'image': github,
    'name': "GitHub",
    'url': "https://github.com/oElmoJr"
   },
  {
    'image': telegram,
    'name': "Telegram",
    'url': "https://t.me/oElmoJr"
   },
  {
    'image': instagram,
    'name': "Instagram",
    'url': "https://instagram.com/_elmojr"
   },
  {
    'image': threads,
    'name': "Threads",
    'url': "https://www.threads.net/@_elmojr"
   },
   
]

let outrasRedes = [
  {
    'image': maratona,
    'name': "Maratona.app",
    'url': "https://maratona.social/@elmojr"
   },
  {
    'image': pinterest,
    'name': "Pinterest",
    'url': "https://pin.it/5XZ5RrboO"
   },
  {
    'image': spotify,
    'name': "Spotify",
    'url': "https://open.spotify.com/user/elmojunior35?si=7bbb377b42794199"
   },
  {
    'image': bluesky,
    'name': "Bluesky",
    'url': "https://bsky.app/profile/elmojr.dev"
   },
  {
    'image': twitter,
    'name': "Twitter",
    'url': "https://twitter.com/_ElmoJr"
   },
  {
    'image': elmobot,
    'name': "Elmobot",
    'url': "https://wa.me/558498470691?text=Oi,%20o%20que%20voce%20pode%20fazer?"
   },
   
]


export default function PageLinks() {
  const [show, setShow] = React.useState(true);
  
  function showMore() {
    document.querySelector(`#outrasRedes`)?.classList.toggle('hide');
    setShow(!show)
  }

  const navigate = useNavigate();

  document.title = "ElmoJr | Links";

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon className="closeIcon" fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div data-aos="zoom-in" className="pagelinks-main-container">
      <div className="pagelinks-heading-container">
        <img src={profilePhoto} alt="" />
        <div className="pagelinks-title-container">
          <Heading1>ElmoJr.</Heading1>
          <Button buttonClass={"active"}>Desenvolvedor FullStack</Button>
        </div>
      </div>

        <button onClick={() => navigate("/portfolio")}>Portfólio</button>
        {/* <button onClick={() => handleClick()} >Portfólio</button> */}
      
      <div className="pagelinks-links-container">
        <div className="pagelinks-socialLinks-container">
          {redes.map((e) => (
            <a target="_blank" href={e.url}>
              <img src={e.image} alt={`${e.name} Icon`} />
            </a>
          ))}
        </div>
        

        <div id="outrasRedes" className="hide pagelinks-socialLinks-container">
          {outrasRedes.map((e) => (
            <a className="links"  target="_blank" href={e.url}>
              <img src={e.image} alt={`${e.name} Icon`} />
            </a>
          ))}
        </div>
          <a  className="button" onClick={showMore}>{show? '▼ ver mais': '▲ ver menos' }</a>
        
        
        
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Em Construção 🚧
        </Alert>
      </Snackbar>
    </div>
  );
}
