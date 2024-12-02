import React from 'react';
import styles from './section2.module.css';

const IconCrueltyFree = () => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon} 
        >
            <path
                d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                stroke={color}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default IconCrueltyFree;
