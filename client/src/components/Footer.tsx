import { Music, Mail, Twitter, Youtube, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Music className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">ProducerHub</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Your go-to resource for music production tools, songwriting guides, and gear recommendations. Empowering producers and musicians to create their best work.
            </p>
            <p className="text-xs text-muted-foreground/70 italic">
              <strong>Affiliate Disclosure:</strong> ProducerHub may earn commissions from purchases made through our affiliate links. This helps us keep our tools free and our content high-quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/tools">
                  <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    Tools
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    Guides
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@producerhub.com"
                className="w-9 h-9 rounded-lg bg-muted hover:bg-accent/20 hover:text-accent flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} ProducerHub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">
              <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-accent transition-colors cursor-pointer">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
