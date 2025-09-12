import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Vercel"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=300&fit=crop",
      technologies: ["React", "D3.js", "Express", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, progress tracking, video streaming, and student assessment features.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=300&fit=crop",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "AWS S3"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-20 section-padding" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            exceptional digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-smooth border-primary/10 hover:border-primary/30">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth flex gap-2">
                  <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-smooth hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2 group-hover:gradient-text transition-smooth">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-muted">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
