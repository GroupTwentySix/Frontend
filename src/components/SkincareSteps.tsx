import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: "Cleanse",
    color: "text-rose-200",
    image: "/tone1.png",
    link: "cleansers"
  },
  {
    number: 2,
    title: "Tone",
    color: "text-amber-200",
    image: "/tone2.png",
    link: "toners"
  },
  {
    number: 3,
    title: "Moisturise",
    color: "text-rose-100",
    image: "/tone3.jpg",
    link: "moisturisers"
  }
];

export default function SkincareSteps() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Quiz Section */}
          <div className="lg:col-span-2 space-y-6 bg-muted/50 p-8 md:p-12 rounded-3xl border border-foreground/5">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Take our skincare quiz
            </h2>
            <p className="text-lg text-rose-200">
              Tailored for you
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Discover what products work for you with our personalised quiz that puts your needs as the priority.
              Curated by our experts to provide the best self care regime for your skin.
            </p>
            <Link 
              href="/quiz"
              className="inline-flex items-center bg-foreground text-background px-8 py-3 rounded-full hover:opacity-90 transition-opacity group"
            >
              Build your regime
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

          {/* Steps Section */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col space-y-4">
                  <div className="text-center mb-2">
                    <h3 className="text-lg">
                      <span className="font-medium">Step {step.number}:</span>{' '}
                      <span className={`${step.color} font-medium`}>{step.title}</span>
                    </h3>
                  </div>
                  
                  <Link 
                    href={`/products/${step.link}`}
                    className="flex-1 block"
                  >
                    <div className="group relative aspect-square w-full">
                      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-3xl" />
                      <Image
                        src={step.image}
                        alt={`Step ${step.number}: ${step.title}`}
                        fill
                        className="object-cover p-3 rounded-3xl hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    </div>
                  </Link>
                  
                  <div className="text-center mt-auto">
                    <Link 
                      href={`/products/${step.link}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View {step.link}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 