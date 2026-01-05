import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Palette, Sparkles, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Palette, label: "Digital Illustration", color: "text-primary" },
  { icon: Sparkles, label: "Character Design", color: "text-secondary" },
  { icon: Zap, label: "Concept Art", color: "text-accent" },
  { icon: Heart, label: "Visual Storytelling", color: "text-coral" },
];

const tools = [
  "Procreate",
  "Photoshop",
  "Clip Studio Paint",
  "Blender",
  "After Effects",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1 animate-fade-in">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                  alt="Ana - Digital Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-40" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-secondary rounded-full blur-2xl opacity-40" />
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg">
                  <p className="text-2xl font-display font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years of<br/>Experience</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
                About <span className="text-gradient-primary">Me</span>
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  Hello! I'm Ana, a digital artist based in the creative corners of the internet. I specialize in bringing vibrant characters and worlds to life through digital illustration and design.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                  My journey began with a pencil and sketchbook, eventually evolving into the digital realm where I discovered the endless possibilities of creating art. I'm particularly drawn to character design, finding joy in crafting personalities that resonate with viewers.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  When I'm not creating art, you'll find me exploring new techniques, playing video games for inspiration, or teaching workshops to aspiring artists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What I <span className="text-gradient-secondary">Do</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.label}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <skill.icon className={`w-10 h-10 ${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="font-display text-lg font-bold text-foreground">
                  {skill.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tools of the <span className="text-gradient-accent">Trade</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              I work with a variety of digital tools to bring my visions to life
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 rounded-full bg-muted/50 border border-border/50 text-foreground font-medium animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-card to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              My Creative <span className="text-gradient-primary">Philosophy</span>
            </h2>
            <blockquote className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-8 italic">
              "Art is not about perfection—it's about connection. Every piece I create is an invitation to feel something, to dream, and to see the world through a different lens."
            </blockquote>
            <p className="text-muted-foreground">— Ana</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Want to Work <span className="text-gradient-secondary">Together</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            I'm always open to exciting new projects and collaborations. Let's create something amazing!
          </p>
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground glow-primary">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
