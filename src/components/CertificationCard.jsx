import React from "react";
import "../assets/stylesheets/styles.css";
function CertificationCard(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.image} alt="" className="card-img" />
        <div className="middle">
          <a href={props.link} target="_blank">
            <img src="https://play-lh.googleusercontent.com/qq5__wITsoCx2kUK8TqVW2-8UDRuxET9kCzPzAPHad8umXiHRF2N0tZKuLezd0tiBQg=s180-rw" />
          </a>
        </div>
      </div>
      <div className="certificate-info">{props.info}</div>
    </div>
  );
}

export default CertificationCard;
