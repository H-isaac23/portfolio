import "./Contact.css";
import { Isaac } from "../../assets/contact";
import { easeOut, motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <motion.div
            initial={{ opacity: 0, top: 50 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.85 }}
            className="about-text"
          >
            About
          </motion.div>
          <motion.p
            initial={{ opacity: 0, top: 50 }}
            animate={{ opacity: 1, top: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.8 }}
            className="about-details"
          >
            My name is John Isaac Delgado, people call me Isaac and I graduated
            Magna Cum Laude from Palawan State University. I'm a front-end and
            back-end developer from and an aspiring data scientist from Palawan,
            Philippines. I also do digital art and study math, both as a hobby
            and I'm always open to learning new things about coding.
          </motion.p>

          <div className="contact-links">
            <motion.div
              initial={{ opacity: 0, top: 50 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.7 }}
              className="contact-item"
            >
              <div className="arrow">→</div>
              <a
                href="https://www.linkedin.com/in/john-isaac-delgado-285b29211/"
                target="noreferrer"
              >
                LinkedIn
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, top: 50 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.6 }}
              className="contact-item"
            >
              <div className="arrow">→</div>
              <a href="https://github.com/H-isaac23" target="noreferrer">
                Github
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, top: 50 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.4 }}
              className="contact-item"
            >
              dev.isaac23@gmail.com
            </motion.div>
          </div>
        </div>
        <div className="about-right">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 1 }}
            src={Isaac}
            alt="Isaac's picture"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
