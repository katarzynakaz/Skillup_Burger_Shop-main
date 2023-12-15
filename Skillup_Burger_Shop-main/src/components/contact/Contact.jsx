import React from "react";
import Popup from 'reactjs-popup';
import "../../styles/contact.scss";
import burger1 from "../../assets/burger1.png";

const Contact = () => {
    return (
        <div className="contact">
            <form>
                <h2>Contact Us</h2>
                <input type="text" id="name" name="name" placeholder="Enter Your Name" required />
                <input type="email" id="email" name="email" placeholder="Enter Your Email" required />
                <textarea id="comment" name="comment" placeholder="Enter your comment" required></textarea>
                <Popup
                  trigger={<button type="submit">Send</button>} 
                  position="right center"
                >
                  <div className="popup">Thank you for your message. We will get back to you shortly.</div>
                </Popup>
            </form>
            <div className="formBorder">
               {/* <div>
                <img src={burger1} alt="Burger" />
               </div> */}
            </div>
           
        </div>
    );
};

export default Contact;
