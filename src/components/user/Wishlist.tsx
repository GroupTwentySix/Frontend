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

// Function to fetch wishlist items
const getWishlistItems = async (username: string | null): Promise<Product[]> => {
  if (!username) return [];
  const response = await axios.get(`http://localhost:7000/wishlist/${username}`);
  return response.data;
};

// Function to remove from wishlist
const removeFromWishlist = async ({ username, productId }: { username: string, productId: string }) => {
  const response = await axios.delete(`http://localhost:7000/wishlist/${username}/${productId}`);
  return response.data;
};

// Function to add to basket
const addToBasket = async ({ username, productId, quantity }: { username: string, productId: string, quantity: number }) => {
  const response = await axios.post(
    `http://localhost:7000/basket/${username}/${productId}?quantity=${quantity}`
  );
  return response.data;
};

export default function Wishlist() {
  const { username, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  const { data: wishlistItems = [], isLoading } = useQuery({
    queryKey: ['wishlist', username],
    queryFn: () => getWishlistItems(username),
    enabled: !!username && isAuthenticated, // Only run query when we have a username
  });

  const removeMutation = useMutation({
    mutationFn: (productId: string) => {
      if (!username) throw new Error('User not authenticated');
      return removeFromWishlist({ username, productId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast.success('Item removed from wishlist');
    },
    onError: () => {
      toast.error('Failed to remove item');
    }
  });

  const addToBasketMutation = useMutation({
    mutationFn: (item: Product) => {
      if (!username) throw new Error('User not authenticated');
      return addToBasket({ 
        username, 
        productId: item.id,
        quantity: item.quantity 
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['basket'] });
      toast.success('Added to basket');
    },
    onError: () => {
      toast.error('Failed to add to basket');
    }
  });

  if (!isAuthenticated || !username) {
    return <div className="text-muted-foreground">Please log in to view your wishlist</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-light">Wishlist</h2>
      
      {wishlistItems.length === 0 ? (
        <div className="text-muted-foreground">
          Your wishlist is empty
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {wishlistItems.map((item: Product) => (
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
                <div className="flex space-x-2">
                  <button 
                    className="flex-1 bg-foreground text-background py-2 px-4 rounded-full hover:opacity-90 transition-opacity text-sm"
                    onClick={() => addToBasketMutation.mutate(item)}
                    disabled={addToBasketMutation.isPending}
                  >
                    Add to Basket
                  </button>
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
    </div>
  );
} 