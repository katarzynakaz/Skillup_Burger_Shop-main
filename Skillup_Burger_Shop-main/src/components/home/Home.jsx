// Write all the code here
import "../../styles/home.scss";

import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
const options = {
 initial: {
 x: "-100%",
 opacity: 0,
 },
 whileInView: {
 x: 0,
 opacity: 1,
 }
}

const Home = () => {
    return (
      <div className="home">
        <div>
            <h1>BURGER SHOP</h1>
            <h4>What burger are you going to have today?</h4>
        </div>
        <a href="/Menu">Explore our menu</a>
      </div>
    );
  };

export default Home;

