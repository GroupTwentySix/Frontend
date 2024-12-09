"use client";

import { useEffect, useState } from 'react';

const testimonials = [
  {
    title: "Great Range of products!",
    content: "Great affordable skincare. Highly recommend as it made me feel rejuvenated and simply utterly",
    author: "By Emma"
  },
  {
    title: "Great Range of products!",
    content: "Great affordable skincare. Highly recommend as it made me feel rejuvenated and simply utterly",
    author: "By Emma"
  },
  {
    title: "Great Range of products!",
    content: "Great affordable skincare. Highly recommend as it made me feel rejuvenated and simply utterly",
    author: "By Emma"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Continuous animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
          What people say about us
        </h2>

        <div className="relative">
          {/* Testimonial Cards */}
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[calc(33.33%-1rem)] bg-muted/50 rounded-3xl p-8 space-y-4 border border-foreground/5"
              >
                <h3 className="text-xl font-medium">
                  {testimonial.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                style={{ width: index === activeIndex ? '24px' : '8px' }}
                className={`h-2 rounded-full transition-all duration-300 border border-foreground ${
                  index === activeIndex 
                    ? 'bg-foreground' 
                    : 'bg-foreground/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((current) => 
              current === 0 ? testimonials.length - 1 : current - 1
            )}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors border border-foreground/5"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((current) => 
              (current + 1) % testimonials.length
            )}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors border border-foreground/5"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 