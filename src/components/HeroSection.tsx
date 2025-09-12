import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-secondary rounded-full blur-3xl opacity-20 floating-animation" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="gradient-text">Abhishek Mewada</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <span className="block">Full Stack Developer</span>
            <span className="block">AIML Enthusiast</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            Crafting digital experiences with modern technologies. Passionate about creating 
            beautiful, functional, and user-centered applications that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 glow-effect transition-smooth px-8 py-3 text-lg font-semibold"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3 text-lg font-semibold"
            >
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/abhii-1425" 
              className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth glow-effect"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth glow-effect"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth glow-effect"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;