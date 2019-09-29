import React from "react";
import { Link } from "react-router-dom";
import { Icon, InlineIcon } from "@iconify/react";
import chevronRight from "@iconify/icons-bytesize/chevron-right";

import "./MainPage.css";
import BackgroundImage from "../../../public/landing-bg.png";

const MainPage = props => {
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => console.log(hover), [hover]);
  return (
    <div className="w-100 h-100" style={{ overflow: "hidden" }}>
      <div
        className={"w-100 h-100 bg " + (hover ? "hover" : "")}
        style={{
          background: `url(${BackgroundImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover"
        }}
      ></div>
      <div className="foreground">
        <h3 className="header">Инновации в будущем</h3>
        <Link
          to="/data"
          className="data-button"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Icon
            icon={chevronRight}
            className="mr-4 first"
            style={{ transform: "translate(-70px)", opacity: 0 }}
          />
          <span>Посмотреть статистику</span>
          <Icon icon={chevronRight} className="ml-4 last" />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
