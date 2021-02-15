import React from "react";
import image from "../assets/images/IIITP_logo.jpg";
import "../assets/stylesheets/styles.css";
import CertificationCard from "./CertificationCard";
import image1 from "../assets/images/Univ MI.jpg";
import image2 from "../assets/images/unnamed.jpg";
import image3 from "../assets/images/stanford-athletics.jpg";
import image4 from "../assets/images/deeplearning.png";
function Education() {
  return (
    <div className="education-container">
      <div className="college">
        <div className="college-logo">
          <img src={image} alt="" />
        </div>
        <div className="college-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          distinctio cumque eaque, vitae dolor ab voluptate illum beatae
          deserunt dignissimos eum tenetur modi quis porro facere consectetur
          odio maiores!
        </div>
      </div>

      <div className="certifications">
        <h4 className="certification-heading">Certifications</h4>

        <div className="certification-cards">
          <CertificationCard
            link="https://www.coursera.org/account/accomplishments/specialization/certificate/4ZG8LH929KJX"
            image={image1}
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          distinctio cumque eaque,"
          />
          <CertificationCard
            link="https://www.coursera.org/account/accomplishments/certificate/2AD7DVNZDZFH"
            image={image2}
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          distinctio cumque eaque,"
          />
          <CertificationCard
            link="https://www.coursera.org/account/accomplishments/certificate/QEJJKEFT3UY5"
            image={image3}
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          distinctio cumque eaque,"
          />
          <CertificationCard
            link="https://www.coursera.org/account/accomplishments/certificate/FPQPCSKADXP9"
            image={image4}
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a
          distinctio cumque eaque,"
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
