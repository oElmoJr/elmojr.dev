import "./styles.css";
import {
  linkedin,
  github,
  email,
  telegram,
  instagram,
  twitter,
} from "./inports";
import profilePhoto from "../../assets/SquarePhoto.png";

import { useNavigate } from "react-router-dom";

export default function PageLinks() {
  const navigate = useNavigate();

  document.title = "ElmoJr | Links";

  return (
    <div className="main-container">
      <div className="heading-container">
        <img src={profilePhoto} alt="" />
        <div className="title-container">
          <h1>
            ElmoJr<span>.</span>
          </h1>
          <div className="jobtitle-container">
            <p>FontEnd developer</p>
          </div>
        </div>
      </div>

      <div className="links-container">
        <button onClick={() => navigate("/portfolio")}>Portfólio</button>

        <div className="socialLinks-container">
          <a href="https://www.linkedin.com/in/elmojr/">
            <img src={linkedin} alt="Twiter icon" />
          </a>

          <a href="https://github.com/oElmoJr">
            <img src={github} alt="GitHub icon" />
          </a>

          <a href="mailto:elmojrdv@gmail.com">
            <img src={email} alt="Email icon" />
          </a>

          <a href="https://t.me/oElmoJr">
            <img src={telegram} alt="Telegram icon" />
          </a>

          <a href="https://instagram.com/_elmojr">
            <img src={instagram} alt="Instagram icon" />
          </a>

          <a href="https://twitter.com/_ElmoJr">
            <img src={twitter} alt="Twitter icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
