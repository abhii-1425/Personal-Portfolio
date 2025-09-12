import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 section-padding border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold gradient-text mb-2">Abhishek Mewada</div>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/abhii-1425" 
              className="p-2 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth glow-effect"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-2 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth glow-effect"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full border border-primary/20 hover:border-primary hover:bg-primary/10 transition-smooth glow-effect"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Abhishek Mewada. Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;