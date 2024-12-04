"use client";

import React from "react";
import styles from "./faq.module.css";

const FAQ = () => {
  return (
    <main className={styles.faqContainer}>
      {/* Page Title */}
      <h1 className={styles.faqTitle}>FAQ</h1>

      {/* Buttons to Switch FAQ Sections */}
      <section className={styles.faqSection}>
        <div className={styles.faqBoxContainer}>
          <label className={styles.faqBox} htmlFor="orders">ORDERS</label>
          <label className={styles.faqBox} htmlFor="payment">PAYMENT</label>
          <label className={styles.faqBox} htmlFor="accounts">ACCOUNTS</label>
          <label className={styles.faqBox} htmlFor="products">PRODUCTS</label>
          <label className={styles.faqBox} htmlFor="shipping">SHIPPING</label>
          <label className={styles.faqBox} htmlFor="contact">CONTACT</label>
        </div>
      </section>

      {/* Hidden Inputs for Section Selection */}
      <input type="radio" id="orders" name="faq-category" defaultChecked />
      <input type="radio" id="payment" name="faq-category" />
      <input type="radio" id="accounts" name="faq-category" />
      <input type="radio" id="products" name="faq-category" />
      <input type="radio" id="shipping" name="faq-category" />
      <input type="radio" id="contact" name="faq-category" />

      {/* FAQ Content Section */}
      <section className={styles.faqContentContainer}>
        {/* Orders FAQ */}
        <div id="faq-orders" className={styles.faqContent}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Can I cancel my order?</summary>
            <p className={styles.faqAnswer}>
              Yes, you can cancel your order within 24 hours of placing it. After
              that, it may not be possible to cancel.
            </p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              I put in the wrong address for my order, what should I do?
            </summary>
            <p className={styles.faqAnswer}>
              You can update your order details within 24 hours by contacting
              customer service. Changes may not be possible after processing
              begins.
            </p>
          </details>

          {/* Add the rest of the FAQs similarly */}
        </div>

        {/* Payment FAQ */}
        <div id="faq-payment" className={styles.faqContent}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              What payment methods do you accept?
            </summary>
            <p className={styles.faqAnswer}>
              We accept credit cards, PayPal, and other online payment options.
            </p>
          </details>

          {/* Add the rest of the FAQs similarly */}
        </div>

        {/* Accounts FAQ */}
        <div id="faq-accounts" className={styles.faqContent}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              How do I create an account?
            </summary>
            <p className={styles.faqAnswer}>
              Click on the Sign Up button on the homepage and fill in your
              details to create an account.
            </p>
          </details>

          {/* Add the rest of the FAQs similarly */}
        </div>

        {/* Products FAQ */}
        <div id="faq-products" className={styles.faqContent}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              Are your products eco-friendly?
            </summary>
            <p className={styles.faqAnswer}>
              Yes, we ensure that most of our products are made using sustainable
              and eco-friendly materials.
            </p>
          </details>

          {/* Add the rest of the FAQs similarly */}
        </div>

        {/* Shipping FAQ */}
        <div id="faq-shipping" className={styles.faqContent}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              What are your shipping options?
            </summary>
            <p className={styles.faqAnswer}>
              We offer standard, expedited, and express shipping options.
              Delivery times depend on your location and selected method.
            </p>
          </details>

          {/* Add the rest of the FAQs similarly */}
        </div>

        {/* Contact FAQ */}
        <div id="faq-contact" className={styles.faqContent}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>
              How can I contact customer support?
            </summary>
            <p className={styles.faqAnswer}>
              You can contact us via email at Vitalitysupport@example.com or call
              us at 01922 700 111.
            </p>
          </details>

          {/* Add the rest of the FAQs similarly */}
        </div>
      </section>
    </main>
  );
};

export default FAQ;
