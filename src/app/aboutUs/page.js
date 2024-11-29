"use client";

import Header from '../components/header/header'

import React from 'react';
import Link from 'next/link';
import styles from './aboutUs.module.css';
import Footer from '../components/footer';


export default function AboutUs() {

    return (
        <>
   
    <main className={styles.main}>

    <Header/>



        <section className={styles.aboutus}>
                <div className={styles.text}>
                    <h2>About us</h2>
                </div>
            </section>


            <section className={styles.firstContainer}>
                <div className={styles.firstLeft}>
                    <h2>Our story</h2>
                   
                        <p>
                            We believe in creating a quality range of self care products with sustainability in mind.
                            its our passion to provide products that reflect our values and ethics which is why all
                            of our ingredients are ethically sourved and contain no fragrances and were made cruelty free.

                        
                </p>
                <p>
                                We belive in creating a quaity range of self care products with sustainability in mind. its
                                our passion to provide products that reflect.
                            </p>
                
            </div>

            <div className={styles.firstRight}>
                <img src="/images/section3image.jpg" alt="image"/>
                </div>
        </section>
        
        
        <div className={styles.centeringContainer}>
    <section className={styles.quoteBar}>
        <div className={styles.text}>
            <h2>Vitality Quote</h2>
            <h3> - </h3>
            <h4>
                True beauty comes from embracing nature's gifts and giving back to our environement to keep it thriving. Vitality is about nurturing your skin and the world around you by celebrating the natural.
            </h4>
            <h3> - </h3>
            <footer>
                — Founders, London
            </footer>
        </div>
    </section>
</div>
            
            
            <section className={styles.secondContainer}>


                <div className={styles.secondLeft}>
                    <img src="/images/section1image.jpg"/>
                    </div>

                <div className={styles.secondRight}>
                    
                        <h2>Mission statement</h2>
                        <p>
                            We believe in creating a quality range of self care products with sustainability in mind.
                            its our passion to provide products that reflect our values and ethics which is why all
                            of our ingredients are ethically sourved and contain no fragrances and were made cruelty free.
                            
                        </p>
                        <p>
                                We belive in creating a quaity range of self care products with sustainability in mind. its
                                our passion to provide products that reflect.
                            </p>
                    

                </div>
            </section>

    </main>
    
    <Footer />
    </>
    
    )
}