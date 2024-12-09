import axios from 'axios';

const API_URL = 'http://localhost:7000';

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
  category: string;
  createdAt?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface BasketItem extends Product {
  quantity: number;
}

export interface Basket {
  items: BasketItem[];
  total: number;
}

export interface WishlistItem extends Product {
  quantity: number;
}

export interface Wishlist {
  items: WishlistItem[];
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    throw error;
  }
}

export async function getBasket(): Promise<BasketItem[]> {
  const username = localStorage.getItem('username');
  const response = await axios.get(`${API_URL}/basket/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
}

export async function addToBasket(productId: string): Promise<void> {
  const username = localStorage.getItem('username');
  await axios.post(`${API_URL}/basket/${username}/${productId}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export async function removeFromBasket(productId: string): Promise<void> {
  const username = localStorage.getItem('username');
  await axios.delete(`${API_URL}/basket/${username}/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export async function updateBasketQuantity(productId: string, quantity: number): Promise<void> {
  await axios.put(`${API_URL}/basket/${productId}`, { quantity }, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export async function getWishlist(): Promise<WishlistItem[]> {
  const username = localStorage.getItem('username');
  const response = await axios.get(`${API_URL}/wishlist/${username}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
}

export async function addToWishlist(productId: string, quantity: number = 1): Promise<void> {
  const username = localStorage.getItem('username');
  await axios.post(`${API_URL}/wishlist/${username}/${productId}?quantity=${quantity}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export async function removeFromWishlist(productId: string): Promise<void> {
  const username = localStorage.getItem('username');
  await axios.delete(`${API_URL}/wishlist/${username}/${productId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_URL}/products/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Failed to search products:', error);
    throw error;
  }
} 