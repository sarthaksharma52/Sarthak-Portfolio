import React from 'react';
import pdf from './pdf/Sarthak-resume .pdf';
import instagramIcon from '../public/assets/instagram.png';
import githubIcon from '../public/assets/github.png';
import linkedinIcon from '../public/assets/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <div className="container footer">
          <div className="left footer_items1">Sarthak Sharma</div>
          <div className="mid">
            <Link to="" className='footer_items'>projects</Link>
            <Link to="" className='footer_items'>about</Link>
            <Link to="" className='footer_items'>contact</Link>
            <a href={pdf}  className='footer_items'>resume</a>
          </div>
          <div className="right">
            <Link to="https://www.linkedin.com/in/sarthak-sharma-778b28257/" target='_blank' className='footer_items_icon'>
            <img src={linkedinIcon} alt="linkedin" style={{ width: '24px', height: '24px' }} />
            </Link>
            <Link to="https://www.instagram.com/exe.sarthak/" className='footer_items_icon'>
              <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
            </Link>
            <Link to="https://github.com/sarthaksharma52" target="_blank" className='footer_items_icon'>
                <img src={githubIcon} alt="github" style={{ width: '24px', height: '24px' }} />
                </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
