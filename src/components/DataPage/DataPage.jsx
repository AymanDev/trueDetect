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
      {
        data: {
          x: [1, 2],
          y0: [20],
          y1: [30],
          y2: [10],
          y3: [4]
        }
      },
      {
        data: {
          x: [1, 2],
          y0: [50],
          y1: [4],
          y2: [6],
          y3: [4]
        }
      },
      {
        data: {
          x: [1, 2],
          y0: [3],
          y1: [1],
          y2: [40],
          y3: [20]
        }
      }
    ];
    // getAllSurveys().then(r => console.log(r));
    return (
      <div
        className="w-100 h-100"
        style={{
          background: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed"
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
                    <th>Требуется ручная проверка</th>
                    <th>Требуется замена трубопровода</th>
                    <th>В пределах нормы</th>
                    <th>Ошибка считывания датчика</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value, index) => (
                    <tr
                      key={index}
                      onClick={() => this.setState({ readingDataIndex: index })}
                    >
                      <td>{index}</td>
                      <td>{value.data.y0[0]}</td>
                      <td>{value.data.y1[0]}</td>
                      <td>{value.data.y2[0]}</td>
                      <td>{value.data.y3[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}

            {this.state.readingDataIndex !== null && (
              <RangePage
                data={data[this.state.readingDataIndex].data}
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
