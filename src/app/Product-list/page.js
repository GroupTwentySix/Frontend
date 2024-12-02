"use client"; 
import React from "react";
import styles from "./products.module.css";
import Header from '../components/header/header'


const products = [
  { id: 1, name: "Glow and restore", description: "Hyaluronic Serum", price: "£23" },
  { id: 2, name: "Glow and restore", description: "Hyaluronic Serum", price: "£23" },
  { id: 3, name: "Glow and restore", description: "Hyaluronic Serum", price: "£23" },
  { id: 4, name: "Glow and restore", description: "Hyaluronic Serum", price: "£23" },
  { id: 5, name: "Glow and restore", description: "Hyaluronic Serum", price: "£23" },
  { id: 6, name: "Glow and restore", description: "Hyaluronic Serum", price: "£23" },
];

const ProductListPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Include Header Component */}
      <Header />

      {/* Main Section */}
      <main className={styles.main}>
        {/* Categories Section */}
        <section className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>Products</h2>
          <div className={styles.categories}>
            {["All", "Serums", "Moisturisers", "Cleanser", "Toner", "SPF"].map((category) => (
              <button key={category} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}></div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.addToBagButton}>Add to bag</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
