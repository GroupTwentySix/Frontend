'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sun, Moon, ShoppingCart, UserCircle, Heart } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import Search from './Search';
import Image from 'next/image';

export default function Navigation() {
  const { isAuthenticated, username, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle hydration mismatch for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { label: 'Products', href: '/products' },
    { label: 'FAQ', href: '/faq' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - removed border */}
          <Link 
            href="/" 
          >
            <Image 
              src="/vitality-logo.png" 
              alt="Vitality Logo" 
              width={80} 
              height={50} 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm hover:text-primary transition-colors px-3 py-2 rounded-md border border-foreground/5"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - removed searchbar border */}
          <div className="flex items-center space-x-4">
            <div className="rounded-md">
              <Search />
            </div>
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-muted rounded-md transition-colors border border-foreground/5"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/wishlist"
                  className="p-2 hover:bg-muted rounded-md transition-colors border border-foreground/5"
                  aria-label="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                </Link>
                <Link
                  href="/basket"
                  className="p-2 hover:bg-muted rounded-md transition-colors border border-foreground/5"
                  aria-label="Shopping Basket"
                >
                  <ShoppingCart className="w-5 h-5" />
                </Link>
                <Link
                  href="/user"
                  className="flex items-center space-x-2 text-sm hover:text-primary transition-colors px-3 py-2 rounded-md border border-foreground/5"
                >
                  <UserCircle className="w-5 h-5" />
                  <span className="hidden lg:inline">{username}</span>
                </Link>
                <button
                  onClick={logout}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm hover:opacity-90 transition-opacity border border-primary/10"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  href="/login"
                  className="text-sm hover:text-primary transition-colors px-3 py-2 rounded-md border border-foreground/5"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm hover:opacity-90 transition-opacity border border-primary/10"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 