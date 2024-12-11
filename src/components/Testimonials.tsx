"use client";

import { type FC, useState, useEffect } from 'react';

const testimonials = [
  {
    title: "Great Range of Products!",
    content: "Great affordable skincare. Highly recommend as it made me feel rejuvenated and simply amazing.",
    author: "Emma",
    role: "Verified Customer"
  },
  {
    title: "Amazing Results!",
    content: "I've noticed such a difference in my skin since using these products. They're gentle yet effective.",
    author: "Sarah",
    role: "Verified Customer"
  },
  {
    title: "Love the Natural Ingredients",
    content: "Finally found skincare that's both natural and effective. My sensitive skin has never been happier.",
    author: "Michael",
    role: "Verified Customer"
  },
  {
    title: "Perfect for Sensitive Skin",
    content: "These products have transformed my skincare routine. So gentle and effective!",
    author: "Lisa",
    role: "Verified Customer"
  },
  {
    title: "Outstanding Quality",
    content: "The attention to detail and quality of ingredients really shows in the results.",
    author: "James",
    role: "Verified Customer"
  },
  {
    title: "Best Natural Products",
    content: "Love how these products make my skin feel. Natural beauty at its finest!",
    author: "Rachel",
    role: "Verified Customer"
  }
];

const cardStyle = {
  flex: '1 0 calc(33.333% - 1rem)',
  minWidth: '300px',
  height: '320px',
  padding: '1.5rem',
  borderRadius: '1rem',
  backgroundColor: 'hsl(var(--muted) / 0.5)',
  border: '1px solid hsl(var(--border))',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column' as const,
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1rem',
  height: '100%',
};

const quoteStyle = {
  flex: '0 0 auto',
  color: 'hsl(var(--primary) / 0.6)',
};

const textContainerStyle = {
  flex: '1 1 auto',
  overflow: 'hidden',
};

const footerStyle = {
  flex: '0 0 auto',
  paddingTop: '1rem',
  borderTop: '1px solid hsl(var(--border))',
  marginTop: 'auto',
};

const carouselContainerStyle = {
  position: 'relative' as const,
  width: '100%',
  overflow: 'hidden',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
};

const carouselStyle = {
  display: 'flex',
  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
  gap: '1.5rem',
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => 
        current === testimonials.length - 3 ? 0 : current + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-light">What our customers say</h2>
          <p className="text-muted-foreground">Real experiences from real customers</p>
        </div>

        <div style={carouselContainerStyle}>
          <div 
            style={{
              ...carouselStyle,
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                style={{
                  ...cardStyle,
                  flex: '0 0 calc(33.333% - 1rem)',
                }}
              >
                <div style={contentStyle}>
                  <div style={quoteStyle}>
                    <svg
                      style={{ height: '2rem', width: '2rem' }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div style={textContainerStyle}>
                    <h3 style={{ 
                      fontSize: '1.125rem', 
                      fontWeight: 500, 
                      marginBottom: '0.5rem',
                      color: 'var(--foreground)'
                    }}>
                      {testimonial.title}
                    </h3>
                    <p style={{ 
                      color: 'hsl(var(--muted-foreground))',
                      display: '-webkit-box',
                      WebkitLineClamp: '4',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      lineHeight: '1.5'
                    }}>
                      {testimonial.content}
                    </p>
                  </div>

                  <div style={footerStyle}>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div>
                        <p style={{ fontWeight: 500 }}>{testimonial.author}</p>
                        <p style={{ 
                          fontSize: '0.875rem', 
                          color: 'hsl(var(--muted-foreground))'
                        }}>
                          {testimonial.role}
                        </p>
                      </div>
                      <div style={{ display: 'flex', color: 'hsl(var(--primary))' }}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            style={{ width: '1rem', height: '1rem' }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add navigation dots */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.5rem',
          marginTop: '2rem' 
        }}>
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '0.75rem',
                height: '0.75rem',
                borderRadius: '50%',
                backgroundColor: currentIndex === index 
                  ? 'hsl(var(--primary))' 
                  : 'hsl(var(--muted))',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 