import React from 'react';
import {Link} from 'react-router-dom';
import AboutImgText from './AboutImgText';

const About = () => {
  return (
    <>
    <div className="aboutmain">
      
    
    <AboutImgText/>

    <div className="buttonsayhello">
    <Link to="/About" className='btn'><button className='sayhellobtn'>about me</button></Link>
        
    </div>
        
    </div>
    </>
  )
}

export default About
