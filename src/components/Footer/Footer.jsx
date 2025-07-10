import React from 'react';
import './Footer.css';
import FacbokLogo from '../../assets/download.png';
import instaLog from '../../assets/download (1).png';

const Footer = () => {

   return (
    <div className='footer' id='footer'>
        <div className="footer-content">

        <div className="footer-content-left">
         <h2>About us</h2>
         <p>Bin Yaqoob Group is a leading Real 
            Estate Developer specializing in the creation of fully
             integrated residential and commercial societies.
              From acquiring prime land to!</p>
              <ul>
                <li>
                    Read more..
                </li>
                
              </ul>
             
            <div className="footer-social-icons">
                <img src={FacbokLogo} alt="facbook"/> 
                <img src={instaLog} alt="insta" />
               
            </div>
        </div>
        <div className="footer-content-center">
            
          <h2>Useful Links</h2>
          <ul>
            <li>About us</li>
            <li>Our Mission</li>
            <li>Our Services</li>
            <li>Gallery</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2><img src="https://binyaqoobgroup.com.pk/images/-51f.png" alt="Logo" /></h2>
            <ul>
                <li>Faisal Town, Block C, Main Civic Centre, Binyaqoob Arcade.</li>
                <li>info@binyaqoobgroup.com.pk</li>
                <li>51-2720699  051-2720623</li>
            </ul>

        </div>

        </div>
      <hr />
      <p className="footer-copyright">Copyright 2025  © Bin Yaqoob Groups</p>
    </div>
  )
  
}

export default Footer
