"use client";

import React, { useState } from "react";

export default function Checkout() {
  const [shippingMethod, setShippingMethod] = useState("free");
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-green-700">Vitality</h1>
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800">
              🛒 {/* Replace with an actual icon */}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4">
        {/* Left Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          {/* Returning Customer */}
          <h2 className="text-lg font-medium mb-4">Returning customer?</h2>
          <p className="text-sm text-gray-500 mb-6">
            Log in or register to access member features or continue with Guest checkout.
          </p>

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

          {/* Shipping Method */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2">Shipping method</h3>
            <label className="flex items-center mb-2 text-sm">
              <input
                type="radio"
                name="shipping"
                value="free"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
                className="mr-2"
              />
              Free delivery (7–14 day delivery)
            </label>
            <label className="flex items-center text-sm">
              <input
                type="radio"
                name="shipping"
                value="premium"
                checked={shippingMethod === "premium"}
                onChange={() => setShippingMethod("premium")}
                className="mr-2"
              />
              Premium delivery (£3.99, next day delivery)
            </label>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Payment</h3>
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
          </div>
          <button className="w-full mt-4 p-2 bg-green-600 text-white font-semibold rounded-md">
            Pay Now
          </button>
        </section>

        {/* Right Section - Order Summary */}
        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>
          <ul className="mb-4">
            <li className="flex justify-between items-center border-b py-2">
              <img
                src="/images/hyaluronic.jpg"
                alt="Hyaluronic acid serum"
                className="w-10 h-10 rounded-md"
              />
              <span>Hyaluronic acid serum</span>
              <span>£10</span>
            </li>
            <li className="flex justify-between items-center border-b py-2">
              <img
                src="/images/spf50.jpg"
                alt="Daily SPF 50+"
                className="w-10 h-10 rounded-md"
              />
              <span>Daily SPF 50+</span>
              <span>£10</span>
            </li>
            <li className="flex justify-between items-center border-b py-2">
              <img
                src="/images/toner.jpg"
                alt="Hydrating toner"
                className="w-10 h-10 rounded-md"
              />
              <span>Hydrating toner</span>
              <span>£20</span>
            </li>
          </ul>

          {/* Discount Code */}
          <div className="mb-4">
            <label htmlFor="discount" className="text-sm font-medium block mb-2">
              Discount Code or Gift Card
            </label>
            <input
              type="text"
              id="discount"
              placeholder="Enter code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="w-full mt-2 p-2 bg-gray-800 text-white font-medium rounded-md">
              Apply
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <span>Subtotal</span>
            <span>£80</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Shipping</span>
            <span>{shippingMethod === "premium" ? "£3.99" : "Free"}</span>
          </div>
          <div className="flex justify-between items-center font-semibold text-lg">
            <span>Total</span>
            <span>£{shippingMethod === "premium" ? "83.99" : "80.00"}</span>
          </div>
        </section>
      </main>
    </div>
  );
}
