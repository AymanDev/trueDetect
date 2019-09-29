import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Charty from "react-charty";
import { LIGHT_THEME } from "../themes";

const RangePage = props => {
  const [data, setData] = React.useState({
    x: [1, 2],
    y0: [1],
    y1: [500],
    y2: [2002],
    y3: [123]
  });
  const pieData = {
    type: "pie",
    data: data,
    names: {
      y0: "Пиздец",
      y1: "Ну уже лучше",
      y2: "Намана",
      y3: "Заебумба"
    },
    colors: {
      y0: "#FF0000",
      y1: "#BB3355",
      y2: "#EEEE00",
      y3: "#99FF00"
    }
  };
  return (
    <div className="w-100">
      <FontAwesomeIcon
        icon={faTimes}
        size="2x"
        onClick={props.onClose}
        className="m-2 shadow-lg float-right"
      />
      <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
        <Charty
          theme={LIGHT_THEME}
          title=""
          showPreview={false}
          showRangeText={false}
          showLegendTitle={false}
          startX={1}
          endX={1}
          stepX={1}
          theme={LIGHT_THEME}
          {...pieData}
        />
      </div>
    </div>
  );
};

export default RangePage;
