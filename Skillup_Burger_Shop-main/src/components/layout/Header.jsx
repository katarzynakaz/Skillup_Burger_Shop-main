// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineContacts, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlineMenu, AiOutlineLogin, AiOutlineOrderedList, AiOutlineLogout } from "react-icons/ai";
import "../../styles/header.scss";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';



const Header = () => {
  return (
    <nav>
      <div>
     
           <Link to="/"><AiOutlineHome /> Home</Link>
        <Link to="/contact"><AiOutlineContacts /> Contact</Link>
        <Link to="/about"><AiOutlineInfoCircle /> About</Link>
        <Link to="/cart"><AiOutlineShoppingCart /> Cart</Link>
          <Link to="/login"><AiOutlineLogin /> Login</Link>
          <Link to="/myOrders"><AiOutlineOrderedList /> Orders</Link>
          <Link to="/logout"><AiOutlineLogout /> Logout</Link>
         
      </div>
    </nav>
  );
};

export default Header;