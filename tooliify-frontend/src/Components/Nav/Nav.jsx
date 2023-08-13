import React, { useState } from "react";
import "./nav.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setopen] = useState(false)
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: "backInOut", delay: 0 }}
        className='Nav container' style={open ? { position: 'fixed' } : {}}>
        <div className="left">
          <div className="image">
            <img src="/images/Logo.png" alt="" />
          </div>
          <ul>
            <NavLink to='/main/home'>
              <li>Home</li>
            </NavLink>
            <li>Plugins</li>
            <li>About us</li>
            <li>Contact us</li>
            <NavLink to='/main/packages'>
              <li>Packages</li>
            </NavLink>
          </ul>
        </div>
        <NavLink to='/login'>
          <div className="right">
            <span className='gradient-text'>
              START NOW
            </span>
          </div>
        </NavLink>
        <div className="menu" onClick={() => setopen(!open)}>
          <HiOutlineMenuAlt3 />
        </div>

      </motion.div>
      <div className="slideDown" style={open ? { top: '0' } : { top: '-100vh' }}>
        <ul className="slideDown-nav" style={open ? { display: 'flex', opacity: '1', transition: '1s ease-in-out 1s' } : { transition: 'none' }}>
          <NavLink to='/main/home'>
            <li className="nav-item" onClick={() => setopen(false)}>

              <a href="" className="nav-link">Home</a>
            </li>
          </NavLink>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">Plugins</a>
          </li>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">About us</a>
          </li>
          <li className="nav-item" onClick={() => setopen(false)}>
            <a href="" className="nav-link">Contact us</a>
          </li>
          <NavLink to='/main/packages'>
            <li className="nav-item" onClick={() => setopen(false)}>
              <a href="" className="nav-link">Packages</a>
            </li>
          </NavLink>
          <NavLink to='/login'>
          <div className="right" onClick={() => setopen(false)}>
            <span className='gradient-text'>
              START NOW
            </span>
          </div>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Nav;
