import React from "react";
import "./Footer.css";
import footerImg from "../assets/footer.png";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTiktok 
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-banner">
        {/* Ensure this path matches your folder structure to see the image */}
    <img src={footerImg} alt="Our Community" className="footer-img" />
        
        <div className="social-overlay-top">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>

        <div className="text-overlay-center">
          <p>Copyright © 2026 <span className="bold-text">easyjobs.pk</span></p>
          <p>A project of <span className="bold-text">Success Signatures SMC Pvt Ltd.</span> Lahore-Pakistan</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;