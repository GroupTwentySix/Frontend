"use client";

import React, { useState } from "react";
import styles from "./section5.module.css";
import Link from "next/link"; 



export default function Section5() {

    return (
        <div className={styles.sectionContainer}>

            <div className={styles.left}>

                <h2 className={styles.heading1}>Take our skincare quiz</h2>
                <h3 className={styles.heading2}>Tailored for you</h3>
                <p className={styles.p1}>Discover what products work for you with our personalised quiz
                that puts your needs as the priority.</p>
                <p className={styles.p2}>Curated by our experts to
                provide the best self-care regime for your skin.</p>

                <button>
                    Build your regime
                </button>
            </div>


            <div className={styles.right}>

                <div className={styles.mini}>
                    <h2 className={styles.steps}>Step 1: <span className={styles.product}>Cleanse</span></h2>

                    <img
                    src="/images/step1.jpeg" className={styles.stepsImage}
                    />

                    <button className={styles.stepsButton}>View Cleansers</button>
                </div>


                <div className={styles.mini}>
                    <h2 className={styles.steps}>Step 2: <span className={styles.product}>Tone</span></h2>

                    <img
                    src="/images/step2.jpeg" className={styles.stepsImage}
                    />

                    <button className={styles.stepsButton}>View Toners</button>
                </div>


                <div className={styles.mini}>
                    <h2 className={styles.steps}>Step 3: <span className={styles.product}>Moisturise</span></h2>

                    <img
                    src="/images/step3.jpeg" className={styles.stepsImage}
                    />

                    <button className={styles.stepsButton}>View Moisturisers</button>
                </div>

                

            </div>

        </div>

    )
    
}