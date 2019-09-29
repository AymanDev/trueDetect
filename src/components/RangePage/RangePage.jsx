import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Charty from "react-charty";
import { LIGHT_THEME } from "../themes";

const RangePage = ({ data, onClose }) => {
  const pieData = data
    ? {
        type: "pie",
        data: data,
        names: {
          y0: "Требуется ручная проверка",
          y1: "Требуется замена трубопровода",
          y2: "В пределах нормы",
          y3: "Ошибка считывания датчика"
        },
        colors: {
          y0: "#FF0000",
          y1: "#BB3355",
          y2: "#55DD22",
          y3: "#0079C2"
        }
      }
    : null;
  return (
    <div className="w-100">
      <FontAwesomeIcon
        icon={faTimes}
        size="2x"
        onClick={onClose}
        className="m-2 shadow-lg float-right"
      />
      <div className="mx-3 d-flex flex-column justify-content-center align-items-center">
        {pieData !== null && (
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
        )}
        {pieData === null && (
          <h1 className="text-muted p-3">Нет информации для анализа</h1>
        )}
      </div>
    </div>
  );
};

export default RangePage;
