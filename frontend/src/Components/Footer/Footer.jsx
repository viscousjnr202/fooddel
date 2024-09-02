import React from 'react';
import { assets } from '../../admin_assets/assets';
import { assets1 } from '../../frontend_assets/assets';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container' id='contact'>
      <div className="footer">
        <div className="footer-left">
            <img src={assets.logo} alt="" className='logo-link'/>
            <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident repellat quam blanditiis eaque quos ducimus, deserunt ea qui non consequuntur vel aliquid, perspiciatis autem quasi molestias debitis obcaecati nostrum?</p>
            <div className="links">
                <img src={assets1.twitter_icon} alt=""  className='social-links
                '/>
                <img src={assets1.facebook_icon} alt="" className='social-links
            '   />
                <img src={assets1.linkedin_icon} alt="" className='social-links
            '   />
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li className='footer-links'>Home</li>
                <li     className='footer-links'>About Us</li>
                <li className='footer-links'>Delivery</li>
                <li className='footer-links'>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <p className='text'>+1-212-456-7890</p>
            <p className='text'>contact@tomato.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
