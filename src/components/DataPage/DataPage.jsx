import React from "react";
import Charty from "react-charty";

import BackgroundImage from "../../../public/background.png";
import "./DataPage.css";

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
          y0: [
            0,
            375827476,
            405950482,
            350025489,
            412599414,
            0,
            334756601,
            363440937,
            480825172,
            299653307,
            323532944
          ],
          y1: [
            228907497,
            272137386,
            228669559,
            267026649,
            278874194,
            297981308,
            318724501,
            349637236,
            285649087,
            368643283,
            447980568
          ],
          y2: [
            151729266,
            244595555,
            213973344,
            187934565,
            209883469,
            164612977,
            201036506,
            245573737,
            157334842,
            147887868,
            176581251
          ],
          y3: [
            292402573,
            191387857,
            174406757,
            188043157,
            131991738,
            199227435,
            155477200,
            153408009,
            162978825,
            87443925,
            94998758
          ],
          y4: [
            106796214,
            128751724,
            116501895,
            117123096,
            186711044,
            138499493,
            118634566,
            129240950,
            82084039,
            77766071,
            67312441
          ]
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
          </div>
        </div>
      </div>
    );
  }
}

export default DataPage;
