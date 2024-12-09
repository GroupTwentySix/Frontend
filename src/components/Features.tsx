import { Sun, Smile, Wind, AlertTriangle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Natural Ingredients",
      description: "Natural ingredients is important to us and one of our key values"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Cruelty Free",
      description: "Natural ingredients is important to us and one of our key values"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Fragrance Free",
      description: "Natural ingredients is important to us and one of our key values"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Paraben Free",
      description: "Natural ingredients is important to us and one of our key values"
    }
  ];

  return (
    <section className="py-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-muted/50 border border-foreground/5 hover:border-foreground/10 transition-colors"
            >
              <div className="text-foreground/80 bg-accent/20 p-3 rounded-xl">
                {feature.icon}
              </div>
              <h3 className="font-medium text-base text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}