import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <main className="home-page">
        <div className="name-intro">
          Hey, I'm <span className="name">John Isaac Delgado</span>
        </div>
        <div className="name-call">
          Isaac You can call me <span className="name">Isaac</span>
        </div>
        <div className="experience">I'm a web developer with experience in</div>
        <div className="experience">
          <span className="tech">ReactJS</span>,{" "}
          <span className="tech">MongoDB</span>,{" "}
          <span className="tech">Express</span>, and{" "}
          <span className="tech">SQL</span>.
        </div>
        <div className="links">
          <div className="link-item">→ My Projects</div>
          <div className="link-item resume">
            <a href="/resume.pdf" download="John Isaac Delgado Resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
