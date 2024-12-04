"use client";

import React, { useState } from "react";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading...");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Thank you for subscribing!");
        setEmail(""); // Reset the input
      } else {
        setStatus("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <p>
          We are committed to providing quality skincare that keeps to our values and our missions. Making sure to be a
          green company and remain cruelty-free whilst providing the best customer service is important to us and part of
          what makes Vitality unique.
        </p>

        <div className={styles.newsletter}>
          <h3 className={styles.newsletterTitle}>Sign up for our newsletter</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Join Us
            </button>
          </form>
          <p>{status}</p>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.footerBottom}>
        <div className={styles.footerLinks}>
          <div className={styles.column}>
            <h4>Shop</h4>
            <Link href="#">All</Link>
            <Link href="#">Cleansers</Link>
            <Link href="#">Toners</Link>
            <Link href="#">SPF</Link>
            <Link href="#">Serums</Link>
            <Link href="#">Moisturisers</Link>
          </div>
          <div className={styles.column}>
            <h4>Customer Service</h4>
            <Link href="#">Contact us</Link>
            <Link href="#">Help & FAQ</Link>
            <Link href="#">Returns</Link>
          </div>
          <div className={styles.column}>
            <h4>About</h4>
            <Link href="#">About us</Link>
            <Link href="#">Mission statement</Link>
          </div>
        </div>

        <p className={styles.footerNote}>
          Vitality 2024 &nbsp; | &nbsp; <Link href="#">Terms of use</Link> &nbsp; | &nbsp;{" "}
          <Link href="#">Privacy</Link>
        </p>
      </div>
    </footer>
  );
}
