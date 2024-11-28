"use client";

import React, { useState } from "react";
import styles from "./createAccount.module.css"; 
import Link from "next/link"; 
import Header from '../components/header/header'

export default function CreateAccount() {

    {/*copied and pasted Lindsays code from her folder to avoid conflicted file.*/}

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }
    );

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert(`Account created for ${formData.firstName} ${formData.lastName}`);
    };



    return (
        <>
        <Header />
        <main className={styles.main}>
            <div className={styles.authContainer}>
                <h2>Create Account</h2>
                <Link href="/signIn" className={styles.textButton}>
                  Go back to Sign In
                </Link>
                <form onSubmit={handleSubmit}>

                    <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    required 
                    className={styles.inputField} 
                    value={formData.firstName}
                    onChange={handleChange}
                    
                    />



                    <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" 
                    required 
                    className={styles.inputField} 
                    value={formData.lastName}
                    onChange={handleChange}
                    
                    />
                    
                    
                    <input 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required 
                    className={styles.inputField} 
                    value={formData.email}
                    onChange={handleChange}
                    
                    />
                    
                    
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    required 
                    className={styles.inputField} 
                    value={formData.password}
                    onChange={handleChange}
                    
                    />
                   
                   
                    <input 
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirm Password" 
                    required 
                    className={styles.inputField} 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    />
                    
                    
                    <button type="submit" className={styles.submitButton}>Create Account</button>
                </form>
            </div>
        </main>
     </>
    );
}
