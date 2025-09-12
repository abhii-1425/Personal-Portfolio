import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "abhishekmewada1902@gmail.com",
      href: "abhishekmewada1902@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+919111735423",
      href: "tel:9111735423"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bhopal, Madhya Pradesh",
      href: "#"
    }
  ];

  return (
    <section className="py-20 section-padding bg-card/30" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-smooth hover:-translate-y-1 border-primary/10 hover:border-primary/30 group">
              <div className="text-primary mb-4 group-hover:scale-110 transition-bounce mx-auto w-fit">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              <a 
                href={info.href}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                {info.value}
              </a>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you have a project in mind, need consultation, or just want to connect, 
              I'd love to hear from you. I typically respond within 24 hours.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Available for freelance projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Remote work worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Long-term partnerships welcome</span>
              </div>
            </div>
          </div>

          <Card className="p-6 border-primary/10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="access_key" value="af7634a9-0d69-4e39-a3bc-a54abd777e40" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  required
                  className="border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:opacity-90 glow-effect transition-smooth text-lg py-3"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;