"use client";

import React, { useState, useEffect } from 'react';
import styles from './section6.module.css';
import Link from 'next/Link';

// this page (section 6) is for the reviews on the homepage


    const reviewSets = [
    
    [
        {name: "Mary Sue", text: "Absolutly love these products! My skin has never felt better."},
        {name: "John Smith", text: "High quality and eco-friendly. Everything I wanted in a skincare brand"},
        {name: "Simonne Biles", text: "Fantastic products for an amazing price. Highly reccomend!"},
        {name: "Emilia White", text: "Will not be going back to my old products. Amazed at the results of finally having clear, healthy skin!"}
    ],

    [
        {name: "Diana Ross", text: "Gentle on my skin, contains nothing harmful which I love."},
        {name: "Frida Ramirez", text: "Was recommened to try from a friend. Not dissapointed at all."},
        {name: "Efia Owusu", text: "Will definitly recommend, especially the SPF 50+!"},
        {name: "Ifrah Aziz ", text: "Life saving skincare, I thought nothing would work for me. This was perfect."}
    ],

    [
        {name: "Lily Evans", text: "The perfect range of products for anyone with sensitive skin."},
        {name: "Jane Doe", text: "Amazing customer service and a wide range of products. 10/10"},
        {name: "Mei Chén.", text: "Will be coming back. My new favourite skincare brand."},
        {name: "Shaun Mendes ", text: "The Niacinimde serum has completly changed my life. I STRONGLY reccommend."}
    ]
  ];

  export default function Section6() {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);

    // the cycling through the review sets function per 3 seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSetIndex((prevIndex) => (prevIndex + 1) % reviewSets.length);
        }, 3000);

        return () => clearInterval(interval);
   
    }, []
);

    const currentReviews = reviewSets[currentSetIndex];

    return (

        <div className={styles.main}>
            <h1 className={styles.secName}>What our customers say</h1>
            <h3 className={styles.secName2}>Verified Vitality Customers</h3>
            <section className={styles.reviews}>
                {currentReviews.map((review, index) => (
                    <div key={index} className={styles['reviewCard']}>
                        <p className={styles.text}>{review.text}</p>
                        <p className={styles.name}>— {review.name}</p>

                    </div>
                )
                
                
                
                )}


            </section>

        </div>


    );






}