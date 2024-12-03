"use client"; 
import React, { useState } from "react";
import styles from "./products.module.css";
import Header from "../components/header/header";
import Footer from '../components/footer'

// Example product data from the database
const productData = [
  { id: 1, name: "Glow and restore", description: "Hyaluronic Serum", price: 23, image: "/images/section1image.jpg" },
  { id: 2, name: "Hydrate Boost", description: "Moisturizer", price: 18, image: "/images/faceImage1.jpg" },
  { id: 3, name: "Renew Cleanser", description: "Gentle Face Wash", price: 20, image: "/images/section3image.jpg" },
  { id: 4, name: "Daily SPF", description: "Sunscreen SPF 50", price: 25, image: "/images/step1.jpeg" },
  { id: 5, name: "Toner Refresh", description: "Balancing Toner", price: 15, image: "/images/step2.jpeg" },
  { id: 6, name: "Repair Serum", description: "Vitamin C Serum", price: 30, image: "/images/step3.jpeg" },
];



export default function Products() {
  const [products, setProducts] = useState(productData); // State to manage product list
  const [sortOrder, setSortOrder] = useState(null); // State to track sort order

  const sortProducts = (order) => {
    const sorted = [...products].sort((a, b) => {
      if (order === "low-to-high") return a.price - b.price;
      if (order === "high-to-low") return b.price - a.price;
      return 0;
    });
    setProducts(sorted);
    setSortOrder(order);
  };

  return (
    <div className={styles.productsPage}>
      {/* Header Component */}
      <Header />

      <div className={styles.container}>
        

        {/* Categories */}
        <div className={styles.categories}>
          <button className={`${styles.categoryBtn} ${styles.active}`}>All</button>
          <button className={styles.categoryBtn}>Serums</button>
          <button className={styles.categoryBtn}>Moisturisers</button>
          <button className={styles.categoryBtn} >Cleanser</button>
          <button className={styles.categoryBtn}>Toner</button>
          <button className={styles.categoryBtn}>SPF</button>
        </div>

        {/* Sort Button */}
        <div className={styles.sortContainer}>
          <div className={styles.dropdown}>
            <button className={styles.sortBtn}>Sort</button>
            <div className={styles.dropdownMenu}>
              <button
                className={`${styles.dropdownItem} ${sortOrder === "low-to-high" ? styles.active : ""}`}
                onClick={() => sortProducts("low-to-high")}
              >
                Low to High
              </button>
              <button
                className={`${styles.dropdownItem} ${sortOrder === "high-to-low" ? styles.active : ""}`}
                onClick={() => sortProducts("high-to-low")}
              >
                High to Low
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
             <img
                src={product.image}
                alt={product.name}
                className={styles.productImage}
              />

            <h2 className={styles.productTitle}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>£{product.price}</p>
            <button className={styles.addToBagBtn}>Add to bag</button>
          </div>
        ))}
        </div>

      </div>
      {/* Footer Component */}
<Footer />
    </div>
  );

      
}
