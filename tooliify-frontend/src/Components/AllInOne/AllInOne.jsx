import React from "react";
import "./allInOne.scss";
import { motion } from "framer-motion";

const AllInOne = ({ aboutRef }) => {
  return (
    <motion.dev
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="AllInOne"
    >
      <div className="text">
        <p>
          Our all-in-one app is designed to help merchants increase sales and
          improve the customer experience on their online stores. With a range
          of features and integrations, our app provides a user-friendly
          solution for businesses of all sizes.
        </p>
      </div>
      <div className="cards">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "circInOut", delay: 0 }}
        className="card">
          <div className="icon">
            <img src="/images/icon1.png" alt="" />
          </div>
          <h1 className="gradient-text">All in one</h1>
          <p>you can find all apps in one place without searching too much</p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "anticipate", delay: 0 }}
        className="card">
          <div className="icon">
            <img src="/images/icon2.png" alt="" />
          </div>
          <h1 className="gradient-text">Money Savings</h1>
          <p>
            Our app is all in one plugin for one price, that help you to save a
            lot of money.
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: "anticipate", delay: 0 }}
        className="card">
          <div className="icon">
            <img src="/images/icon3.png" alt="" />
          </div>
          <h1 className="gradient-text">Integration</h1>
          <p>
            Integrated with all website’s builder, allowing merchants to manage
            their store and app from one app.
          </p>
        </motion.div>
      </div>
    </motion.dev>
  );
};

export default AllInOne;
