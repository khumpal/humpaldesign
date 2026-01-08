import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-sans">HDS</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground leading-tight">Humpal Design</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Support</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Precision CNC machining in Silicon Valley since 2000. Specializing in complex 5-axis work and rapid prototyping.
            </p>
            <p className="text-primary font-semibold text-sm">26 Years of Excellence</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Capabilities", path: "/capabilities" },
                { name: "Industries", path: "/industries" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>5-Axis CNC Machining</li>
              <li>Precision Turning</li>
              <li>CNC Milling</li>
              <li>Rapid Prototyping</li>
              <li>Short & Long Runs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15107861683" className="flex items-start text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">(510) 786-1683</span>
                </a>
              </li>
              <li>
                <a href="mailto:rajnish@humpaldesign.com" className="flex items-start text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">rajnish@humpaldesign.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=3338+Arden+Road+Hayward+CA+94544" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">3338 Arden Road<br />Hayward, CA 94544</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Humpal Design Support. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.manta.com/c/mmbq285/humpal-design-support" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              <Star className="w-4 h-4 mr-1 fill-primary text-primary" />
              5.0 Reviews
            </a>
            <Link to="/quote" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Request Quote
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
