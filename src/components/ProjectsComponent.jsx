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
              <div className="project-image"></div>
              <div className="middle-line">
                  <div className="line"></div>
              </div>
              <div className="project-info"></div>
              <div className="bottom-line">
                  <div className="line"></div>
              </div>
          </div>
          <div className="project-tile">
              <div className="project-image"></div>
              <div className="middle-line">
                  <div className="line"></div>
              </div>
              <div className="project-info"></div>
              <div className="bottom-line">
                  <div className="line"></div>
              </div>
          </div>
          <div className="project-tile">
              <div className="project-image"></div>
              <div className="middle-line">
                  <div className="line"></div>
              </div>
              <div className="project-info"></div>
              <div className="bottom-line">
                  <div className="line"></div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
