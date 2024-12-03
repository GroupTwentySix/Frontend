"use client"; 
import React, { useEffect, useState } from 'react';
import styles from './basket.module.css';
import Header from "../components/header/header";
import Footer from '../components/footer';

// Mock function to simulate database retrieval
const fetchBasketItems = async () => {
    return [
        { id: 1, name: "Glow and restore", description: "Hyaluronic Serum", price: 23, quantity: 1, image: "/images/faceImage1.jpg" },
        { id: 2, name: "Glow and restore", description: "Hyaluronic Serum", price: 23, quantity: 1, image: "/images/step1.jpeg" },
        { id: 3, name: "Glow and restore", description: "Hyaluronic Serum", price: 23, quantity: 1, image: "/images/step2.jpeg" },
        { id: 4, name: "Glow and restore", description: "Hyaluronic Serum", price: 23, quantity: 1, image: "/images/step3.jpeg" },
    ];
};

const Basket = () => {
    const [basketItems, setBasketItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const loadBasketItems = async () => {
            const items = await fetchBasketItems();
            setBasketItems(items);
            calculateTotal(items);
        };
        loadBasketItems();
    }, []);

    const calculateTotal = (items) => {
        const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(sum);
    };

    const handleQuantityChange = (id, increment) => {
        const updatedItems = basketItems.map((item) => {
            if (item.id === id) {
                const updatedQuantity = item.quantity + increment;
                return { ...item, quantity: Math.max(updatedQuantity, 0) };
            }
            return item;
        });
        setBasketItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const handleRemoveItem = (id) => {
        const updatedItems = basketItems.filter((item) => item.id !== id);
        setBasketItems(updatedItems);
        calculateTotal(updatedItems);
    };

    return (
        <div className={styles.basketContainer}>
            <Header />
            <main className={styles.basketMain}>
                <h1 className={styles.basketHeader}>Basket ({basketItems.length})</h1>

                {basketItems.map((item) => (
                    <div key={item.id} className={styles.basketItem}>
                        <div className={styles.basketImage}>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className={styles.basketDetails}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>£{item.price}</p>
                        </div>
                        <div className={styles.basketActions}>
                            <button
                                className={styles.quantityBtn}
                                onClick={() => handleQuantityChange(item.id, -1)}
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                className={styles.quantityBtn}
                                onClick={() => handleQuantityChange(item.id, 1)}
                            >
                                +
                            </button>
                            <button
                                className={styles.moveWishlistBtn}
                                onClick={() => console.log(`Move ${item.name} to wishlist`)}
                            >
                                Move to Wishlist
                            </button>
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemoveItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className={styles.basketSummary}>
                    <p>Estimated Total:</p>
                    <p>£{total.toFixed(2)}</p>
                </div>

                <button className={styles.checkoutBtn}>Checkout</button>
            </main>
            <Footer />
        </div>
    );
};

export default Basket;
