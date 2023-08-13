import React from "react";
import "./about.scss";
import { motion } from "framer-motion";

const About = ({ aboutRef }) => {
  return (
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="About"
    >
      <div className="image">
        <img src="/images/logoV.png" alt="" />
      </div>
      <div className="text">
        <h1>We are a specialized software company, </h1>
        <p>
          focusing on plugin development.<br/> Our expertise lies in creating
          all-in-one plugin at an affordable cost to boost your sales and upsell
          potential.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
