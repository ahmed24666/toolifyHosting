import React from "react";
import "./packages.scss";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Plans.scss";
const Packages = ({ aboutRef, handleClick }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  return (
    <div className="Packages container">
      <div className="hero">
        <div className="text">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "backInOut", delay: 0 }}
          >
            Enjoy
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "backInOut", delay: 0 }}
          >
            <span>ALL IN ONE</span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "backInOut", delay: 0 }}
            style={{ marginBottom: "30px" }}
          >
            plugins Through our packages
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "backInOut", delay: 0 }}
            className="btn"
            onClick={() => handleClick()}
          >
            <span className="">
              Explore Now
              <div className="arrow ">
                <BsArrowDown />
              </div>
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "backInOut", delay: 0 }}
          className="image"
        >
          <img src="/images/visa2.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2, ease: "backInOut", delay: 0 }}
        className="name gradient-text"
      >
        <h1>Our Packages</h1>
      </motion.div>
      <motion.div
        className="Plans"
        ref={aboutRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
      >
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="plan"
        >
          <div className="price">
            <h1 className="gradient-text">992</h1>
            <p>
              SAR
              <br />
              /Month
            </p>
          </div>
          <div className="items">
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item not">
              <div className="icon">
                <img src="/images/close.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item not">
              <div className="icon">
                <img src="/images/close.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="btncon">
              <div className="btn">
                <span className="gradient-text">
                  START NOW
                  <div className="arrow ">
                    <BsArrowRight />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="plan big"
        >
          <div className="price">
            <h1 className="">170</h1>
            <p>
              SAR
              <br />
              /Month
            </p>
          </div>
          <div className="items">
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item not">
              <div className="icon">
                <img src="/images/close.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item not">
              <div className="icon">
                <img src="/images/close.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="btncon">
              <div className="btn">
                <span className="gradient-text">
                  START NOW
                  <div className="arrow ">
                    <BsArrowRight />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="plan"
        >
          <div className="price">
            <h1 className="gradient-text">1900</h1>
            <p>
              SAR
              <br />
              /Month
            </p>
          </div>
          <div className="items">
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item">
              <div className="icon">
                <img src="../../../public/images/tick-black.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item not">
              <div className="icon">
                <img src="/images/close.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="item not">
              <div className="icon">
                <img src="/images/close.png" alt="" />
              </div>
              <h3>Lorem Ipsum is simply. </h3>
            </div>
            <div className="btncon">
              <div className="btn">
                <span className="gradient-text">
                  START NOW
                  <div className="arrow ">
                    <BsArrowRight />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Packages;
