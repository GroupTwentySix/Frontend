"use client";
import React, { useState, useEffect } from 'react';
import styles from './basket.module.css';
import Header from '../components/header/header';
import Footer from '../components/footer';

const API_URL = 'http://localhost:7000';

export default function Basket() {
    const [basketItems, setBasketItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBasketItems();
    }, []);

    const fetchBasketItems = async () => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            if (!token || !username) {
                throw new Error('Please sign in to view your basket');
            }

            const response = await fetch(`${API_URL}/basket/${username}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch basket items');
            }

            const data = await response.json();
            setBasketItems(data);

        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const removeFromBasket = async (productId) => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            if (!token || !username) {
                throw new Error('Please sign in to remove items');
            }

            const response = await fetch(`${API_URL}/basket/${username}/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to remove item from basket');
            }

            // Refresh basket items
            fetchBasketItems();
            alert('Item removed from basket');

        } catch (error) {
            alert(error.message);
        }
    };

    if (isLoading) {
        return (
            <>
                <Header />
                <div className={styles.loadingContainer}>
                    <p>Loading basket...</p>
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
                <h1 className={styles.title}>Your Basket</h1>
                {basketItems.length === 0 ? (
                    <p className={styles.emptyBasket}>Your basket is empty</p>
                ) : (
                    <div className={styles.basketGrid}>
                        {basketItems.map((item) => (
                            <div key={item.id} className={styles.basketItem}>
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.name} 
                                    className={styles.productImage}
                                />
                                <div className={styles.itemDetails}>
                                    <h3>{item.name}</h3>
                                    <p className={styles.price}>£{item.price.toFixed(2)}</p>
                                    <button 
                                        onClick={() => removeFromBasket(item.id)}
                                        className={styles.removeButton}
                                    >
                                        Remove
                                    </button>
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
