import React, { useEffect, useState } from "react";
import "./signup.scss";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Signup = () => {
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    fetch("https://c866-156-207-219-4.ngrok-free.app/auth/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        fName,
        lName,
        email,
        username,
        password,
      },
    }).then((response) => console.log(response));
  };

  // .then(data => {localStorage.setItem('login',JSON.stringify(data));setPost(data)})
  // .then(e => JSON.parse(localStorage.getItem('login')).value=== "email or password is wrong." ? ifloged='wrong' : ifloged='logedin')
  // .then(e => ifloged==='logedin' ? navigate("/") : navigate("/login"))
  // .catch(err => console.error(err));

  return (
    <div className="Signup container">
      <div className="top">
        <img src="/images/bigLogo.png" alt="" />
      </div>
      <div className="left">
        <div className="head">
          <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "backInOut", delay: 0 }} className="gradient-text">
            Welcome to
            <span>TOOLIIFY</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "backInOut", delay: 0 }}>
            get all in one plugins to help you improve your e-commerce and look
            better.
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "backInOut", delay: 0 }} className="form">
          <div className="item">
            <label>First name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="item">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              onChange={(e) => setlName(e.target.value)}
            />
          </div>
          <div className="item">
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="item">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="item">
            <label>Password</label>
            <div className="input">
              <input
                type={show1 ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setpassword(e.target.value)}
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
          </div>
          <div className="item">
            <label>Confirm Password</label>
            <div className="input">
              <input
                type={show2 ? "text" : "password"}
                placeholder="Enter your password"
              />
              {show2 ? (
                <div className="icon" onClick={() => setshow2(!show2)}>
                  <FiEyeOff />
                </div>
              ) : (
                <div className="icon" onClick={() => setshow2(!show2)}>
                  <FiEye />
                </div>
              )}
            </div>
          </div>
          <div className="btn" onClick={handleClick}>
            Sign Up
          </div>
          <div className="text">
            Don’t have an account?
            <Link to="/login">
              <span className="gradient-text">Sign In</span>
            </Link>
          </div>
        </motion.div>
      </div>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "backInOut", delay: 0 }} className="right">
        <div className="image">
          <img src="/images/signup.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
