/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../assets/stylesheets/styles.css";

function HomeComponent() {
  return (
    <div className="skills-container">
      <div>
        <h3 className="skills-heading">My Skills</h3>
      </div>

      <div className="skills-cards-container">
        <div className="card-container-top-left">
          <div className="main-card">
            <h6 className="skill-title">Title</h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex facilis
            inventore deserunt, iure sapiente quam fugiat vel optio
            consequuntur! Facere ex ut dicta error fuga. Quidem atque possimus
            sit quisquam!
          </div>
          <div className="sub-card">
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/c-programming.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/python.png"/></div>
          </div>
        </div>
        <div className="card-container-top-right">
          <div className="main-card">
            <h6 className="skill-title">Title</h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex facilis
            inventore deserunt, iure sapiente quam fugiat vel optio
            consequuntur! Facere ex ut dicta error fuga. Quidem atque possimus
            sit quisquam!
          </div>
          <div className="sub-card">
          <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/html-5.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/css3.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/javascript.png"/></div>
            <div className="skill-icon"><img className="react-logo" src="/logo192.png"/></div>
          </div>
        </div>
        <div className="card-container-bottom-left">
          <div className="main-card">
            <h6 className="skill-title">Title</h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex facilis
            inventore deserunt, iure sapiente quam fugiat vel optio
            consequuntur! Facere ex ut dicta error fuga. Quidem atque possimus
            sit quisquam!
          </div>
          <div className="sub-card">
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/tensorflow.png"/></div>
            <div className="skill-icon"><img className="sklearn-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" alt=""/></div>
            <div className="skill-icon"><img className="octave-icon" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Gnu-octave-logo.svg" alt=""/></div>
            <div className="skill-icon"></div>
          </div>
        </div>
        <div className="card-container-bottom-right">
          <div className="main-card">
            <h6 className="skill-title">Title</h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex facilis
            inventore deserunt, iure sapiente quam fugiat vel optio
            consequuntur! Facere ex ut dicta error fuga. Quidem atque possimus
            sit quisquam!
          </div>
          <div className="sub-card">
            <div className="skill-icon"><img className="figma-logo" src="https://i.pinimg.com/originals/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.png" alt=""/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/linux.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/color/48/000000/git.png"/></div>
            <div className="skill-icon"><img src="https://img.icons8.com/fluent/48/000000/online-coding.png"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
