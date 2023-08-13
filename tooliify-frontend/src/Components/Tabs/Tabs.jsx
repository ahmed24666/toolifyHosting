import './tabs.scss'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import AllFeatures from './../AllFeatures/AllFeatures'
import About from '../About/About'
import AllInOne from '../AllInOne/AllInOne';
import Contact from '../Contact/Contact';
import Partners from '../Partners/Partners';

const Tabs = ({aboutRef}) => {
  
  let tabs = [
    { id: "about", label: "About us", component: <About aboutRef={aboutRef}/>},
    { id: "aio", label: "All in one", component: <AllInOne aboutRef={aboutRef} />  },
    { id: "partners", label: "Our partners", component: <Partners aboutRef={aboutRef}/> },
    { id: "contact", label: "contact us", component: <Contact aboutRef={aboutRef}/>},
  ];
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div
    className="TabsCon container">
      <div className="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "active" : ""}`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="motionSpan"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
        <div className="line">
        </div>
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
      {tabs.map((item) => {
        return (
          item.id === activeTab && (
            <div key={item.id}>
              {/* <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: "backInOut", delay: 0 }}
              >{item.p}</motion.p> */}
              {item.component}
            </div>
          )
        )
      })}
    </div>
  )
}

export default Tabs