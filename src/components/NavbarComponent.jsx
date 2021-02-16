import { Button } from "react-bootstrap";
import React from "react";
// import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../assets/stylesheets/navbarstyle.css";

function NavbarComponent() {
  return (
    <Navbar bg="" variant="">
      {/* <div className="navbar-inner"> */}
      <div className="nav-left-items">
        <Navbar.Brand href="#home">
          <a href="/home">
            <h4 className="nav-name underline--magical">Amarendra Shendkar</h4>
          </a>
        </Navbar.Brand>
      </div>
      <div className="nav-right-items">
        <div id="navbar-button-1 nav-btn">
          <Button variant="">
            <a href="/education">
              <img
                className="nav-icon"
                src="https://img.icons8.com/color/48/000000/saving-book.png"
              />
            </a>
          </Button>
        </div>
        <div id="navbar-button-2 nav-btn">
          <Button variant="">
            <a href="/projects">
              <img
                className="nav-icon"
                src="https://img.icons8.com/fluent/48/000000/project.png"
              />
            </a>
          </Button>
        </div>
        <div id="navbar-button-3 nav-btn">
          <Button variant="">
            <a href="/contactme">
              <img
                className="nav-icon"
                src="https://img.icons8.com/fluent/48/000000/phone-office.png"
              />
            </a>
          </Button>
        </div>
      </div>
      {/* </div> */}
    </Navbar>
  );
}

export default NavbarComponent;
