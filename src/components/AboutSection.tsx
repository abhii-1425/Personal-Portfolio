import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces that delight users."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive",
      description: "Building applications that work seamlessly across all devices and screens."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    }
  ];

  return (
    <section className="py-20 section-padding" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with Expertise in AIML creating digital solutions 
            that combine beautiful design with robust functionality. I specialize in modern 
            web technologies and love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Bringing Ideas to <span className="gradient-text">Life</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend development, I create 
              comprehensive solutions that not only look great but also perform exceptionally. 
              My approach combines technical expertise with creative problem-solving to deliver 
              products that users love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or mentoring aspiring developers. I believe in continuous 
              learning and staying ahead of industry trends.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="gradient-border p-1 rounded-2xl">
            <div className="bg-card p-8 rounded-2xl relative z-10">
              <div className="space-y-6">
                <div className="text-center">
                  <img src="/abhi.jpg" alt="Abhishek Mewada" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                  <h4 className="text-xl font-semibold">Abhishek Mewada</h4>
                  <p className="text-muted-foreground">Full Stack Developer</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>Percuing BTECH in AIML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>BHOPAL, MP</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects</span>
                    <span>5+ Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Languages</span>
                    <span>English, Hindi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-smooth hover:-translate-y-1 group border-primary/10 hover:border-primary/30"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-bounce">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;