"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from "./signIn.module.css";
import Link from "next/link"; 
import Header from '../components/header/header'
import Footer from '../components/footer'

export default function SignIn() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            // If token exists, redirect to home page
            router.push('/');
        }
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await fetch("http://localhost:7000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Login failed");
            }

            const data = await response.json();
            
            // Store the JWT token and username
            localStorage.setItem('jwt_token', data.token);
            localStorage.setItem('username', username);
            
            setSuccess(`Welcome back, ${username}!`);

            // Redirect after successful login
            setTimeout(() => {
                router.push('/');
            }, 1500);

        } catch (err) {
            setError(err.message);
            localStorage.removeItem('jwt_token');
            localStorage.removeItem('username');
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
