// // Write all the code here
// import React from "react";
// import "../../styles/menu.scss";
// //animation added into scss
// import MenuCard from "./MenuCard";
// import burger1 from "../../assets/burger1.png";
// import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.png";
// // Write all the code here





// // Create a menu card of the items with the item number, image source, price, title, a function handler for
// // adding to cart, and a delay for animation.

// // divs for individual burgers, animation transition added in scss

// const Menu = () => {
//   return (
// <div id="menu"> 
//   <h1>Menu</h1>
//     <div className="menuCard">
//       <h5>Cheeseburger</h5>
//       <p>£9.99</p>
//       <img src={burger1} alt="Cheeseburger" />
//       <button onClick = {addedToCart}>Buy Now</button>
//     </div>

//     <div className="menuCard">
//       <h5>Double Bacon Cheeseburger</h5>
//       <p>£11.99</p>
//       <img src={burger2} alt="Juicy Double Bacon Cheeseburger" />
//       <button onClick = {addedToCart}>Buy Now</button>
//     </div>

//     <div className="menuCard">
//       <h5>Vegan Burger</h5>
//       <p>£10.99</p>
//       <img src={burger3} alt="Vegan Burger" />
//       <button onClick = {addedToCart}>Buy Now</button>
//     </div>

// </div>
//   )};

// export default Menu;




import React from "react";
import "../../styles/menu.scss";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
    
 const addedToCart=(number)=> {
    alert("Added to cart");
  }

  return (
    <div id="menu" >
      <h1>Menu</h1>
      <MenuCard 
        itemNum = {1}
        title="Cheeseburger" 
        price="£9.99" 
        burgerSrc={burger1} 
        handler={addedToCart} 
        delay={0.1}
      />
      <MenuCard 
        itemNum = {2}
        title="Double Bacon Cheeseburger" 
        price="£11.99" 
        burgerSrc={burger2} 
        handler={addedToCart} 
        delay={0.1}
      />
      <MenuCard 
        itemNum = {3}
        title="Vegan Burger" 
        price="£10.99" 
        burgerSrc={burger3}
        handler={addedToCart} 
        delay={0.1}
      />
        
      </div>
  );
};

export default Menu;

