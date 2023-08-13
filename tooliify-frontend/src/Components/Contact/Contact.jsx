import React from "react";
import "./contact.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ aboutRef }) => {
  const [value, setValue] = useState();
  return (
    <motion.div
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="Contact"
    >
      <div className="left">
        <h1 className="gradient-text">
          Need a quote ? Do not hesitate To contact us .
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lorem Lorem Ipsum
          is simply Ipsum is simply dummy text of the printing and Lorem Ipsum
          is simply dummy text of{" "}
        </p>
      </div>
      <div className="right">
        <div className="two">
          <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
          className="one">
            <input type="text" placeholder="First Name" />
          </motion.div>
          <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "backInOut", delay: 0 }}
          className="one">
            <input type="text" placeholder="Last Name" />
          </motion.div>
        </div>
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "backInOut", delay: 0 }}
        className="one">
          <input type="text" placeholder="Email" />
        </motion.div>
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "backInOut", delay: 0 }}
        className="one phone">
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="EG"
            value={value}
            onChange={setValue}
          />
        </motion.div>
        <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.9, ease: "backInOut", delay: 0 }}
        className="one">
          <textarea placeholder="Drop your message" ></textarea>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
