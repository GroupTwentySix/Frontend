"use client";

import React, { useState, useEffect } from 'react';
import styles from './wishlist.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer';

const API_URL = 'http://localhost:7000';

export default function Wishlist() {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWishlistItems();
    }, []);

    const fetchWishlistItems = async () => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            if (!token || !username) {
                throw new Error('Please sign in to view your wishlist');
            }

            const response = await fetch(`${API_URL}/wishlist/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch wishlist items');
            }

            const data = await response.json();
            setWishlistItems(data);

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const updateQuantity = async (productId, currentQuantity, increment) => {
        try {
            if (currentQuantity + increment < 1) return;

            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');
            const newQuantity = currentQuantity + increment;

            const response = await fetch(`${API_URL}/wishlist/${username}/${productId}?quantity=${newQuantity}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to update quantity');
            }

            // Refresh wishlist after updating quantity
            fetchWishlistItems();

        } catch (error) {
            alert(error.message);
        }
    };

    const removeFromWishlist = async (productId) => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            const response = await fetch(`${API_URL}/wishlist/${username}/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to remove item from wishlist');
            }

            // Refresh wishlist after removing item
            fetchWishlistItems();
            alert('Item removed from wishlist');

        } catch (error) {
            alert(error.message);
        }
    };

    const addToBasket = async (productId, quantity) => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            const response = await fetch(`${API_URL}/basket/${username}/${productId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to add item to basket');
            }

            alert('Item added to basket');

        } catch (error) {
            alert(error.message);
        }
    };

    if (isLoading) {
        return (
            <>
                <Header />
                <div className={styles.loadingContainer}>
                    <p>Loading wishlist...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <Header />
                <div className={styles.errorContainer}>
                    <p>{error}</p>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Your Wishlist</h1>
                {wishlistItems.length === 0 ? (
                    <p className={styles.emptyWishlist}>Your wishlist is empty</p>
                ) : (
                    <div className={styles.wishlistGrid}>
                        {wishlistItems.map((item) => (
                            <div key={item._id} className={styles.wishlistItem}>
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.name} 
                                    className={styles.productImage}
                                />
                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p className={styles.price}>£{item.price.toFixed(2)}</p>
                                    <div className={styles.quantityControl}>
                                        <button 
                                            onClick={() => updateQuantity(item._id, Number(item.quantity) || 1, -1)}
                                            className={styles.quantityButton}
                                        >
                                            -
                                        </button>
                                        <span className={styles.quantity}>
                                            {Number(item.quantity) || 1}
                                        </span>
                                        <button 
                                            onClick={() => updateQuantity(item._id, Number(item.quantity) || 1, 1)}
                                            className={styles.quantityButton}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.buttonGroup}>
                                        <button 
                                            onClick={() => addToBasket(item._id)}
                                            className={styles.addToBasketButton}
                                        >
                                            Add to Basket
                                        </button>
                                        <button 
                                            onClick={() => removeFromWishlist(item._id)}
                                            className={styles.removeButton}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
