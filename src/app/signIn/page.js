"use client";

import React, { useState } from "react";
import styles from "./signIn.module.css";
import Link from "next/link"; 
import Header from '../components/header/header'
import Footer from '../components/footer'

{/* Copied and pasted Lindsay's code from her folder to avoid conflicted file. */}

export default function SignIn() {

    const [username, setUsername] = useState(""); // Updated to username
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // For error messages
    const [success, setSuccess] = useState(""); // For success messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        setSuccess(""); // Clear previous successes

        try {
            const response = await fetch("https://e4cf-134-151-21-61.ngrok-free.app/login", { // Adjust to your backend URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }), // Use username here
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Login failed");
            }

            const data = await response.json();
            setSuccess(`Welcome back, ${data.userName || username}!`);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
        <Header />
        <main className={styles.main}>
            <div className={styles.authContainer}>
                <div className={styles.signinSection}>
                    <h2>Sign In</h2>
                    {error && <p className={styles.error}>{error}</p>} {/* Display error */}
                    {success && <p className={styles.success}>{success}</p>} {/* Display success */}
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="Username" // Updated placeholder
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Updated to setUsername
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
