import React from "react";
import MainPage from "./MainPage/MainPage";
import DataPage from "./DataPage/DataPage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../public/logo.png";
import "./App.css";

const App = props => (
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
            <Nav.Link disabled href="#home">
              Детальный отчет (WIP)
            </Nav.Link>
            <Nav.Link disabled href="#link" className="ml-3">
              Выборочный отчет (WIP)
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/data" component={DataPage}></Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
