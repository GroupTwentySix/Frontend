"use client";

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, ShoppingBasket, Heart, Plus, Minus } from 'lucide-react';
import { getProducts, getCategories } from '@/lib/api';
import type { Product, Category } from '@/lib/api';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const { username, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  // Mutations for basket and wishlist
  const addToBasketMutation = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: string, quantity: number }) => {
      if (!username) throw new Error('User not authenticated');
      const response = await axios.post(
        `http://localhost:7000/basket/${username}/${productId}?quantity=${quantity}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['basket'] });
      toast.success('Added to basket');
    },
    onError: () => {
      toast.error('Failed to add to basket');
    }
  });

  const addToWishlistMutation = useMutation({
    mutationFn: async ({ productId, quantity }: { productId: string, quantity: number }) => {
      if (!username) throw new Error('User not authenticated');
      const response = await axios.post(
        `http://localhost:7000/wishlist/${username}/${productId}?quantity=${quantity}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist'] });
      toast.success('Added to wishlist');
    },
    onError: () => {
      toast.error('Failed to add to wishlist');
    }
  });

  // Quantity handlers
  const incrementQuantity = (productId: string) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1
    }));
  };

  const decrementQuantity = (productId: string) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) - 1, 1)
    }));
  };

  // Product queries
  const { data: categories = [] } = useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });

  const { data: products, isLoading, error } = useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  // Filter and sort products
  const filteredProducts = products?.filter(product => 
    selectedCategory === 'all' ? true : product.category === selectedCategory
  );

  const sortedProducts = [...(filteredProducts || [])].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  useEffect(() => {
    const highlightedProductId = localStorage.getItem('highlightedProduct');
    if (highlightedProductId) {
      const element = document.getElementById(`product-${highlightedProductId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('highlight-product');
        localStorage.removeItem('highlightedProduct');

        // Remove highlight after animation
        setTimeout(() => {
          element.classList.remove('highlight-product');
        }, 3000);
      }
    }
  }, []);

  return (
    <div className="min-h-screen py-12">
      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Mobile filter button */}
          <button
            className="md:hidden flex items-center gap-2 text-sm"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Desktop filters */}
          <div className={`w-full md:w-auto space-y-4 md:space-y-0 md:flex md:items-center md:gap-6 
            ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {/* Categories */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto px-3 py-2 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:border-foreground/20"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto px-3 py-2 bg-background border border-foreground/10 rounded-lg focus:outline-none focus:border-foreground/20"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active filters summary */}
          <div className="hidden md:flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {selectedCategory === 'all' ? 'All Categories' : 
                categories.find(c => c.id === selectedCategory)?.name}
              {sortBy !== 'featured' && ` • ${
                sortBy === 'price-asc' ? 'Price: Low to High' : 'Price: High to Low'
              }`}
            </span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {isLoading ? (
              <div className="col-span-full text-center">Loading products...</div>
            ) : error ? (
              <div className="col-span-full text-center text-muted-foreground">
                Failed to load products. Please try again later.
              </div>
            ) : sortedProducts?.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground">
                No products found.
              </div>
            ) : (
              sortedProducts?.map((product) => (
                <div 
                  key={product.id}
                  id={`product-${product.id}`}
                  className="aspect-square bg-muted/50 rounded-2xl p-6 border border-foreground/5 hover:border-foreground/10 transition-colors highlight-product-container"
                >
                  <div className="space-y-4">
                    {product.imageUrl ? (
                      <div className="aspect-square relative rounded-xl overflow-hidden">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-square bg-accent rounded-xl" />
                    )}
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ${product.price.toFixed(2)}
                    </p>

                    {isAuthenticated && (
                      <div className="space-y-3">
                        {/* Quantity selector */}
                        <div className="flex items-center justify-between border border-foreground/10 rounded-lg p-2">
                          <button 
                            onClick={() => decrementQuantity(product.id)}
                            className="p-1 hover:bg-muted rounded"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span>{quantities[product.id] || 1}</span>
                          <button 
                            onClick={() => incrementQuantity(product.id)}
                            className="p-1 hover:bg-muted rounded"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={() => addToBasketMutation.mutate({
                              productId: product.id,
                              quantity: quantities[product.id] || 1
                            })}
                            className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                            disabled={addToBasketMutation.isPending}
                          >
                            <ShoppingBasket className="w-4 h-4" />
                            <span>Add to Basket</span>
                          </button>
                          <button
                            onClick={() => addToWishlistMutation.mutate({
                              productId: product.id,
                              quantity: quantities[product.id] || 1
                            })}
                            className="p-2 border border-foreground/10 rounded-lg hover:bg-muted transition-colors"
                            disabled={addToWishlistMutation.isPending}
                          >
                            <Heart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 