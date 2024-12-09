import Image from 'next/image';
import Link from 'next/link';

export default function OurStory() {
  return (
    <section className="py-16 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 border border-foreground/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/skincare-brand.webp"
                alt="Natural skincare ingredients layout showing various botanical elements"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Our story
              </h2>
              
              <p className="text-muted-foreground leading-relaxed">
                We believe in creating a quality range of self care products with sustainability in mind. 
                It's our passion to provide products that reflect our values and ethics which is why all 
                of our ingredients are ethically sourced and contain no fragrances and were made cruelty free.
              </p>
              
              <Link 
                href="/about"
                className="inline-flex items-center text-foreground hover:text-foreground/80 transition-colors group"
              >
                <span className="border-b border-foreground/20 group-hover:border-foreground/40 transition-colors">
                  Read more
                </span>
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 