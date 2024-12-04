{/*Original version before attempting api endpoints or start points for integration. dont update/delete. kept incase of future issues to refer to/backup*/}

"use client";

import React, { useState, useEffect } from 'react';
import styles from './wishlist.module.css';
import Link from 'next/Link';
import Header from '../components/header/header'
import Footer from '../components/footer'


export default function Wishlist() {
  
  const [wishlist, setWishlist] = useState([
    { id: 1, name: "Glow and Restore", description: "Hyaluronic Serum", price: "£23", quantity: 1 },
    { id: 2, name: "Hydrate and Nourish", description: "Moisturizing Cream", price: "£19", quantity: 1 },
    { id: 3, name: "Smooth and Shine", description: "Shampoo", price: "£15", quantity: 1 }
  ]);

  // Backend to integrate wishlist API with databaase. this is just for showcase
  
  const updateQuantity = (id, action) => {
    setWishlist((prevWishlist) => 
      prevWishlist.map(item => 
        item.id === id ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  
  const removeItem = (id) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== id));
  };

  
  const moveToBasket = (id) => {
    console.log(`Item with id ${id} moved to basket.`);
    removeItem(id); // fake removal for now. backend to itegrate wishlist and move to basket feature
  };

  return (
    <>
        <Header />
    <main className={styles.wishlistMain}>
      <h1 className={styles.wishlistHeader}>Wishlist ({wishlist.length})</h1>

      {wishlist.map((item) => (
        <div key={item.id} className={styles.wishlistItem}>
          <div className={styles.wishlistImage}></div>
          <div className={styles.wishlistDetails}>
            <h3 style={{ color: "#CEA5A7" }}>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>

          <div className={styles.wishlistActions}>
            <div className={styles.quantityContainer}>
              <button className={styles.decrease} onClick={() => updateQuantity(item.id, 'decrease')}>-</button>
              <span className={styles.quantity}>{item.quantity}</span>
              <button className={styles.increase} onClick={() => updateQuantity(item.id, 'increase')}>+</button>
            </div>

            {/* <div className={styles.actionButtons}>
              <button onClick={() => moveToBasket(item.id)}>Move to Basket</button>
            </div>

            <div className={styles.actionButtons}>
              <button style={{ backgroundColor: 'white' }} onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            */}

            <div className={styles.actionButtons}> 
                <button className={styles.wishlistButton1} onClick={() => moveToBasket(item.id)}>Move to Basket</button>
            </div>

            <div className={styles.actionButtons}> 
                <button className={styles.wishlistButton2} onClick={() => removeItem(item.id)}>Remove</button>
            </div>




          </div>
        </div>
      ))}
    </main>
    <Footer />
    </>
  );
}
