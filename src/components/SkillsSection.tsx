import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 82 },
        { name: "Figma", level: 85 },
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "Docker", 
    "AWS", "Vercel", "Tailwind CSS", "Figma", "Git", "GraphQL"
  ];

  return (
    <section className="py-20 section-padding bg-card/30" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm constantly expanding my toolkit and staying current with the latest technologies 
            to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-primary/10 hover:border-primary/30 transition-smooth">
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted" 
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 
                           rounded-full text-sm font-medium hover:scale-105 transition-bounce cursor-default
                           hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;