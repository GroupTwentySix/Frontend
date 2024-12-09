"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, ShoppingBasket, Heart, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import Profile from '@/components/user/Profile';
import Basket from '@/components/user/Basket';
import Wishlist from '@/components/user/Wishlist';
import Orders from '@/components/user/Orders';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Tab = 'profile' | 'basket' | 'wishlist' | 'orders';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const { isAuthenticated, username } = useAuth();
  const router = useRouter();

  // Add loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication and username
    if (!isAuthenticated || !username) {
      router.push('/login');
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated, username, router]);

  // Show loading state or return null while checking auth
  if (isLoading || !username) {
    return null;
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'basket', label: 'Basket', icon: <ShoppingBasket className="w-5 h-5" /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart className="w-5 h-5" /> },
    { id: 'orders', label: 'Orders', icon: <Package className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-light">My Account</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back, {username}
          </p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-accent text-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="mt-8 lg:mt-0 lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {(() => {
                switch (activeTab) {
                  case 'profile':
                    return <Profile />;
                  case 'basket':
                    return <Basket />;
                  case 'wishlist':
                    return <Wishlist />;
                  case 'orders':
                    return <Orders />;
                  default:
                    return null;
                }
              })()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 