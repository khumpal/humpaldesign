import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Capabilities", path: "/capabilities" },
  { name: "Industries", path: "/industries" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-sans">HD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-foreground leading-tight">Humpal Design</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Support</p>
            </div>
          </Link>

          {/* Navigation Row - Always Visible */}
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium transition-colors rounded-md ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:+14085551234" className="flex items-center text-xs text-muted-foreground hover:text-foreground">
              <Phone className="w-3 h-3 mr-1" />
              (408) 555-1234
            </a>
            <Button asChild size="sm" className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold">
              <Link to="/quote">Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
