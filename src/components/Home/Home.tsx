import React from "react";
import "./Home.css";
import { easeOut, motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.main
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="home-page"
      >
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.8 }}
          className="name-intro"
        >
          Hey, I'm <span className="name">John Isaac Delgado</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.75 }}
          className="name-call"
        >
          You can call me <span className="name">Isaac</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.7 }}
          className="experience"
        >
          I'm a web developer with experience in
        </motion.div>
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.65 }}
          className="experience"
        >
          <span className="tech">ReactJS</span>,{" "}
          <span className="tech">MongoDB</span>,{" "}
          <span className="tech">Express</span>, and{" "}
          <span className="tech">SQL</span>.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, top: 50 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.5, ease: easeOut, delay: 0.6 }}
          className="links"
        >
          <div className="link-item">→ My Projects</div>
          <div className="link-item resume">
            <a
              href="/John Isaac Delgado Resume.pdf"
              download="John Isaac Delgado Resume.pdf"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
};

export default Home;
