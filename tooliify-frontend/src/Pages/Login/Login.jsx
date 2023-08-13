import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./login.scss";
const Login = () => {
  const [show1, setshow1] = useState(false);
  return (
    <div className="Login">
      <div className="top">
        <img src="/images/bigLogo.png" alt="" />
      </div>
      <div className="left">
        <div className="head">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "backInOut", delay: 0 }}
            className="gradient-text"
          >
            Welcome to
            <span>TOOLIIFY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "backInOut", delay: 0 }}
          >
            get all in one plugins to help you improve your e-commerce and look
            better.
          </motion.p>
        </div>
        <div className="form">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "backInOut", delay: 0 }}
            className="item"
          >
            <label>Username</label>
            <input type="text" placeholder="Enter your username" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "backInOut", delay: 0 }}
            className="item"
          >
            <label>Password</label>
            <div className="input">
              <input
                type={show1 ? "text" : "password"}
                placeholder="Enter your password"
              />
              {show1 ? (
                <div className="icon" onClick={() => setshow1(!show1)}>
                  <FiEyeOff />
                </div>
              ) : (
                <div className="icon" onClick={() => setshow1(!show1)}>
                  <FiEye />
                </div>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "backInOut", delay: 0 }}
            className="btn"
          >
            Login
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "backInOut", delay: 0 }}
            className="text"
          >
            Don’t have an account?
            <Link to="/signup">
              <span className="gradient-text">Sign Up</span>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 0 }}
        className="right"
      >
        <div className="image">
          <img src="/images/signup.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
