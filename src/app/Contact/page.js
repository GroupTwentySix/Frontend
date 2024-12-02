"use client";

import React, { useState } from "react";
import styles from "./contact.module.css"; 
import Link from "next/link"; 
import Header from '../components/header/header'
import Footer from '../components/footer'

export default function Contact() {

    
        const [formData, setFormData] = useState({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            order_number: "",
            question_about: "",
            comments: "",
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ( {
                ...prev,
                [name]: value,
            }

            )
            );
        };

            const handleSubmit = (e) => {
                e.preventDefault();
                console.log("Form submitted:", formData);

            };

        



    



    return (
    <>
    <Header />
    <section className={styles.contactSection}>
        <div className={styles.container}>
            <h1 className={styles.h1}>Contact Us</h1>
            <p className={styles.contactInfo}>
                Our customer service team is available via email Monday - Friday, 9AM - 5PM GMT excluding holidays. 
                Send us an email at VitalitySkincare@gmail.com. 
                We generally respond to all inquiries within 5-7 business days.
            </p>
            <h2 className={styles.formTitle}>Contact Form</h2> 

            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                    <input 
                    type="text" 
                    id="first-name" 
                    name="first_name" 
                    placeholder="First Name" 
                    onChange={handleChange}
                    value={formData.first_name}
                    required
                    />

                    <input 
                    type="text" 
                    id="last-name" 
                    name="last_name" 
                    placeholder="Last Name" 
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    />

                </div>

                <div className={styles.formRow}>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email Address" 
                    onChange={handleChange}
                    value={formData.email}
                    required
                    />

                    <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Phone Number" 
                    onChange={handleChange}
                    value={formData.phone}
                    required
                    />
                </div>

                <div className={styles.formRow}>
                    <input 
                    type="text" 
                    id="order-number" 
                    name="order_number" 
                    placeholder="Order Number" 
                    onChange={handleChange}
                    value={formData.order_number}
                    />

                    <div className={styles.selectContainer}>
                        <select id="question-about" name="question_about" onChange={handleChange} value={formData.question_about} required className={styles.pinkBackground}>
                            <option value="" disabled >My Question is About...</option>
                            <option value="product">Product Inquiry</option>
                            <option value="order">Order Status</option>
                            <option value="support">Technical Support</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className={styles.formRow}>
                    <textarea id="comments" name="comments" rows="4" maxLength="1000" placeholder="Your Comments (max 1000 characters)" onChange={handleChange} value={formData.comments} required></textarea>
                </div>
                <div className={styles.formRow}>
                    <button type="submit" className={styles.submitButton}>Submit</button>
                </div>
            </form >
        </div>
    </section >
    <Footer />
    </>
     )
}