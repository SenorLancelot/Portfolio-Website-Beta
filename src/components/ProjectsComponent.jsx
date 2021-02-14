/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../assets/stylesheets/styles.css";
import image1 from "../assets/images/mask1.jfif";
import image2 from "../assets/images/python.jpg";
import image3 from "../assets/images/projectflow.jpg";

function ProjectsComponent() {
  return (
    <div className="projects-container">
      <div>
        <h3 className="projects-heading">Projects</h3>
      </div>
      <div className="project-tiles-container">
        <div className="project-tile">
          <div className="project-image p1">
            <img src={image1} className="image img-1" alt="" />
            <div className="middle-link-1 middle-links">
              <a href="https://github.com/SenorLancelot/FaceMaskDetection-MobileNetV2-">
                <img src="https://img.icons8.com/fluent/50/000000/github.png" />
              </a>
            </div>
          </div>
          <div className="middle-line">
            <div className="line"></div>
          </div>
          <div className="project-info">
            <div className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              possimus labore eius a, odio officiis, cupiditate in recusandae id
              aperiam dolor dolorem commodi eaque placeat explicabo est qui
              veritatis aut.
            </div>
          </div>
          <div className="bottom-line">
            <div className="line"></div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image p2">
            <img src={image2} className="image img-2" alt="" />
            <div className="middle-link-2 middle-links">
              <a href="https://github.com/SenorLancelot?tab=repositories">
                <img src="https://img.icons8.com/fluent/50/000000/github.png" />
              </a>
            </div>
          </div>
          <div className="middle-line">
            <div className="line"></div>
          </div>
          <div className="project-info">
            <div className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              possimus labore eius a, odio officiis, cupiditate in recusandae id
              aperiam dolor dolorem commodi eaque placeat explicabo est qui
              veritatis aut.
            </div>
          </div>
          <div className="bottom-line">
            <div className="line"></div>
          </div>
        </div>
        <div className="project-tile">
          <div className="project-image p3">
            <img src={image3} className="image img-3" alt="" />
            <div className="middle-link-3 middle-links">
              <a href="https://github.com/jayeshbhole/Project-Flow">
                <img src="https://img.icons8.com/fluent/50/000000/github.png" />
              </a>
            </div>
          </div>
          <div className="middle-line">
            <div className="line"></div>
          </div>
          <div className="project-info">
            <div className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              possimus labore eius a, odio officiis, cupiditate in recusandae id
              aperiam dolor dolorem commodi eaque placeat explicabo est qui
              veritatis aut.
            </div>
          </div>
          <div className="bottom-line">
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
