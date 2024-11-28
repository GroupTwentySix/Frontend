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
            <div className={styles.left}>
            <Link href="/">
                    <h1 className={styles.logo}>Vitality</h1>
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
                                                <li><Link href="/item1">View all Moisturisers</Link></li>
                                            </ul>
                                        </div>

                                        <div className={styles.subcategory}>
                                            <h4>Cleansers</h4>
                                            <ul>
                                            <li><Link href="/item2">View all Cleansers</Link></li>
                                            </ul>
                                        </div>

                                        {/*add more subcatgeories here */}

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
                        <li className={styles.menuItem}><Link href="/aboutUs">About Us</Link></li>
                        <li className={styles.menuItem}><Link href="/contact">Contact</Link></li>
                        <li className={styles.menuItem}><Link href="/quiz">Quiz</Link></li>
                    </ul>
                </nav>
            </div>

            
            <div className={styles.right}>

                <Link href="/search">
                  <button className={styles.iconButton}>
                    <IconSearch className={styles.iconSearch}/>
                   </button>
                </Link>

                <Link href="/cart">
                  <button className={styles.iconButton}>
                  <IconCart className={styles.iconCart}/>
                   </button>
                </Link>

                <Link href="/wishlist">
                  <button className={styles.iconButton}>
                  <IconWishlist className={styles.iconWishlist}/>
                   </button>
                </Link>

                <Link href="/signIn">
                  <button className={styles.iconButton}>
                  <IconProfile className={styles.iconProfile}/>
                   </button>
                </Link>

            </div>

        </header>
    );
};

export default Header;