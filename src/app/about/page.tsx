"use client";

import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { Users, Globe, Award, LeafyGreen } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <LeafyGreen className="w-6 h-6" />,
      title: "Sustainability",
      description: "We're committed to environmental responsibility in every aspect of our business."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Ethical Sourcing",
      description: "All our ingredients are ethically sourced from trusted partners worldwide."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Building a community that shares our passion for natural skincare."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality",
      description: "Uncompromising commitment to product quality and safety."
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-24">
      {/* Hero Section */}
      <AnimateOnScroll animation="fadeIn">
        <div className="bg-muted/50 rounded-3xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-light">About us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in creating a quality range of self care products with sustainability in mind.
              It's our passion to provide products that reflect our values and ethics.
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Mission Statement Section */}
      <AnimateOnScroll animation="slideUp" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/more-green-stuff.jpg"
                alt="Natural skincare ingredients arranged in a flat lay"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light">Mission statement</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in creating a quality range of self care products with sustainability in mind.
                It's our passion to provide products that reflect our values and ethics which is why all
                of our ingredients are ethically sourced and contain no fragrances and were made cruelty free.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in creating a quality range of self care products with sustainability in mind.
                It's our passion to provide products that reflect our values and ethics.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Quote Section */}
      <AnimateOnScroll animation="scale" delay={0.3}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted/30 rounded-3xl p-8 md:p-16 text-center space-y-6">
            <h2 className="text-xl md:text-2xl font-light mb-8">Vitality Quote</h2>
            <blockquote className="text-2xl md:text-3xl font-light text-foreground/90 italic">
              "True beauty comes from embracing nature's gifts and giving back to keep them thriving. 
              Vitality is about nurturing your skin and the world around you by celebrating the natural."
            </blockquote>
            <p className="text-muted-foreground">Founders, London</p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Our Values */}
      <AnimateOnScroll animation="fadeIn" delay={0.4}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from product development to customer service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-muted/30 rounded-2xl p-6 text-center space-y-4 border border-foreground/5 hover:border-foreground/10 transition-colors"
              >
                <div className="bg-accent/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="font-medium">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Timeline */}
      <AnimateOnScroll animation="slideRight" delay={0.5}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to where we are today
            </p>
          </div>
          <div className="space-y-12">
            {[
              { year: "2020", title: "The Beginning", description: "Founded with a vision for natural skincare" },
              { year: "2021", title: "Growth", description: "Expanded our product line and reached new markets" },
              { year: "2022", title: "Sustainability Focus", description: "Implemented 100% sustainable packaging" },
              { year: "2023", title: "Global Reach", description: "Expanded to international markets" }
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="text-2xl font-light text-foreground/90 w-24 flex-shrink-0 border-r border-foreground/10 pr-8">
                  {milestone.year}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-medium text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* Join Us CTA */}
      <AnimateOnScroll animation="fadeIn" delay={0.6}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/20 rounded-3xl p-8 md:p-16 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-light mb-4">Join Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of our community and stay updated with our latest products and sustainability initiatives.
            </p>
            <button className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity mt-4">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
} 