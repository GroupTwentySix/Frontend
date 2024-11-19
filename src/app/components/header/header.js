"use client";

import Link from 'next/Link';
import { useState } from 'react'
import styles from './header.module.css'
import IconCart from './iconCart'
import IconSearch from './iconSearch'
import IconWishlist from './iconWishlist'
import IconProfile from './iconProfile'





const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const [isSearchHovered, setIsSearchHovered] = useState(false);
    let closeTimer;

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

    return (
        <header className={styles.header}>
            

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
                                                <li><Link href="/item1">View all Moisturisers</Link></li>
                                            </ul>
                                        </div>
                                        <div className={styles.subcategory}>
                                            <h4>Cleansers</h4>
                                            <ul>
                                                <li><Link href="/item2">View all Cleansers</Link></li>
                                            </ul>
                                        </div>
                                        <div className={styles.subcategory}>
                                            <h4>Serums</h4>
                                            <ul>
                                                <li><Link href="/item3">View all Serums</Link></li>
                                            </ul>
                                        </div>
                                        <div className={styles.subcategory}>
                                            <h4>Toner</h4>
                                            <ul>
                                                <li><Link href="/item4">View all Toners</Link></li>
                                            </ul>
                                        </div>
                                        <div className={styles.subcategory}>
                                            <h4>SPF</h4>
                                            <ul>
                                                <li><Link href="/item5">View all SPF</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className={styles.menuItem}><Link href="/about">About Us</Link></li>
                        <li className={styles.menuItem}><Link href="/contact">Contact</Link></li>
                        <li className={styles.menuItem}><Link href="/quiz">Quiz</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={styles.right}>
                {/* Implementing the search bar with hover effect */}
                <div 
                    className={`${styles.searchContainer} ${isSearchHovered ? styles.expanded : ''}`}
                    onMouseEnter={() => setIsSearchHovered(true)}
                    onMouseLeave={() => setIsSearchHovered(false)}
                >
                    <IconSearch className={styles.iconSearch}/>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className={styles.searchInput}
                    />
                </div>
                <IconCart className={styles.iconCart}/>
                <IconWishlist className={styles.iconWishlist}/>
                <IconProfile className={styles.iconProfile}/>
            </div>
        </header>
    );
};

export default Header;
