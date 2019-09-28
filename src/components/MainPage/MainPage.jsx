import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./MainPage.css";
import BackgroundImage from "../../../public/landing-bg.png";

const MainPage = props => (
  <div className="w-100 h-100">
    <div
      className="w-100 h-100"
      style={{
        background: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    ></div>
    <div className="foreground">
      <h3 className="header">Инновации в будушем</h3>
      <Link to="/data" className="data-button">
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          className="mr-4 first"
          style={{ transform: "translate(-70px)", opacity: 0 }}
        />
        <span>Перейти в Dashboard</span>
        <FontAwesomeIcon icon={faAngleRight} size="2x" className="ml-4 last" />
      </Link>
    </div>
  </div>
);

export default MainPage;
