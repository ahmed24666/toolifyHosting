import React from "react";
import "./HomeLogged.scss";
import { motion } from "framer-motion";
import { useState } from "react";
const HomeLogged = () => {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  return (
    <div className="HomeLogged container">
      <div className="head">
        <div className="gradient-text">
          <h1 className="gradient-text">add websites</h1>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lorem Lorem Ipsum
          is simply Ipsum is simply dummy text of the printing and
        </p>
      </div>
      <div className="add">
        <motion.div
          layoutId="animate1"
          transition={{ type: "just", duration: 0.5 }}
          className="card"
          style={first?{width: ''}:{width:'300px'}}
        >
          <h1 className="gradient-text">Website One</h1>
          {first ?(
            <motion.div className="field">
            <input type="text" placeholder="Https//hjhakaj.com"/>
            <div className="btn">
                Add
            </div>
          </motion.div>
          ): (
            <div className="icon" onClick={() => {setsecond(false);setfirst(true);setthird(false)}}>
              <img src="/images/addplus.png" alt="" />
            </div>
          )}
        </motion.div>
        <motion.div
          layoutId="animate2"
          transition={{ type: "just", duration: 0.5 }}
          className="card"
          style={second?{width: ''}:{width:'300px'}}
        >
          <h1 className="gradient-text">Website Two</h1>
          {second ?(
            <motion.div className="field">
            <input type="text" placeholder="Https//hjhakaj.com"/>
            <div className="btn">
                Add
            </div>
          </motion.div>
          ): (
            <div className="icon" onClick={() => {setsecond(true);setfirst(false);setthird(false)}}>
              <img src="/images/addplus.png" alt="" />
            </div>
          )}
          
        </motion.div>
        <motion.div
          layoutId="animate3"
          transition={{ type: "just", duration: 0.5 }}
          className="card"
          style={third?{width: ''}:{width:'300px'}}
        >
          <h1 className="gradient-text">Website Three</h1>
          {third ?(
            <motion.div className="field">
            <input type="text" placeholder="Https//hjhakaj.com"/>
            <div className="btn">
                Add
            </div>
          </motion.div>
          ): (
            <div className="icon" onClick={() => {setsecond(false);setfirst(false);setthird(true)}}>
              <img src="/images/addplus.png" alt="" />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeLogged;
