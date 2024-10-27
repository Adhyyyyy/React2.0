import React, { useState, useEffect } from 'react';

const Item = ({ cart }) => {
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState([]);

  // Initialize counts when the cart changes
  useEffect(() => {
    setCounts(Array(cart.length).fill(0)); // Initialize counts for new cart
  }, [cart]);

  // Calculate the total whenever cart or counts change
  useEffect(() => {
    const newTotal = cart.reduce((acc, item, index) => acc + item.price * counts[index], 0);
    setTotal(newTotal);
  }, [cart, counts]);

  const addItem = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts); // Update counts
  };

  const removeItem = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 0) {
      newCounts[index] -= 1;
      setCounts(newCounts); // Update counts
    }
  };

  return (
    <div className='Ibox'>
      <h2>Shopping Cart</h2>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul id='uList'>
            {cart.map((item, index) => (
              <li id='iList' key={item.model}> {/* Use unique key */}
                <img id='cartImg' src={item.image} alt={item.model} />
                <span id='itemTxt'>{item.model} - ${item.price}</span>
                <span className='addRemove'>
                  <button id='remove' onClick={() => removeItem(index)}>-</button>
                  {counts[index]} {/* Display the current count */}
                  <button id='add' onClick={() => addItem(index)}>+</button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="total">
        <h3>Total</h3>
        <h3>${total.toFixed(2)}</h3> {/* Display total */}
      </div>
    </div>
  );
};

export default Item;
