import React from "react";
import MainPage from "./MainPage/MainPage";
import DataPage from "./DataPage/DataPage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { login } from "../requests";

import Logo from "../../public/logo.png";
import "./App.css";

class App extends React.Component {
  state = {
    token: null,
    show: false,
    username: null,
    password: null
  };

  componentDidMount() {
    const localToken = localStorage.getItem("token");
    if (localToken !== null) {
      this.setState({ token: localToken });
      return;
    }
    this.setState({ show: true });
  }

  tryToLogin = async event => {
    const result = await login(this.state.username, this.state.password);

    if (result.hasOwnProperty("error")) {
      console.error(result.error);
      localStorage.removeItem("token");
      return;
    }
    localStorage.setItem("token", result.access_token);
  };

  render() {
    return (
      <div className="w-100 h-100">
        <BrowserRouter>
          <Navbar className="menu" expand="sm">
            <Navbar.Brand>
              <Link to="/">
                <img src={Logo} width="200"></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto mt-2 ml-3">
                <Nav.Link>
                  <Link to="/data">Статистика</Link>
                </Nav.Link>
              </Nav>
              <Form inline>
                <a
                  onClick={() => this.setState({ show: !this.state.show })}
                  className="button"
                >
                  Авторизоваться
                </a>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Modal
            show={this.state.show}
            onHide={() => this.setState({ show: false })}
          >
            <Modal.Header closeButton>
              <Modal.Title>Авторизация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                novalidate
                onSubmit={e => {
                  this.tryToLogin(e);
                  e.preventDefault();
                }}
              >
                <Form.Group controlId="email">
                  <Form.Label>Адрес электронной почты</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Введите email"
                    required
                    onChange={e =>
                      this.setState({ username: e.target.value.trim() })
                    }
                    value={this.state.username}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Введите пароль"
                    required
                    onChange={e =>
                      this.setState({ password: e.target.value.trim() })
                    }
                    value={this.state.password}
                  />
                </Form.Group>
                <input
                  type="submit"
                  className="d-block mx-auto mt-4 button"
                  value="Авторизоваться"
                ></input>
              </Form>
            </Modal.Body>
          </Modal>
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/data" component={DataPage}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
