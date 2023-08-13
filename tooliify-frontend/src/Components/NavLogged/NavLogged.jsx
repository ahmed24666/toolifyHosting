import { NavLink } from "react-router-dom";
import "./navLogged.scss";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavLogged = () => {
  const [open, setopen] = useState(false)
  return (
    <>
      <div className="NavLogged container" style={open ? { display: 'none' } : {}}>
        <div className="left">
          <div className="image">
            <img src="/images/Logo.png" alt="" />
          </div>
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <li>Integration</li>
            <li>Websites</li>
            <NavLink to="/main/packages">
              <li>Packages</li>
            </NavLink>
          </ul>
        </div>
        <div className="right">
          <div className="image">
            <img src="../../../public/images/avatar.png" alt="" />
          </div>
          <div className="menu" onClick={() => setopen(!open)}>
            <HiOutlineMenuAlt3 />
          </div>
        </div>
      </div>
      <div className="slideDown" style={open ? { top: '0' } : { top: '-100vh' }}>
        <ul className="slideDown-nav" style={open ? { display: 'flex', opacity: '1', transition: '1s ease-in-out 1s' } : { transition: 'none' }}>
          <div className="menu" onClick={() => setopen(!open)}>
            <HiOutlineMenuAlt3 />
          </div>
          <NavLink to="/">
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
          <NavLink to="/main/packages">
            <li className="nav-item" onClick={() => setopen(false)}>
              <a href="" className="nav-link">Packages</a>
            </li>
          </NavLink>
          <div className="right" onClick={() => setopen(false)}>
            <span className='gradient-text'>
              START NOW
            </span>
          </div>
        </ul>
      </div>
    </>
  );
};

export default NavLogged;
