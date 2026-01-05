import { Link } from "react-router-dom";
import { Instagram, Mail, Palette } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/ana.rndom.art", label: "Instagram" },
  { icon: Palette, href: "https://vgen.co/anarndom", label: "VGen" },
  { icon: Mail, href: "mailto:Anakahernandez26@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link 
              to="/" 
              className="font-display text-xl font-bold text-gradient-primary"
            >
              ANA
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Ana Karen Hernandez. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/work" className="text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
