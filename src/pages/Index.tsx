import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

// Import artwork images
import art01 from "@/assets/artwork/art-01.jpg";
import art02 from "@/assets/artwork/art-02.jpg";
import art03 from "@/assets/artwork/art-03.jpg";
import art04 from "@/assets/artwork/art-04.jpg";
import art05 from "@/assets/artwork/art-05.jpg";
import art06 from "@/assets/artwork/art-06.jpg";
import anaPhoto from "@/assets/ana-karen-hernandez.png";

// Featured artworks for the home page preview
const featuredWorks = [
  { id: "1", title: "Artwork 1", image: art01 },
  { id: "2", title: "Artwork 2", image: art02 },
  { id: "3", title: "Artwork 3", image: art03 },
  { id: "4", title: "Artwork 4", image: art04 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Digital Illustration & Character Design</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient-primary">Ana</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              I create vibrant digital worlds and memorable characters that tell stories and spark imagination.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 glow-primary">
                <Link to="/work">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border/50 hover:bg-muted/50">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Work
              </h2>
              <p className="text-muted-foreground">A selection of my recent creations</p>
            </div>
            <Link 
              to="/work" 
              className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWorks.map((work, index) => (
              <Link
                key={work.id}
                to="/work"
                className="group relative overflow-hidden rounded-xl aspect-[3/4] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile View All Link */}
          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/work">
                View All Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={anaPhoto}
                  alt="Ana Karen Hernandez - Digital Artist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full blur-2xl opacity-50" />
            </div>

            {/* Content */}
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                About <span className="text-gradient-secondary">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a digital artist passionate about bringing ideas to life through vibrant colors and expressive characters. With a background in illustration and animation, I create art that resonates with emotion and tells compelling stories.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My work spans character design, concept art, and digital illustrations for games, books, and personal projects.
              </p>
              <Button asChild className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground glow-secondary">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-card to-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create <span className="text-gradient-accent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Have a project in mind? I'd love to hear from you and explore how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 text-accent-foreground font-semibold px-10">
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

export default Index;
