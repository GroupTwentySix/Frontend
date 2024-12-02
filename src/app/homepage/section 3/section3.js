"use client";

import React, { useState, useEffect } from 'react';
import styles from './section3.module.css';
import Link from 'next/Link';

export default function Section3 () {
    return (
        <div className={styles.sectionContainer}>

            <div className={styles.left}>
                <img src="/images/section3image.jpg" alt="Organic natural plants and ingredients" ></img>
            </div>


            <div className={styles.right}>
                <h1>Our Story</h1>
                <p>
                    We believe in creating a quality range of self-care products with sustainability at the heart of everything we do. It’s our passion to provide products that reflect our values and ethics, which is why all of our ingredients are ethically sourced, free from fragrances, parabens, and 100% cruelty-free.
                </p>
                <p className={styles.lastp}>
                Caring for our skin should never come at the cost of our planet. That’s why we are committed to using only the kindest, most natural ingredients—without harsh chemicals—to ensure you can nurture yourself while protecting the Earth. 
                </p>
                <Link href="/aboutUs">
                <button className={styles.sec3Button}>Read more</button>
                </Link>
            </div>

        </div>
    )
}