// Write all the code here
// Create a social media bar with links to YouTube and Instagram, using anchor tags and icons from the react-
// icons/ai library
import React from 'react';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import '../../styles/footer.scss';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <h2>Burgers!</h2>
          <p>Best taste possible</p>
          <strong>If you have any feedback, reach out to us!</strong>
        </div>
        <aside className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram size={24} />
          </a>
        </aside>
      </footer>
    );
  }
  
  export default Footer;