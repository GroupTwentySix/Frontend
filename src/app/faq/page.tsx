"use client";

import { useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Package, CreditCard, User, Box, Truck, Mail, LucideIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  questions: FAQItem[];
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('ORDERS');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const faqCategories: FAQCategory[] = [
    {
      id: 'ORDERS',
      name: 'Orders',
      icon: <Package className="w-5 h-5" />,
      questions: [
        {
          question: 'CAN I CANCEL MY ORDER?',
          answer: 'Yes, you can cancel your order within 1 hour of placing it. Please contact our customer service team immediately.'
        },
        {
          question: 'HOW CAN I CHECK THE STATUS OF MY ORDER?',
          answer: 'You can check your order status by logging into your account and visiting the order history section.'
        },
        {
          question: 'I HAVE NOT RECEIVED MY ORDER CONFIRMATION, WHAT SHOULD I DO?',
          answer: 'Please check your spam folder first. If you still cannot find it, contact our customer service team with your order details.'
        }
      ]
    },
    {
      id: 'PAYMENT',
      name: 'Payment',
      icon: <CreditCard className="w-5 h-5" />,
      questions: [
        {
          question: 'WHAT PAYMENT METHODS DO YOU ACCEPT?',
          answer: 'We accept all major credit cards, PayPal, and Apple Pay.'
        }
      ]
    },
    {
      id: 'ACCOUNTS',
      name: 'Accounts',
      icon: <User className="w-5 h-5" />,
      questions: [
        {
          question: 'HOW DO I CREATE AN ACCOUNT?',
          answer: 'Click on the account icon in the top right corner and follow the registration process.'
        }
      ]
    },
    {
      id: 'PRODUCTS',
      name: 'Products',
      icon: <Box className="w-5 h-5" />,
      questions: [
        {
          question: 'DO YOU OFFER RETURNS?',
          answer: 'Yes, we offer returns within 30 days of purchase for unused items in original packaging.'
        },
        {
          question: 'MY ITEMS HAVE ARRIVED DAMAGED, WHAT SHOULD I DO?',
          answer: 'Please take photos of the damaged items and contact our customer service team immediately.'
        },
        {
          question: 'I RECEIVED THE WRONG ITEMS, WHAT SHOULD I DO?',
          answer: 'Please contact our customer service team with your order number and details of the incorrect items received.'
        }
      ]
    },
    {
      id: 'SHIPPING',
      name: 'Shipping',
      icon: <Truck className="w-5 h-5" />,
      questions: [
        {
          question: 'HOW CAN I TRACK MY PACKAGE?',
          answer: 'Once your order ships, you will receive a tracking number via email. You can use this to track your package on our website.'
        },
        {
          question: 'I PUT IN THE WRONG ADDRESS FOR MY ORDER, WHAT SHOULD I DO?',
          answer: 'Contact our customer service team immediately with your order number and the correct address.'
        }
      ]
    },
    {
      id: 'CONTACT',
      name: 'Contact',
      icon: <Mail className="w-5 h-5" />,
      questions: [
        {
          question: 'HOW CAN I CONTACT CUSTOMER SERVICE?',
          answer: 'You can reach our customer service team through our contact form, or email us directly at support@vitality.com'
        }
      ]
    }
  ];

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => 
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <AnimateOnScroll animation="fadeIn">
        <div className="bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light">FAQ</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Find answers to commonly asked questions about our products and services.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* FAQ Categories */}
      <AnimateOnScroll animation="fadeIn" delay={0.2}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex overflow-x-auto pb-4 gap-2 hide-scrollbar">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-foreground text-background'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Questions */}
          <div className="mt-12 space-y-4">
            <AnimatePresence mode="wait">
              {faqCategories
                .find(cat => cat.id === activeCategory)
                ?.questions.map((faq) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => toggleQuestion(faq.question)}
                      className="w-full text-left p-6 rounded-xl bg-muted/30 border border-foreground/5 hover:border-foreground/10 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{faq.question}</h3>
                        <motion.div
                          animate={{ rotate: openQuestions.includes(faq.question) ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {openQuestions.includes(faq.question) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: "auto", 
                              opacity: 1,
                              transition: {
                                height: {
                                  duration: 0.3,
                                  ease: [0.04, 0.62, 0.23, 0.98]
                                },
                                opacity: { duration: 0.2, delay: 0.1 }
                              }
                            }}
                            exit={{ 
                              height: 0, 
                              opacity: 0,
                              transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2 }
                              }
                            }}
                          >
                            <motion.div
                              style={{ marginTop: '1rem' }}
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              exit={{ y: -10 }}
                            >
                              <p className="text-muted-foreground">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Contact CTA */}
      <AnimateOnScroll animation="fadeIn" delay={0.3}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/20 rounded-3xl p-8 md:p-16 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-light">Still have questions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please contact our friendly team.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-4"
            >
              Contact Us
            </button>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
} 