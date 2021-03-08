import { Button } from "react-bootstrap";
import React from "react";
// import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../assets/stylesheets/navbarstyle.css";
import {Link} from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar bg="" variant="">
      {/* <div className="navbar-inner"> */}
      <div className="nav-left-items">
        <Navbar.Brand href="#home">
          <Link to="/home">
            <h4 className="nav-name underline--magical">Amarendra Shendkar</h4>
          </Link>
        </Navbar.Brand>
      </div>
      <div className="nav-right-items">
        <div id="navbar-button-1 nav-btn">
          <Button variant="">
            <Link to="/education">
              <img
                className="nav-icon"
                src="https://img.icons8.com/color/48/000000/saving-book.png"
               />
            </Link>
          </Button>
        </div>
        <div id="navbar-button-2 nav-btn">
          <Button variant="">
            <Link to="/projects">
              <img
                className="nav-icon"
                src="https://img.icons8.com/fluent/48/000000/project.png"
              />
            </Link>
          </Button>
        </div>
        <div id="navbar-button-3 nav-btn">
          <Button variant="">
            <Link to="/contactme">
              <img
                className="nav-icon"
                src="https://img.icons8.com/fluent/48/000000/phone-office.png"
              />
            </Link>
          </Button>
        </div>
      </div>
      {/* </div> */}
    </Navbar>
  );
}

export default NavbarComponent;
