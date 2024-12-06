"use client";

import React, { useState } from "react";
import styles from "./section4.module.css";
import Link from "next/link"; 

export default function Section4() {
  const categories = [
    { id: 1, name: "Shop All", image: "images/section1image.jpg", link: "/products" },
    { id: 2, name: "Cleansers", image: "images/section1image.jpg", link: "/products" },
    { id: 3, name: "Toners", image: "images/section1image.jpg", link: "/products" },
    { id: 4, name: "SPF", image: "images/section1image.jpg", link: "/products" },
    { id: 5, name: "Moisturisers", image: "images/section1image.jpg", link: "/products" },
    { id: 6, name: "Serums", image: "images/section1image.jpg", link: "/products" },
  ];

  const [position, setPosition] = useState(0);

  const slideRight = () => {
    if (position < categories.length - 4) {
      setPosition(position + 2);
    }
  };

  const slideLeft = () => {
    if (position > 0) {
      setPosition(position - 2);
    }
  };

  return (

    <div className={styles.sectionContainer}>

<div className={styles.message}>
        <p className={styles.one}>Discover clean and effective skincare</p>
        <p className={styles.two}>Only natural ingredients</p>
      </div>


<div className={styles.carouselContainer}>
      {position > 0 && (
        <button className={styles.arrowLeft} onClick={slideLeft}>
          &#x276E;
        </button>
      )}

    


      <div className={styles.carouselTrack}>
        <div
          className={styles.carouselItems}
          style={{ transform: `translateX(-${position * 25}%)` }}
        >
          {categories.map((category) => (
            <div key={category.id} className={styles.carouselItem}>
              <div className={styles.imageContainer}>
                
                <Link href={category.link}>
                  <img
                    src={category.image}
                    alt={category.name}
                    className={styles.categoryImage}
                  />
                </Link>
              </div>
              <div className={styles.textContainer}>
                
                <Link href={category.link}>
                  <p>{category.name}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {position < categories.length - 4 && (
        <button className={styles.arrowRight} onClick={slideRight}>
          &#x276F;
        </button>
      )}
    </div>
    </div>
    

    
  );
}
