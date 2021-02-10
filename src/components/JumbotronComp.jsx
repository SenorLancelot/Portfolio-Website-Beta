import React from "react";
import "../assets/stylesheets/jumbotron.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";
function JumbotronComp() {
  return (
    <Jumbotron fluid>
      <Container className="jumbo-container">
        <div className="ribbon">
          <div>
            <img src="pfp4-ConvertImage.jpg" alt="" />
          </div>

          <div className="jumbotext">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            blanditiis, incidunt officiis saepe dolores laudantium ratione
            perspiciatis vero omnis eveniet repudiandae ex, voluptatem error.
            Optio aut atque sit assumenda voluptate.
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
}

export default JumbotronComp;
