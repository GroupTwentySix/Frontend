"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './header.module.css'
import IconCart from './iconCart'
import IconSearch from './iconSearch'
import IconWishlist from './iconWishlist'
import IconProfile from './iconProfile'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    let closeTimer;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        const storedUsername = localStorage.getItem('username');
        if (token && storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleMouseEnter = () => {
        clearTimeout(closeTimer);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer = setTimeout(() => {
            if (!isDropdownHovered){
                setIsOpen(false);
            }
        }, 200);
    };

    const handleDropdownMouseEnter = () => {
        clearTimeout(closeTimer);
        setIsDropdownHovered(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownHovered(false);
        closeTimer = setTimeout(() => {
            setIsOpen(false);
        }, 500);
    };

    const handleLogout = () => {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername('');
        window.location.reload();
    };

    return (
        <header className={styles.header}>
            <div className={styles.left}>
            <Link href="/">
                <img src="/images/vitality-logo.png" alt="Vitality Logo" className={styles.logo} />
                </Link>
            </div>

            <div className={styles.middle}>
                <nav className={styles.megaMenu}>
                    <ul className={styles.menuList}>
                        <li
                        className={styles.menuItem}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        >
                            <Link href="/products">Products</Link>
                            {isOpen && (
                                <div
                                className={styles.dropdown}
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                                >
                                    <div className={styles.dropdownContent}>
                                        <div className={styles.subcategory}>
                                            <h4>Moisturisers</h4>
                                            <ul>
                                                <li className={styles.viewall}><Link href="/products">View all Moisturisers</Link></li>
                                            </ul>
                                            <li><Link href = "">Moisturiser 1</Link></li>
                                            <li><Link href = "">Moisturiser 2</Link></li>
                                            <li><Link href = "">Moisturiser 3</Link></li>
                                            <li><Link href = "">Moisturiser 4</Link></li>
                                            <li><Link href = "">Moisturiser 5</Link></li>
                                        </div>

                                        <div className={styles.subcategory}>
                                            <h4>Cleansers</h4>
                                            <ul>
                                            <li className={styles.viewall}><Link href="/products">View all Cleansers</Link></li>
                                            <li><Link href = "">Cleanser 1</Link></li>
                                            <li><Link href = "">Cleanser 2</Link></li>
                                            <li><Link href = "">Cleanser 3</Link></li>
                                            <li><Link href = "">Cleanser 4</Link></li>
                                            <li><Link href = "">Cleanser 5</Link></li>
                                            </ul>
                                        </div>

                                        {/*add more subcatgeories here */}

                                        <div className={styles.subcategory}>
                                            <h4>Serums</h4>
                                            <ul>
                                            <li className={styles.viewall}><Link href="/products">View all Serums</Link></li>
                                            <li><Link href = "">Serum 1</Link></li>
                                            <li><Link href = "">Serum 2</Link></li>
                                            <li><Link href = "">Serum 3</Link></li>
                                            <li><Link href = "">Serum 4</Link></li>
                                            <li><Link href = "">Serum 5</Link></li>
                                            </ul>
                                        </div>

                                        <div className={styles.subcategory}>
                                            <h4>Toner</h4>
                                            <ul>
                                            <li className={styles.viewall}><Link href="/products">View all Toners</Link></li>
                                            <li><Link href = "">Toner 1</Link></li>
                                            <li><Link href = "">Toner 2</Link></li>
                                            <li><Link href = "">Toner 3</Link></li>
                                            <li><Link href = "">Toner 4</Link></li>
                                            <li><Link href = "">Toner 5</Link></li>
                                            </ul>
                                        </div>

                                        <div className={styles.subcategory}>
                                            <h4>SPF</h4>
                                            <ul>
                                            <li className={styles.viewall}><Link href="/products">View all SPF</Link></li>
                                            <li><Link href = "">SDF 1</Link></li>
                                            <li><Link href = "">SDF 2</Link></li>
                                            <li><Link href = "">SDF 3</Link></li>
                                            <li><Link href = "">SDF 4</Link></li>
                                            <li><Link href = "">SDF 5</Link></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </li>
                        <li className={styles.menuItem}><Link href="/aboutUs">About Us</Link></li>
                        <li className={styles.menuItem}><Link href="/Contact">Contact</Link></li>
                        <li className={styles.menuItem}><Link href="/quiz">Quiz</Link></li>
                    </ul>
                </nav>
            </div>

            
            <div className={styles.right}>

                <div className={styles.searchInput}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchField}
                    />
                    <IconSearch className={styles.iconSearch} />
                </div>  

                <Link href="/basket">
                    <button className={styles.iconButton}>
                        <IconCart className={styles.iconCart}/>
                    </button>
                </Link>

                <Link href="/wishlist">
                    <button className={styles.iconButton}>
                        <IconWishlist className={styles.iconWishlist}/>
                    </button>
                </Link>

                {isLoggedIn ? (
                    <div className={styles.userSection}>
                        <span className={styles.username}>
                            Logged in as: {username}
                        </span>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link href="/signIn">
                        <button className={styles.iconButton}>
                            <IconProfile className={styles.iconProfile}/>
                        </button>
                    </Link>
                )}

            </div>

        </header>
    );
};

export default Header;