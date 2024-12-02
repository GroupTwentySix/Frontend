"use client";

import React from 'react';
import styles from './section2.module.css';
import IconNatural from './iconNatural'
import IconCrueltyFree from './iconCrueltyFree'
import IconFragranceFree from './iconFragranceFree'
import IconParabenFree from './iconParabenFree'

export default function Section2() {

    const sections = [
        {
            title: "Natural ingredients",
            description: "Utilising the power of nature with carefully chosen ingredients to nuture all skin types.",
            icon: "natural"
        },
        {
            title: "Cruelty Free",
            description: "Our products are and will always be cruelty-free - no animal testing, ever.",
            icon: "crueltyFree"
        },
        {
            title: "Fragrance Free",
            description: "Fragrence free formulas for gentle, irritation free care, suitable for even the most sensitive.",
            icon: "fragranceFree"
        },
        {
            title: "Paraben Free",
            description: "Clean formulas you can feel good about - always free from parabens and harsh chemicals.",
            icon: "parabenFree"
        }
    ];

    const renderIcon = (icon) => {
        switch (icon) {
            case "natural":
                return <IconNatural/>

            case "crueltyFree":
                return <IconCrueltyFree/>

            case "fragranceFree":
                return <IconFragranceFree/>   
                
            case "parabenFree":
                return <IconParabenFree/>

                default:
                    return null;
        };

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
    )

}