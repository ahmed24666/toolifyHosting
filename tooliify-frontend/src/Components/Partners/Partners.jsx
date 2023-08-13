import React from "react";
import { motion } from "framer-motion";
import "./partner.scss";
const Partners = ({ aboutRef }) => {
  return (
    <motion.dev
      ref={aboutRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      className="Partners"
    >
      <div className="text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and Lorem Lorem Ipsum
          is simply Ipsum is simply dummy text of the printing and Lorem Ipsum
          is simply dummy text of
        </p>
      </div>
      <div className="images">
        {[...Array(4)].map((_,i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "backInOut", delay: (i + 1 ) / 10 }}
              className="image"
            >
              <img src="/images/partners.png" alt="" />
            </motion.div>
          );
        })}
      </div>
    </motion.dev>
  );
};

export default Partners;
