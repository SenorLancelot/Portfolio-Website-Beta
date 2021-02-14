import React from "react";
import "../assets/stylesheets/styles.css";

function ProjectsComponent() {
  return (
    <div className="projects-container">
      <div>
        <h3 className="projects-heading">Projects</h3>
      </div>
      <div className="project-tiles-container">
        <div className="project-tile">
          <div className="project-image p1">
            <img src="/8.jpg" className="image img-1" alt="" />
            <div className="middle-link-1 middle-links">
              <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
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
            <img src="/python.jpg" className="image img-2" alt="" />
            <div className="middle-link-2 middle-links">
              <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
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
            <img src="/projectflow.jpg" className="image img-3" alt="" />
            <div className="middle-link-3 middle-links">
              <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" />
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
