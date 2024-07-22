import React, { useEffect } from "react";
// import image from "../public/Images 2/proimg/sarthakportfolio.jpg";
import Image from "../public/images 2/proimg/sarthakportfolio.jpg"
import AOS from "aos";
import "aos/dist/aos.css";

const AboutImgText = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="about-box1">
        <div className="section1about">
          <p className="about1">.about</p>
          <div className="hrabout">
            <hr />
          </div>
        </div>
        <div className="about-box">
          <div className="text-gradient-about">
            Based in India/UP, MERN stack developer experience of different
            variety of projects. A passionate developer and I love what I do, and
            I strongly believe in; "The less it is the cooler is your interface"
          </div>
          <div
            className="about-image"
            data-aos="fade-up"
          >
            <img src={Image} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutImgText;
