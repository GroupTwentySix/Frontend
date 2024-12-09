"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { X, ShoppingBasket } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthContext';
import axios from "axios";

// Define the Product type
interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

// Function to fetch basket items
const getBasketItems = async (username: string | null): Promise<Product[]> => {
  if (!username) return [];
  const response = await axios.get(`http://localhost:7000/basket/${username}`);
  return response.data;
};

// Function to remove from basket
const removeFromBasket = async ({ username, productId }: { username: string, productId: string }) => {
  const response = await axios.delete(`http://localhost:7000/basket/${username}/${productId}`);
  return response.data;
};

export default function Basket() {
  const { username, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const { data: basketItems = [], isLoading } = useQuery({
    queryKey: ['basket', username],
    queryFn: () => getBasketItems(username),
    enabled: !!username && isAuthenticated, // Only run query when we have a username
  });

  const removeMutation = useMutation({
    mutationFn: (productId: string) => {
      if (!username) throw new Error('User not authenticated');
      return removeFromBasket({ username, productId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['basket'] });
      toast.success('Item removed from basket');
    },
    onError: () => {
      toast.error('Failed to remove item');
    }
  });

  const totalCost = basketItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isAuthenticated || !username) {
    return <div className="text-muted-foreground">Please log in to view your basket</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-light">Shopping Basket</h2>
      
      {basketItems.length === 0 ? (
        <div className="text-muted-foreground">
          Your basket is empty
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {basketItems.map((item: Product) => (
            <div 
              key={item.id} 
              className="bg-muted/50 p-4 rounded-xl"
            >
              {item.imageUrl && (
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="space-y-2">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-sm">Quantity: {item.quantity}</p>
                <div className="flex justify-end">
                  <button 
                    className="p-2 hover:bg-muted rounded-full"
                    onClick={() => removeMutation.mutate(item.id)}
                    disabled={removeMutation.isPending}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-muted/50 p-4 rounded-xl">
        <h3 className="font-medium">Order Summary</h3>
        <p className="text-sm">Total Cost: ${totalCost.toFixed(2)}</p>
        <button 
          className="mt-4 bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          onClick={() => window.location.href = '/checkout'}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
} 