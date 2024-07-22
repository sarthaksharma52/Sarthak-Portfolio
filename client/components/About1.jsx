import React from "react";
import Sayhello from "../components/Sayhello";
import Skills from '../components/Skills';
import AboutImgText from "./AboutImgText";


const About1 = () => {
  return (
    <>
      <div className="about mt-5">
        <div className="aboutsection">
        <div className="aboutHeading text-gradient-aboutnew">about</div>
        <div className="aboutContent text-gradient-aboutnew ">
        As a proficient MERN stack developer, I excel in creating dynamic and robust web applications that drive seamless user experiences and optimize backend processes.
        </div>
        </div>
        
      </div>
      <AboutImgText/>

      <Skills/>
      <Sayhello />
    </>
  );
};

export default About1;
