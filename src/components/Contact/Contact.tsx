import React from "react";
import "./Contact.css";
import { Isaac } from "../../assets/contact";

const Contact = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <div className="about-text">About</div>
          <p className="about-details">
            My name is John Isaac Delgado, people call me Isaac and I graduated
            Magna Cum Laude from Palawan State University. I'm a front-end and
            back-end developer from and an aspiring data scientist from Palawan,
            Philippines. I also do digital art and study math, both as a hobby
            and I'm always open to learning new things about coding.
          </p>

          <div className="contact-links">
            <div className="contact-item">
              <div className="arrow">→</div>
              <a
                href="https://www.linkedin.com/in/john-isaac-delgado-285b29211/"
                target="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact-item">
              <div className="arrow">→</div>
              <a href="https://github.com/H-isaac23" target="noreferrer">
                Github
              </a>
            </div>
            <div className="contact-item">+639295012253</div>
          </div>
        </div>
        <div className="about-right">
          <img src={Isaac} alt="Isaac's picture" />
        </div>
      </div>
    </>
  );
};

export default Contact;
