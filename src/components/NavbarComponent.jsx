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
            
            Amarendra Shendkar
          </Navbar.Brand>
        </div>
        <div className="nav-right-items">
          <div id="navbar-button-1">
          <Button variant="">1</Button>
          </div>
          <div id="navbar-button-2">
          <Button variant="">2</Button>
          </div>
          <div id="navbar-button-3">
          <Button variant="">3</Button>
          </div>
        </div>
      {/* </div> */}
    </Navbar>
  );
}

export default NavbarComponent;
