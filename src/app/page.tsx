import Image from 'next/image';
import Features from '@/components/Features';
import OurStory from '@/components/OurStory';
import SkincareSteps from '@/components/SkincareSteps';
import Testimonials from '@/components/Testimonials';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function Home() {
  return (
    <>
      <AnimateOnScroll animation="fadeIn">
        <section className="min-h-[400px] pt-16 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 bg-muted">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
                Feel Good
                <br />
                Natural Skincare
              </h1>
              <p className="text-muted-foreground mb-8">
                Made using only organic ingredients for all skin types
              </p>
              <button className="bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Shop now
              </button>
            </div>
          </div>
          
          <div className="relative bg-accent min-h-[400px] md:min-h-[400px]">
            <Image
              src="/green-final.webp"
              alt="Skincare products showcase"
              fill
              className="object-cover"
              priority
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm rounded-full p-2 text-foreground">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </AnimateOnScroll>
      
      <AnimateOnScroll animation="slideUp" delay={0.2}>
        <Features />
      </AnimateOnScroll>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-foreground/5" />
      </div>
      
      <AnimateOnScroll animation="slideRight" delay={0.3}>
        <OurStory />
      </AnimateOnScroll>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-foreground/5" />
      </div>
      
      <AnimateOnScroll animation="scale" delay={0.4}>
        <SkincareSteps />
      </AnimateOnScroll>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-foreground/5" />
      </div>
      
      <AnimateOnScroll animation="slideUp" delay={0.5}>
        <Testimonials />
      </AnimateOnScroll>
    </>
  );
}