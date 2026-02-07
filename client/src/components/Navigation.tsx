import { Button } from "@/components/ui/button";
import { Music, Wrench, BookOpen, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Music },
    { href: "/tools", label: "Tools", icon: Wrench },
    { href: "/guides", label: "Guides", icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-105">
                <Music className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text hidden sm:inline">
                ProducerHub
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </span>
                  </Link>
                );
              })}
              <Button className="mt-2 bg-gradient-primary hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
