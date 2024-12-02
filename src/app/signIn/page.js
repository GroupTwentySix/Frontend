"use client";


import React, { useState } from "react";
import styles from "./signIn.module.css";
import Link from "next/link"; 
import Header from '../components/header/header'
import Footer from '../components/footer'

{/*copied and pasted Lindsays code from her folder to avoid conflicted file.*/}

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Sign In attempt with Email: ${email}`);
    };


    return (
        <>
        <Header />
        <main className={styles.main}>
            <div className={styles.authContainer}>
                <div className={styles.signinSection}>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                       
                       
                        <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        
                        <button type="submit">Sign In</button>
                    </form>
                    <Link href="/forgotPassword" className={styles.forgotPassword}>
                        Forgot Password?
                    </Link>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.signupSection}>
                    <h2>New Account</h2>
                    <Link href="/createAccount">
                            <button>Create Account</button>
                        </Link>
                </div>
            </div>
        </main>
        <Footer />
        </>
    );
}