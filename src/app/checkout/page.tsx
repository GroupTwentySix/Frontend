"use client";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import Image from 'next/image';

// Define the Product type
interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

export default function Checkout() {
  const { username } = useAuth();
  const { data: basketItems = [] } = useQuery<Product[]>({
    queryKey: ['basket', username],
    queryFn: () => axios.get(`http://localhost:7000/basket/${username}`).then(res => res.data),
    enabled: !!username,
  });

  const totalCost = basketItems.reduce((total: number, item: Product) => total + item.price * item.quantity, 0);

  const handlePurchase = () => {
    toast.success('This is a dummy purchase button');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-light mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-light mb-4">Order Items</h2>
          {basketItems.map((item: Product) => (
            <div key={item.id} className="flex gap-4 bg-muted/50 p-4 rounded-xl">
              {/* Product Image */}
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              {/* Product Details */}
              <div className="flex-grow flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  <p className="text-sm text-muted-foreground mt-2">Quantity: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary and Form Section */}
        <div className="lg:col-span-1">
          <div className="bg-muted/50 p-6 rounded-xl sticky top-24">
            <h2 className="text-xl font-light mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-foreground/10 pt-4">
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${totalCost.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <form className="mt-8 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm text-muted-foreground mb-2">
                  Shipping Address
                </label>
                <textarea 
                  id="address" 
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20 resize-none" 
                  required 
                />
              </div>

              <button 
                type="button" 
                onClick={handlePurchase} 
                className="w-full bg-foreground text-background py-4 px-6 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Complete Purchase</span>
                <span className="text-sm opacity-75">${totalCost.toFixed(2)}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}