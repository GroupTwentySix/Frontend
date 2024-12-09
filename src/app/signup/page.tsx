"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { signup } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    try {
      setIsSubmitting(true);
      setFieldError(null); // Reset any previous errors
      const response = await signup(formData);
      toast.success(response.message);
      setIsVerificationSent(true);
      
    } catch (error: any) {
      console.error('Signup error:', error);
      
      // Set field error if username exists
      if (error.message.includes('Username already exists')) {
        setFieldError('username');
      }
      
      // Show toast notification
      toast.error(error.message, {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isVerificationSent) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Toaster />
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
              <h1 className="text-2xl font-light">Check your email</h1>
              <p className="text-muted-foreground">
                We've sent a verification link to <strong>{formData.email}</strong>. 
                Please check your email and click the link to verify your account.
              </p>
              <div className="pt-4">
                <Link 
                  href="/login"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Return to login
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Toaster />
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
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-light">Create an account</h1>
              <p className="text-sm text-muted-foreground mt-2">
                Enter your details to create your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm mb-2">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => {
                      setFormData({ ...formData, username: e.target.value });
                      if (fieldError === 'username') setFieldError(null);
                    }}
                    className={`w-full px-4 py-2 rounded-lg bg-background border 
                      ${fieldError === 'username' 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-foreground/10 focus:border-foreground/20'
                      } focus:outline-none`}
                  />
                  {fieldError === 'username' && (
                    <p className="text-red-500 text-sm mt-1">Username already exists</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>

                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background py-2 px-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Creating account...' : 'Sign up'}
              </button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-foreground hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}