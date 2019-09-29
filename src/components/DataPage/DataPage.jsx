import React from "react";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

import BackgroundImage from "../../../public/background.jpg";
import "./DataPage.css";
import RangePage from "../RangePage/RangePage";
import { getAllSurveys } from "../../requests";

class DataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readingDataIndex: null
    };
  }

  render() {
    const data = [
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" },
      { hz1: "D", hz2: "U", hz3: "M", hz4: "B" }
    ];
    getAllSurveys().then(r => console.log(r));
    return (
      <div
        className="w-100"
        style={{
          background: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "max(device-height, fit-content)"
        }}
      >
        <div className="container w-100 py-3" style={{ height: "fit-content" }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Главная</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item
              active={this.state.readingDataIndex === null}
              onClick={() => this.setState({ readingDataIndex: null })}
            >
              Статистика
            </Breadcrumb.Item>
            {this.state.readingDataIndex !== null && (
              <Breadcrumb.Item active>
                Информация о индексе: {this.state.readingDataIndex}
              </Breadcrumb.Item>
            )}
          </Breadcrumb>
          <div className="chart-custom d-flex justify-content-center mt-2">
            {this.state.readingDataIndex === null && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Hz1</th>
                    <th>Hz2</th>
                    <th>Hz3</th>
                    <th>Hz4</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value, index) => (
                    <tr
                      key={index}
                      onClick={() => this.setState({ readingDataIndex: index })}
                    >
                      <td>{index}</td>
                      <td>{value.hz1}</td>
                      <td>{value.hz2}</td>
                      <td>{value.hz3}</td>
                      <td>{value.hz4}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}

            {this.state.readingDataIndex !== null && (
              <RangePage
                index={this.state.readingDataIndex}
                onClose={() => this.setState({ readingDataIndex: null })}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default DataPage;
