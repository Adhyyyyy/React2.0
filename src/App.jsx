import React, { useState } from 'react'; 
import './App.css';
import NavBar from './Components/Navbar/navbar.jsx';
import BigBox from './Components/BigBox/BigBox.jsx'; 
import Item from './Components/Item/Item.jsx'; 
import './Components/NavBar/navBar.css';
import './Components/BigBox/BigBox.css';  
import './Components/Item/Item.css'; 

const App = () => {
  const [cart, setCart] = useState([]); 

  const addToCart = (shoe) => {
    setCart((prevCart) => {
      // Check if the shoe already exists in the cart
      const shoeExists = prevCart.some((item) => item.model === shoe.model);
      if (shoeExists) {
        // If it exists, return the previous cart without adding the shoe again
        return prevCart;
      }
      // If it doesn't exist, add the shoe to the cart
      return [...prevCart, shoe];
    });
  };

  return (
    <div>
      <NavBar />
      <section id='hero'>
        <div className="left">
          <BigBox addToCart={addToCart} /> 
        </div>
        <div className="right">
          <Item cart={cart} />
        </div>
      </section>
    </div>
  );
};

export default App;
