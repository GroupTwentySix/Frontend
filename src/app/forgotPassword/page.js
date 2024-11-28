"use client";

import React, { useState } from "react";
import styles from "./forgotPassword.module.css";
import Link from "next/link"; 
import Header from '../components/header/header';

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSendCode = () => {
      if (!email) {
        alert("Please enter your email.");
        return;
      }
      alert(`Verification code sent to ${email}`);
    };
  
    const handleResetPassword = (e) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Password has been reset successfully!");
    };
  
    return (
      <>
        <Header />
        <main className={styles.authContainer}>
          <div className={styles.forgotPasswordSection}>
            <h2>Forgot Password</h2>
            <Link href="/signIn" className={styles.textButton}>
              Go back to Sign In
            </Link>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                id="send-code-btn"
                type="button"
                onClick={handleSendCode}
              >
                Send Code
              </button>
  
              <div className={styles.codeInputs}>
                {Array.from({ length: 6 }).map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    className={styles.codeBox}
                  />
                ))}
              </div>
  
              <input
                type="password"
                id="new-password"
                placeholder="New Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm New Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button id="reset-password-btn" type="submit">
                Reset Password
              </button>
            </form>
          </div>
        </main>
      </>
    );
  }