"use client";

import React, { useState, useEffect } from 'react';
import styles from './section1.module.css';
import Link from 'next/Link';

export default function Section1() {
    const [index, setIndex] = useState(0);

    const content = [
        {
            headline: {line1: "Feel good", line2: "natural skincare"},
            subheading: "Made using organic ingredients for all skin types.",
            image: "/images/section1image.jpg"
        },
        {
            headline: { line1: "Transform", line2: "your routine"},
            subheading: "Skincare tailored personally for you.",
            image: "/images/faceImage1.jpg"
        }
    ];

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % content.length);
    };

    /* automatically change the content slides every specified time */
    useEffect(() => {
        const interval = setInterval(handleNext, 4000);

        return () => clearInterval(interval)
        
    }, [index]);

    return(
        <div className={styles.sectionContainer}>
            <div className={styles.left}>
                <h2 className={styles.headline}>
                    <span className={styles.line1}>{content[index].headline.line1}</span>
                    <br />
                    <span className={styles.line2}>{content[index].headline.line2}</span>
                </h2>
                <p className={styles.subheading}>{content[index].subheading}</p>

                <Link href="/products">
                <button className={styles.sec1Button}>Shop Now</button>
                </Link>

            

            </div>

            <div className={styles.right}>
                <img src={content[index].image} alt="Skincare product" className={styles.image} />
                <button
                className={styles.arrowButton} 
                onClick={() => {
                    handleNext();
                }
                }
                >
                    ➔

                </button>
            </div>

        </div>

    );

}

/* section 1 shows a product advertisment slideshow and a button to shop products*/