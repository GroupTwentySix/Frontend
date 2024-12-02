"use client";

import React from 'react';
import styles from '@/app/components/homepage/section2.module.css';
import IconSun from './IconSun'; 
import IconCrueltyFree from './iconCrueltyFree'

export default function Section2() {
    const sections = [
        {
            title: "Natural Ingredients",
            description: "Natural ingredients are important to us and one of our key values.",
            icon: "sun" 
        },
        {
            title: "Cruelty Free",
            description: "Cruelty-free is important to us and one of our key values.",
            icon: "crueltyfree"
        },
        {
            title: "Fragrance Free",
            description: "Fragrance-free is important to us and one of our key values.",
            icon: "/path/to/fragrance-icon.png"
        },
        {
            title: "Paraben Free",
            description: "Paraben-free is important to us and one of our key values.",
            icon: "/path/to/paraben-icon.png"
        }
    ];

    const renderIcon = (icon) => {
        switch (icon) {
            case "sun":
                return <IconSun/>



                default:
                    return null;
        }
    }

    return (
        <div className={styles.sectionContainer}>
            {sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    {renderIcon(section.icon)}
                    <h3 className={styles.title}>{section.title}</h3>
                    <p className={styles.description}>{section.description}</p>
                </div>
            ))}
        </div>
    );
}
