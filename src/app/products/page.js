"use client"; 
import React, { useState, useEffect } from "react";
import styles from "./products.module.css";
import Header from "../components/header/header";
import Footer from '../components/footer';

const API_URL = 'http://localhost:7000';

// Define categories - you can expand this later
const CATEGORIES = [
    { id: 'all', name: 'All Products' },
    { id: 'moisturiser', name: 'Moisturisers' },
    { id: 'cleanser', name: 'Cleansers' },
    { id: 'serum', name: 'Serums' },
    { id: 'toner', name: 'Toners' },
    { id: 'spf', name: 'SPF' }
];

const SORT_OPTIONS = [
    { id: 'default', name: 'Default' },
    { id: 'priceLowToHigh', name: 'Price: Low to High' },
    { id: 'priceHighToLow', name: 'Price: High to Low' },
    { id: 'nameAZ', name: 'Name: A to Z' },
    { id: 'nameZA', name: 'Name: Z to A' }
];

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOption, setSortOption] = useState('default');
    const [showSortMenu, setShowSortMenu] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem('jwt_token');
            const response = await fetch(`${API_URL}/products`, {
                headers: token ? {
                    'Authorization': `Bearer ${token}`
                } : {}
            });

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to load products');
        } finally {
            setIsLoading(false);
        }
    };

    // Filter and sort products
    const getFilteredAndSortedProducts = () => {
        let filteredProducts = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.category === selectedCategory
            );
        }

        // Sort products
        switch (sortOption) {
            case 'priceLowToHigh':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'priceHighToLow':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'nameAZ':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'nameZA':
                filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                // Default sorting (you might want to implement a specific default order)
                break;
        }

        return filteredProducts;
    };

    const addToBasket = async (productId) => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            if (!token || !username) {
                alert('Please sign in to add items to your basket');
                return;
            }

            const response = await fetch(`${API_URL}/basket/${username}/${productId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to add to basket');
            }

            alert('Product added to basket successfully');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add product to basket');
        }
    };

    const addToWishlist = async (productId) => {
        try {
            const token = localStorage.getItem('jwt_token');
            const username = localStorage.getItem('username');

            if (!token || !username) {
                alert('Please sign in to add items to your wishlist');
                return;
            }

            const response = await fetch(`${API_URL}/wishlist/${username}/${productId}?quantity=1`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to add to wishlist');
            }

            alert('Product added to wishlist!');

        } catch (error) {
            alert(error.message);
        }
    };

    if (isLoading) {
        return (
            <>
                <Header />
                <div className={styles.loadingContainer}>
                    <p>Loading products...</p>
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

    const filteredAndSortedProducts = getFilteredAndSortedProducts();

    return (
        <>
            <Header />
            <main className={styles.productsPage}>
                <div className={styles.container}>
                    <h1 className={styles.header}>Our Products</h1>
                    
                    {/* Categories */}
                    <div className={styles.categories}>
                        {CATEGORIES.map(category => (
                            <button
                                key={category.id}
                                className={`${styles.categoryBtn} ${
                                    selectedCategory === category.id ? styles.active : ''
                                }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className={styles.sortContainer}>
                        <div className={styles.dropdown}>
                            <button 
                                className={styles.sortBtn}
                                onClick={() => setShowSortMenu(!showSortMenu)}
                            >
                                Sort By
                            </button>
                            {showSortMenu && (
                                <div className={styles.dropdownMenu}>
                                    {SORT_OPTIONS.map(option => (
                                        <div
                                            key={option.id}
                                            className={`${styles.dropdownItem} ${
                                                sortOption === option.id ? styles.active : ''
                                            }`}
                                            onClick={() => {
                                                setSortOption(option.id);
                                                setShowSortMenu(false);
                                            }}
                                        >
                                            {option.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className={styles.productsGrid}>
                        {filteredAndSortedProducts.map((product) => (
                            <div key={product.id} className={styles.productCard}>
                                <img 
                                    src={product.imageUrl} 
                                    alt={product.name} 
                                    className={styles.productImage}
                                />
                                <h3 className={styles.productTitle}>{product.name}</h3>
                                <p className={styles.description}>{product.description}</p>
                                <p className={styles.price}>£{product.price.toFixed(2)}</p>
                                <div className={styles.buttonGroup}>
                                    <button 
                                        onClick={() => addToBasket(product.id)}
                                        className={styles.addToBasketButton}
                                    >
                                        Add to Basket
                                    </button>
                                    <button 
                                        onClick={() => addToWishlist(product.id)}
                                        className={styles.addToWishlistButton}
                                    >
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
