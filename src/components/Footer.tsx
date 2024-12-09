"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here (not fully done)
    setEmail('');
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="bg-muted/50 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Natural Skincare</h3>
              <p className="text-sm text-muted-foreground">
                Discover the power of natural ingredients for your skin. 
                Join our community for exclusive offers and skincare tips.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                <span>Subscribe to newsletter</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Quick Links</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/products" className="hover:text-foreground transition-colors">Products</Link></li>
                <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Help</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/shipping" className="hover:text-foreground transition-colors">Shipping Information</Link></li>
                <li><Link href="/returns" className="hover:text-foreground transition-colors">Returns Policy</Link></li>
                <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-foreground/5">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Natural Skincare. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Subscribe Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-background rounded-2xl shadow-lg max-w-md w-full p-6 border border-foreground/5">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-medium">Join our newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to get special offers, free giveaways, and product launches.
              </p>

              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full border border-foreground/10 bg-muted/50 focus:outline-none focus:border-foreground/20"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-foreground text-background px-8 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 