"use client";

import React, { useState } from "react";

export default function MemberCheckout() {
  const [shippingMethod, setShippingMethod] = useState("free");
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">Vitality</h1>
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800">
              🛒 {/* Cart Icon */}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 px-4">
        {/* Left Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          {/* Member Checkout */}
          <h2 className="text-lg font-semibold mb-4">Member checkout</h2>

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
          className="form-radio h-4 w-4 text-green-600"
        />
        <label htmlFor="premiumDelivery" className="ml-2 text-gray-700">
          Premium next day delivery
        </label>
      </div>
      <p className="text-sm text-gray-500">£3.99</p>
    </div>
  </div>
</section>



<section className="bg-pink-50 p-6 rounded-lg shadow-md mt-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment</h2>
  <p className="text-gray-500 mb-6">All transactions are secure and encrypted</p>

  {/* Payment Method Selection */}
  <div className="space-y-4">
    <div className="flex items-center">
      <input
        type="radio"
        name="paymentMethod"
        id="creditCard"
        value="creditCard"
        className="form-radio h-4 w-4 text-green-600"
        defaultChecked
      />
      <label htmlFor="creditCard" className="ml-2 text-gray-700">
        Credit or Debit card
      </label>
    </div>
  </div>

  {/* Card Details */}
  <div className="space-y-4 mt-6">
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="cardNumber"
        placeholder="Card number"
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="expirationDate"
        placeholder="Expiration date (MM/YY)"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="securityCode"
        placeholder="Security code"
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="nameOnCard"
        placeholder="Name on card"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>

    {/* Billing Address Checkbox */}
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        id="useShippingAsBilling"
        className="form-checkbox h-4 w-4 text-green-600"
      />
      <label
        htmlFor="useShippingAsBilling"
        className="ml-2 text-gray-700"
      >
        Use shipping address as billing address
      </label>
    </div>
  </div>

  {/* Billing Address */}
  <div className="space-y-4 mt-6">
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="billingFirstName"
        placeholder="First name"
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="billingLastName"
        placeholder="Last name"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="billingAddress"
        placeholder="Address"
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="billingApartment"
        placeholder="Apartment, suite, etc. (Optional)"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="billingCity"
        placeholder="City"
        className="p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="billingPostcode"
        placeholder="Postcode"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        name="billingPhone"
        placeholder="Phone (Optional)"
        className="p-2 border border-gray-300 rounded-md"
      />
    </div>
  </div>

  {/* Remember me Checkbox */}
  <div className="flex items-center mt-6">
    <input
      type="checkbox"
      id="rememberMe"
      className="form-checkbox h-4 w-4 text-green-600"
    />
    <label htmlFor="rememberMe" className="ml-2 text-gray-700">
      Save my information for a faster checkout
    </label>
  </div>

  {/* Pay Now Button */}
  <div className="mt-6">
    <button className="w-full p-3 bg-green-600 text-white font-semibold rounded-md">
      Pay Now
    </button>
  </div>
</section>

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
            <span>£{shippingMethod === "premium" ? "83.99" : "80"}</span>
          </div>
        </section>
      </main>
    </div>
  );
}
