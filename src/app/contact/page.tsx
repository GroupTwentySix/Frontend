"use client";

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Mail, Clock, MapPin } from 'lucide-react';
import axios from 'axios';

type QuestionType = 'Product Information' | 'My account' | 'Order status' | 'Other';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  orderNumber?: string;
  questionType: QuestionType;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orderNumber: '',
    questionType: 'Product Information',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);

  // Form submission mutation
  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await axios.post('/api/contact', data);
      return response.data;
    },
    onSuccess: () => {
      // Reset form and show success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        orderNumber: '',
        questionType: 'Product Information',
        message: ''
      });
      setCharCount(0);
      alert('Message sent successfully!');
    },
    onError: (error) => {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again.'); 
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "VitalitySkincare@gmail.com",
      detail: "We generally respond to all inquiries within 5-7 business days."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "Monday-Friday, 9AM - 5 PM GMT",
      detail: "Excluding holidays"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "London, United Kingdom",
      detail: "Serving customers worldwide"
    }
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <AnimateOnScroll animation="fadeIn">
        <div className="bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light">Contact Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our customer service team is here to help with any questions you may have.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact Information */}
      <AnimateOnScroll animation="slideUp" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-muted/30 rounded-2xl p-8 text-center space-y-4 border border-foreground/5 hover:border-foreground/10 transition-colors"
              >
                <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto">
                  {info.icon}
                </div>
                <h3 className="font-medium">{info.title}</h3>
                <p className="text-foreground">{info.description}</p>
                <p className="text-sm text-muted-foreground">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact Form */}
      <AnimateOnScroll animation="fadeIn" delay={0.3}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border border-foreground/5">
            <h2 className="text-2xl font-light mb-8">Contact form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm text-muted-foreground">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm text-muted-foreground">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm text-muted-foreground">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="orderNumber" className="block text-sm text-muted-foreground">
                  Order Number (Optional)
                </label>
                <input
                  type="text"
                  id="orderNumber"
                  name="orderNumber"
                  value={formData.orderNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="questionType" className="block text-sm text-muted-foreground">
                  My question is about...
                </label>
                <select
                  id="questionType"
                  name="questionType"
                  value={formData.questionType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20"
                >
                  <option>Product Information</option>
                  <option>My account</option>
                  <option>Order status</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm text-muted-foreground">
                  Comments (Max 1000 characters)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-background border border-foreground/10 focus:outline-none focus:border-foreground/20 resize-none"
                ></textarea>
                <div className="text-sm text-muted-foreground text-right">
                  {charCount}/1000
                </div>
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-foreground text-background py-3 px-6 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {mutation.isPending ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </AnimateOnScroll>

      {/* FAQ CTA */}
      <AnimateOnScroll animation="fadeIn" delay={0.4}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/20 rounded-3xl p-8 md:p-16 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">Looking for quick answers?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out our frequently asked questions for immediate assistance.
            </p>
            <button className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-4">
              Visit FAQ
            </button>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
} 