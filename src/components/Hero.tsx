import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Balochi fabric background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 mx-auto text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-soft">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Authentic Cultural Fashion</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight">
            Al Huda <span className="text-primary">Gallery</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-2xl mx-auto text-balance">
            Authentic Balochi Elegance — Digitally Showcased
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Discover our curated collection of traditional Balochi dresses, where heritage meets contemporary design.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant px-8 py-6 text-lg font-medium"
              onClick={scrollToProducts}
            >
              Explore Collections
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-border hover:bg-muted px-8 py-6 text-lg font-medium"
              onClick={() => window.open('https://wa.me/', '_blank')}
            >
              Contact on WhatsApp
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={scrollToProducts}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to collections"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
