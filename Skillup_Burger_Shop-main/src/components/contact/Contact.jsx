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
                >
                  <div className="popup" style={{color:"red",background:'white',boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>Thank you for your message. We will get back to you shortly.</div>
                </Popup>
            <div className="formBorder">
               <div>
                <img src={burger1} alt="Burger" />
               </div>
            </div>
            </form>
           
        </div>
    );
};

export default Contact;
