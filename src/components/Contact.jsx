import React from "react";
import "../assets/stylesheets/styles.css";
function Contact() {
  return (
    <div className="contact-container">
      <div>
        <h3 className="contact-heading">Contact Me</h3>
      </div>
      <div className="contact-main">
        <div className="contact-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          sapiente laudantium molestiae, maxime perferendis pariatur dicta nobis
          cum exercitationem deserunt voluptate culpa corporis autem quos magni
          aut commodi reiciendis neque?
        </div>
        <div className="links">
          <div className="pro-links">
            <div className="email">
              <label htmlFor="">Email : </label>
              <a href="mailto:amarshendkar.as@gmail.com">
                <img src="https://img.icons8.com/fluent/48/000000/apple-mail.png" />
              </a>
            </div>
            <div className="linked-in">
              <label>Linkedin : </label>
              <a href="">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
              </a>
            </div>
          </div>

          <div className="other-links">
            <div className="instagram">
              <label htmlFor="">Instagram : </label>
              <a href="mailto:amarshendkar.as@gmail.com">
              <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
              </a>
            </div>
            <div className="twitter">
              <label>Twitter : </label>
              <a href="">
              <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
