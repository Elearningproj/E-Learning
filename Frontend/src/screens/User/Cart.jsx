import React, { useEffect, useState } from "react";
import { fetchCartItems } from "../../services/cart"; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem("userId");
  
  useEffect(() => {
    async function loadCart() {
      const storedUserId = localStorage.getItem("userId"); // Ensure consistency
      console.log("User ID in Cart.jsx:", storedUserId);
  
      if (!storedUserId) {
        console.error("User ID is missing. Cannot fetch cart.");
        return;
      }
  
      const items = await fetchCartItems(storedUserId);
      // Pass userId to fetch function
      console.log("Fetched cart items:", items);
      setCartItems(items);
    }
  
    loadCart();
  }, []);
  
  

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="border p-2 mb-2">
              {item.courseName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
