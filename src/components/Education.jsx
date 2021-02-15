import React from "react";
import image from "../assets/images/IIITP_logo.jpg"
function Education() {
  return (
    <div className="education-container">
      <div className="college">
        <div className="college-logo">
            <img src={image} alt=""/>
        </div>
        <div className="college-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          distinctio cumque eaque, vitae dolor ab voluptate illum beatae
          deserunt dignissimos eum tenetur modi quis porro facere consectetur
          odio maiores!
        </div>
      </div>

      <div className="certifications">
          <div >
              <h4 className="certification-heading">Certifications</h4>
          </div>
          <div className="certification-cards">

          </div>
      </div>
    </div>
  );
}

export default Education;
