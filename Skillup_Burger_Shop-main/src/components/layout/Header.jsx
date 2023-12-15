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
{/* <nav>
 <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
 <IoFastFoodOutline />
 </motion.div>
 <div>
 <Link to="/">Home</Link>
 <Link to="/contact">Contact</Link>
 <Link to="/about">About</Link>
 <Link to="/cart">
 <FiShoppingCart />
 </Link>
 <DropdownMenu />
 </div>
</nav> */}


const Header = () => {
  return (
    <nav>
      <div>
      {/* <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/cart">Cart</a>
        <div><button className="dropbtn">Menu</button>
          <a href="/login">Login</a>
          <a href="/orders">Orders</a>
          <a href="/logout">Logout</a> */}
           <Link to="/"><AiOutlineHome /> Home</Link>
        <Link to="/contact"><AiOutlineContacts /> Contact</Link>
        <Link to="/about"><AiOutlineInfoCircle /> About</Link>
        <Link to="/cart"><AiOutlineShoppingCart /> Cart</Link>
          <Link to="/login"><AiOutlineLogin /> Login</Link>
          <Link to="/myOrders"><AiOutlineOrderedList /> Orders</Link>
          <Link to="/logout"><AiOutlineLogout /> Logout</Link>
         {/* <div><button className="dropbtn">Menu</button>
          <a href="/login">Login</a>
          <a href="/orders">Orders</a>
          <a href="/logout">Logout</a> */}
      </div>
    </nav>
  );
};

export default Header;