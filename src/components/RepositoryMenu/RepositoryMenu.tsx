import "./RepositoryMenu.style.css";
import Scrollbars from "react-custom-scrollbars"

import {Search, FilterListOff} from '@mui/icons-material';
// import FilterListOffIcon from '@mui/icons-material/FilterListOff';

import Button from "../Button";

export const RepositoryMenu = (() => {

    let filterTags = ['React', 'Web', 'Aplicativo', 'Mobile', 'Design', 'E-commerce', 'api', 'back-end', 'front-end'];


    return (
        <div className="projects-menu">
        <Scrollbars style={{  height: 60 }}>
      <ul>
        
        <li><input type="search" placeholder="Pesquisar"/><Search /></li>
        <li><p><FilterListOff/></p></li>

        {filterTags.map((tag) => (
          <li key={tag}><Button>{tag}</Button></li>))
        }

      </ul>
        </Scrollbars>
    </div>
    )
})