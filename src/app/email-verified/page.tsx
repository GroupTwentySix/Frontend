"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

export default function EmailVerified() {
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setVerificationStatus('error');
        return;
      }

      try {
        const response = await fetch(`http://localhost:7000/verify?token=${token}`);
        
        if (response.status === 200) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus('error');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '1.5rem',
            padding: '2rem',
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="space-y-6 text-center">
            {verificationStatus === 'loading' && (
              <h1 className="text-2xl font-light">Verifying your email...</h1>
            )}
            
            {verificationStatus === 'success' && (
              <>
                <h1 className="text-2xl font-light">Email Verified Successfully</h1>
                <p className="text-muted-foreground">
                  Your email has been verified. You can now log in to your account.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/login"
                    className="w-full inline-block bg-foreground text-background py-2 px-4 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Go to Login
                  </Link>
                </div>
              </>
            )}

            {verificationStatus === 'error' && (
              <>
                <h1 className="text-2xl font-light">Verification Failed</h1>
                <p className="text-muted-foreground">
                  We couldn't verify your email. The verification link might be expired or invalid.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/contact"
                    className="w-full inline-block bg-foreground text-background py-2 px-4 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Contact Support
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}