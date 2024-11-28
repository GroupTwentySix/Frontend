"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Importing Link from next/link
import IconSearch from "../../components/header/iconSearch"; // Ensure this file exists or adjust the import path
import IconCart from "../../components/header/iconCart"; // Ensure this file exists or adjust the import path

export default function MemberCheckout() {
  const [shippingMethod, setShippingMethod] = useState("free");
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false); // New state to track if discount is applied
  const [discount, setDiscount] = useState(0); // New state for discount

  const [items] = useState([
    { name: "Hyaluronic acid serum", price: 10, quantity: 1 },
    { name: "Daily SPF 50+", price: 10, quantity: 1 },
    { name: "Hydrating toner", price: 20, quantity: 1 }
  ]);

  // Discount logic (for demo purposes, let's assume "DISCOUNT10" gives 10% off)
  const applyDiscount = (code) => {
    if (code === "DISCOUNT10") {
      return 0.1; // 10% discount
    }
    return 0;
  };

  // Calculate the subtotal
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  // Recalculate the discount only when the apply button is clicked
  const handleApplyDiscount = () => {
    const newDiscount = applyDiscount(discountCode);
    setDiscount(subtotal * newDiscount); // Apply discount to the subtotal
    setIsDiscountApplied(true); // Mark the discount as applied
  };

  // Calculate shipping price
  const shippingPrice = shippingMethod === "premium" ? 3.99 : 0;

  // Calculate total price
  const totalPrice = subtotal + shippingPrice - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-300 bg-white">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src="/images/vitality-logo.png"
              alt="Vitality Logo"
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <IconSearch />
          <IconCart />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4">
        {/* Left Section - Payment Button */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Member Checkout</h2>

          {/* Contact */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Contact</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <label className="flex items-center mt-2 text-sm text-gray-500">
              <input type="checkbox" className="mr-2" /> Sign me up for first access to the latest
              drops and more.
            </label>
          </div>

          {/* Delivery */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Delivery</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc (Optional)"
              className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input
                type="text"
                placeholder="City"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Postcode"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <label className="flex items-center mt-2 text-sm text-gray-500">
              <input type="checkbox" className="mr-2" /> Text me with news and offers.
            </label>
          </div>

          {/* Payment */}
          <section className="bg-white p-6 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment</h2>
            <label className="flex items-center mb-4 text-sm">
              <input type="radio" name="payment" className="mr-2" /> Credit or Debit card
            </label>
            <input
              type="text"
              placeholder="Card number"
              className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiration date (MM/YY)"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="Security code"
                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <label className="flex items-center mt-2 text-sm text-gray-500">
              <input type="checkbox" className="mr-2" /> Use shipping address as billing address.
            </label>
            <button className="w-full mt-4 p-2 bg-green-600 text-white font-medium rounded-md">
              Pay Now
            </button>
          </section>
        </section>

        {/* Right Section - Shipping, Discount, and Summary */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          {/* Shipping Method */}
          <section className="bg-white p-6 rounded-lg border border-gray-300 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Shipping Method</h2>

            <div className="space-y-4">
              {/* Shipping Method - Free Delivery */}
              <div className="flex flex-col p-4 border border-gray-300 rounded-lg">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="shippingMethod"
                    id="freeDelivery"
                    value="free"
                    checked={shippingMethod === "free"}
                    onChange={() => setShippingMethod("free")}
                    className="form-radio h-4 w-4 text-green-600"
                  />
                  <label htmlFor="freeDelivery" className="ml-2 text-gray-700">
                    Free
                  </label>
                </div>
                <p className="text-sm text-gray-500">7 - 14 days</p>
              </div>

              {/* Shipping Method - Premium Delivery */}
              <div className="flex flex-col p-4 border border-gray-300 rounded-lg">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="shippingMethod"
                    id="premiumDelivery"
                    value="premium"
                    checked={shippingMethod === "premium"}
                    onChange={() => setShippingMethod("premium")}
                    className="form-radio h-4 w-4 text-green-600"
                  />
                  <label htmlFor="premiumDelivery" className="ml-2 text-gray-700">
                    Premium (£3.99)
                  </label>
                </div>
                <p className="text-sm text-gray-500">1 - 3 days</p>
              </div>
            </div>
          </section>

          {/* Discount Code */}
          <section className="bg-pink-50 p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Discount Code or Gift Card</h2>
            <input
              type="text"
              id="discount"
              placeholder="Enter code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              onClick={handleApplyDiscount} // Apply discount only when clicked
              className="w-full mt-2 p-2 bg-gray-800 text-white font-medium rounded-md"
            >
              Apply
            </button>
          </section>

          {/* Order Summary */}
          <section className="bg-green-50 p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            <ul className="mb-4">
              {items.map((item, index) => (
                <li key={index} className="flex justify-between items-center border-b py-2">
                  <img
                    src={`/images/${item.name.toLowerCase().replace(/ /g, "-")}.jpg`} // Assuming image naming follows this convention
                    alt={item.name}
                    className="w-10 h-10 rounded-md"
                  />
                  <span>{item.name}</span>
                  <span>£{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center mb-4">
              <span>Subtotal</span>
              <span>£{(subtotal - discount).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Shipping</span>
              <span>{shippingMethod === "premium" ? "£3.99" : "Free"}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between items-center mb-4">
                <span>Discount</span>
                <span>-£{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between items-center font-semibold text-xl">
              <span>Total</span>
              <span>£{totalPrice.toFixed(2)}</span>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
