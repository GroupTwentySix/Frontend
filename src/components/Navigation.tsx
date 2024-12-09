'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Sun, Moon, ShoppingBasket, User, UserCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Search from './Search';

export default function Navigation() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const { isAuthenticated, username, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-medium">
            Vitality
          </Link>

          {/* Search - New addition */}
          <div className="hidden md:block flex-1 mx-8">
            <Search />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Shop Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:text-foreground/80"
                onClick={() => setIsShopOpen(!isShopOpen)}
              >
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isShopOpen && (
                <div className="absolute top-full left-0 bg-background border border-foreground/5 rounded-lg shadow-lg py-2 w-48">
                  <Link href="/products" className="block px-4 py-2 hover:bg-muted">
                    All Products
                  </Link>
                  <Link href="/products/cleansers" className="block px-4 py-2 hover:bg-muted">
                    Cleansers
                  </Link>
                  <Link href="/products/toners" className="block px-4 py-2 hover:bg-muted">
                    Toners
                  </Link>
                  <Link href="/products/moisturizers" className="block px-4 py-2 hover:bg-muted">
                    Moisturizers
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="hover:text-foreground/80">About</Link>
            <Link href="/blog" className="hover:text-foreground/80">Blog</Link>
            <Link href="/contact" className="hover:text-foreground/80">Contact</Link>

            {/* Help Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:text-foreground/80"
                onClick={() => setIsHelpOpen(!isHelpOpen)}
              >
                <span>Help</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isHelpOpen && (
                <div className="absolute top-full left-0 bg-background border border-foreground/5 rounded-lg shadow-lg py-2 w-48">
                  <Link href="/faq" className="block px-4 py-2 hover:bg-muted">
                    FAQ
                  </Link>
                  <Link href="/shipping" className="block px-4 py-2 hover:bg-muted">
                    Shipping
                  </Link>
                  <Link href="/returns" className="block px-4 py-2 hover:bg-muted">
                    Returns
                  </Link>
                  <Link href="/terms" className="block px-4 py-2 hover:bg-muted">
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Theme toggle and Auth */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm hidden md:inline">Welcome, {username}</span>
                <Link
                  href="/user"
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <UserCircle className="w-5 h-5" />
                </Link>
                <button
                  onClick={logout}
                  className="bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-sm hover:text-accent">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-foreground text-background px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Search - New addition */}
        <div className="md:hidden pb-4">
          <Search />
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-foreground/10 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                width: '100%',
                padding: '1rem'
              }}
            >
              <div className="space-y-4">
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/user"
                      className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      My Account
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="block px-4 py-2 hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
} 