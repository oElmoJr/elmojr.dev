import './styles.css';
import * as React from 'react';

import {
  linkedin,
  github,
  email,
  telegram,
  instagram,
  twitter,
} from './inports';
import profilePhoto from '../../assets/SquarePhoto.png';

import { useNavigate } from 'react-router-dom';
import Heading1 from '../../components/Typography/Heading1';
import Button from '../../components/Button';
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


export default function PageLinks() {
  const navigate = useNavigate();

  document.title = 'ElmoJr | Links';

    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
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
          <CloseIcon fontSize="small" />
        </IconButton>
      </>
    );


  return (
    <div className="pagelinks-main-container">
      <div className="pagelinks-heading-container">
        <img src={profilePhoto} alt="" />
        <div className="pagelinks-title-container">
          <Heading1>ElmoJr.</Heading1>
          <Button buttonClass={'active'}>Desenvolvedor Front-end</Button>
        </div>
      </div>

      <div className="pagelinks-links-container">
      
        <button  onClick={handleClick}>Portfólio</button>
        {/* <button disabled onClick={() => navigate('/portfolio')}>Portfólio</button> */}
      
    

        <div className="pagelinks-socialLinks-container">
          <a target="_blank" href="https://www.linkedin.com/in/elmojr/">
            <img src={linkedin} alt="Twiter icon" />
          </a>

          <a target="_blank" href="https://github.com/oElmoJr">
            <img src={github} alt="GitHub icon" />
          </a>

          <a target="_blank" href="mailto:elmojrdv@gmail.com">
            <img src={email} alt="Email icon" />
          </a>

          <a target="_blank" href="https://t.me/oElmoJr">
            <img src={telegram} alt="Telegram icon" />
          </a>

          <a target="_blank" href="https://instagram.com/_elmojr">
            <img src={instagram} alt="Instagram icon" />
          </a>

          <a target="_blank" href="https://twitter.com/_ElmoJr">
            <img src={twitter} alt="Twitter icon" />
          </a>
        </div>
      </div>
      
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={action}
    >
      <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
        Em Construção
     </Alert>
  </Snackbar>

    </div>
  );
}
