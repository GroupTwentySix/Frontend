import React from 'react';
import styles from './section2.module.css'; // Assuming this is where your styles are defined

const IconSun = () => {
    return (
        <svg
            width="100%" // Set width to 100% to allow CSS to control size
            height="100%" // Set height to 100%
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.iconSun} // CSS class for styling
        >
            <g clipPath="url(#clip0_3_346)">
                <path
                    d="M24 2V6M24 42V46M8.44 8.44L11.28 11.28M36.72 36.72L39.56 39.56M2 24H6M42 24H46M8.44 39.56L11.28 36.72M36.72 11.28L39.56 8.44M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                    className={styles.iconPath} // You can style the path too
                />
            </g>
            <defs>
                <clipPath id="clip0_3_346">
                    <rect width="48" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default IconSun;
