"use client";
import React, { useState, useEffect } from "react";
import styles from "./MemberCheckout.module.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer";

export default function MemberCheckout() {
  const [shippingMethod, setShippingMethod] = useState("free");
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(true);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
  });
  const [billingAddress, setBillingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
  });

  // Simulate fetching cart items from a database
  useEffect(() => {
    const fetchCartItems = async () => {
      setItems([
        { id: 1, name: "Hyaluronic Acid Serum", price: 10, quantity: 1, image: "/images/faceImage1.jpg" },
        { id: 2, name: "Daily SPF 50+", price: 10, quantity: 1, image: "/images/step1.jpeg" },
        { id: 3, name: "Hydrating Toner", price: 20, quantity: 1, image: "/images/step2.jpeg" },
      ]);
    };
    fetchCartItems();
  }, []);

  const applyDiscount = (code) => {
    if (code === "DISCOUNT10") {
      return 0.1;
    }
    return 0;
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingPrice = shippingMethod === "premium" ? 3.99 : 0;
  const totalPrice = subtotal + shippingPrice - discount;

  const handleApplyDiscount = () => {
    const newDiscount = applyDiscount(discountCode);
    if (newDiscount > 0) {
      setDiscount(subtotal * newDiscount);
      setIsDiscountApplied(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid discount code. Please try again.");
      setIsDiscountApplied(false);
    }
  };

  const handleAddressChange = (e, setAddress) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayNow = () => {
    alert("Payment successful!");
  };

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2>Member Checkout</h2>

          {/* Contact Section */}
          <div>
            <h3>Contact</h3>
            <input type="email" placeholder="Enter your email address" className={styles.input} />
            <label className={styles.checkboxLabel1}>
              <input
                type="checkbox"
               
              />{" "}
              Sign me up for the latest access to drops and all
            </label>
          </div>

          {/* Delivery Section */}
          <div>
            <h3>Shipping Address</h3>
            <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Country / Region"
              name="address"
              value={shippingAddress.address}
              onChange={(e) => handleAddressChange(e, setShippingAddress)}
              className={styles.input}
            />
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                value={shippingAddress.firstName}
                onChange={(e) => handleAddressChange(e, setShippingAddress)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                value={shippingAddress.lastName}
                onChange={(e) => handleAddressChange(e, setShippingAddress)}
                className={styles.input}
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={shippingAddress.address}
              onChange={(e) => handleAddressChange(e, setShippingAddress)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Appartment,Suit,etc(optional)"
              name="address"
              value={shippingAddress.address}
              onChange={(e) => handleAddressChange(e, setShippingAddress)}
              className={styles.input}
            />
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={shippingAddress.city}
                onChange={(e) => handleAddressChange(e, setShippingAddress)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Postcode"
                name="postcode"
                value={shippingAddress.postcode}
                onChange={(e) => handleAddressChange(e, setShippingAddress)}
                className={styles.input}
              />
              <input
              type="number"
              placeholder="Phone"
              name="address"
              value={shippingAddress.address}
              onChange={(e) => handleAddressChange(e, setShippingAddress)}
              className={styles.input}
            />
            </div>
          </div>

          {/* Shipping Method */}
          <div>
            <h3>Shipping Method</h3>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                value="free"
                checked={shippingMethod === "free"}
                onChange={() => setShippingMethod("free")}
              />
              Free Delivery
            </label>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                value="premium"
                checked={shippingMethod === "premium"}
                onChange={() => setShippingMethod("premium")}
              />
              Premium Next-Day Delivery (£3.99)
            </label>
          </div>

          {/* Billing Address Section */}
          <div>
            <h3>Billing Address</h3>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={useShippingAsBilling}
                onChange={() => setUseShippingAsBilling(!useShippingAsBilling)}
              />{" "}
              Use shipping address as billing address
            </label>
            {!useShippingAsBilling && (
              <div>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={billingAddress.firstName}
                    onChange={(e) => handleAddressChange(e, setBillingAddress)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={billingAddress.lastName}
                    onChange={(e) => handleAddressChange(e, setBillingAddress)}
                    className={styles.input}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={billingAddress.address}
                  onChange={(e) => handleAddressChange(e, setBillingAddress)}
                  className={styles.input}
                />
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={billingAddress.city}
                    onChange={(e) => handleAddressChange(e, setBillingAddress)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Postcode"
                    name="postcode"
                    value={billingAddress.postcode}
                    onChange={(e) => handleAddressChange(e, setBillingAddress)}
                    className={styles.input}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Section */}
          <div>
            <h3>Payment</h3>
            <input type="text" placeholder="Card number" className={styles.input} />
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Expiration date (MM/YY)" className={styles.input} />
              <input type="text" placeholder="Security code" className={styles.input} />
            </div>
            <input type="text" placeholder="Name on card" className={styles.input} />
            <button className={styles.button} onClick={handlePayNow}>
              Pay Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <h2>Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className={styles.summaryItem}>
              <img src={item.image} alt={item.name} className={styles.productImage} />
              <span>{item.name}</span>
              <span>£{item.price * item.quantity}</span>
            </div>
          ))}
          <div className={styles.summaryItem}>
            <span>Subtotal</span>
            <span>£{subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Shipping</span>
            <span>£{shippingPrice.toFixed(2)}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Discount</span>
            <span>-£{discount.toFixed(2)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>£{totalPrice.toFixed(2)}</span>
          </div>
          <input
            type="text"
            placeholder="Discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className={styles.discountInput}
          />
          <button onClick={handleApplyDiscount} className={styles.discountButton}>
            Apply
          </button>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
}
