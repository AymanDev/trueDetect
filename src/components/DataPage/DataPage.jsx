import React from "react";
import Charty from "react-charty";

import BackgroundImage from "../../../public/background.svg";
import "./DataPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

class DataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        type: "pie",
        showLegendTitle: false,
        showPreview: true,
        showRangeText: false,
        xAxisStep: 1,
        data: {
          x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          y0: [0, 1, 3, 0, 9, 0, 2, 6, 5, 0, 4],
          y1: [0, 1, 7, 0, 3, 0, 2, 6, 1, 3, 4],
          y2: [1, 1, 3, 5, 5, 0, 2, 2, 5, 5, 4],
          y3: [0, 1, 2, 0, 3, 5, 2, 6, 5, 0, 2],
          y4: [9, 1, 8, 3, 8, 0, 2, 6, 5, 0, 4]
        },
        names: {
          y0: "Дырявые",
          y1: "Норм",
          y2: "ничотак",
          y3: "уже лучше",
          y4: "заебумба"
        },
        colors: {
          y0: "#EC2049",
          y1: "#992049",
          y2: "#666B99",
          y3: "#00DB4F",
          y4: "#33FF33"
        }
      }
    };
  }

  render() {
    const LIGHT_THEME = {
      grid: { color: "#182D3B", alpha: 0.1, markerFillColor: "#fff" },
      legend: { background: "#fff", color: "#000" },
      preview: {
        maskColor: "#E2EEF9",
        maskAlpha: 0.6,
        brushColor: "#C0D1E1",
        brushBorderColor: "#fff",
        brushBorderAlpha: 1,
        handleColor: "#fff"
      },
      xAxis: { textColor: "#8E8E93", textAlpha: 1 },
      yAxis: { textColor: "#8E8E93", textAlpha: 1 },
      title: { color: "#000" },
      localRange: { color: "#000" },
      zoomedRange: { color: "#000" },
      zoomText: { color: "#108BE3" },
      zoomIcon: { fill: "#108BE3" },
      buttons: { color: "#fff" },
      pie: { textColor: "#fff" }
    };
    return (
      <div
        className="w-100 h-100"
        style={{
          background: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#0079C2"
        }}
      >
        <div className="container w-100 pt-3" style={{ height: "fit-content" }}>
          <div className="chart-custom d-flex justify-content-center mt-2">
            <Charty
              title=""
              style={{ width: "50%", marginTop: 20 }}
              {...this.state.data}
              theme={LIGHT_THEME}
              step={1}
              zoomStepX={1}
              startX={0}
              endX={10}
            ></Charty>
            <div className="legends d-flex flex-column justify-content-center">
              {Object.entries(this.state.data.names).map(([key, value]) => (
                <div className="legend" key={key}>
                  <FontAwesomeIcon
                    icon={faCircle}
                    color={this.state.data.colors[key]}
                  />
                  <span className="ml-1"> - {value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataPage;
