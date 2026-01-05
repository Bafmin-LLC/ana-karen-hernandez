import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Mail, Instagram, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { 
    icon: Instagram, 
    label: "Instagram", 
    handle: "@ana.rndom.art",
    href: "https://www.instagram.com/ana.rndom.art",
    color: "hover:text-pink-500"
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "Anakahernandez26@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "The email address has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Let's <span className="text-gradient-primary">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Have a project in mind, want to collaborate, or just say hello? I'd love to hear from you!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Email Card */}
            <div className="col-span-full p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-primary/20">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">Email Me</h2>
                  <p className="text-muted-foreground">The best way to reach me</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="flex-1 px-6 py-4 rounded-xl bg-muted/50 border border-border/50">
                  <span className="text-xl font-medium text-foreground">{email}</span>
                </div>
                <Button 
                  onClick={copyEmail}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 text-primary-foreground glow-primary"
                >
                  {copied ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5 mr-2" />
                      Copy Email
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Social Cards */}
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-secondary/50 transition-all hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-secondary/20">
                      <social.icon className={`w-6 h-6 text-secondary ${social.color} transition-colors`} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {social.label}
                      </h3>
                      <p className="text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </a>
            ))}
          </div>

          {/* Commission Status */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/20 to-coral/10 border border-accent/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-lime animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-lime animate-ping" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Commissions Open!
                    </h3>
                    <p className="text-muted-foreground">
                      Currently accepting new projects and collaborations
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={copyEmail}
                  variant="outline" 
                  className="border-accent/50 text-accent hover:bg-accent/20"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location/Timezone Info */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Response Time
            </h2>
            <p className="text-lg text-muted-foreground">
              I typically respond within 24-48 hours. For urgent inquiries, please mention it in your subject line.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
