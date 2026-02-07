/* Design Philosophy: Neo-Sonic Modernism - Guides showcase page */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Keyboard, Headphones, Mic2, Monitor, Cable, Laptop, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Guides() {
  const guides = [
    {
      icon: Keyboard,
      title: "Best MIDI Keyboards 2026",
      description: "From budget-friendly controllers to professional 88-key workstations. Find the perfect MIDI keyboard for your setup.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/WDYXYh2uC4vcBcthFfQaIv/sandbox/kA7pmf6jEALLS0gON3fW08-img-3_1770500420000_na1fn_bWlkaS1rZXlib2FyZC1jbG9zZXVw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV0RZWFloMnVDNHZjQmN0aEZmUWFJdi9zYW5kYm94L2tBN3BtZjZqRUFMTFMwZ09OM2ZXMDgtaW1nLTNfMTc3MDUwMDQyMDAwMF9uYTFmbl9iV2xrYVMxclpYbGliMkZ5WkMxamJHOXpaWFZ3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Zoy4-k9yZABMRMAC3QI7jMU9qYviARjIwAHjBLfIgGpvYHzYKmGxg9FxsDAijF2~6krB5fte67JoDimrzHWgyGfJG3FEB3raVXlbSr1UzMFtqhrItWSIeTz8xUXUf3PqEbUrZKjFiVRrEpxKgxhxTUXF-MDsmFemS5GP5IUo~ESI5akWLbm55v9D3wns82eYt3iy8XvIqeuemrxklVQEguL05WExoLIp6VXH-fhXRTHfkHdVM4RrnK2EI-k2Nirl79gicdjT9WpfnedpChPdftEJZl6qYuPK-b4-MIdHT2EGAwHfwiE7EJRIMa95dhl5Vn5ckx5Bq208-oiXBkGrvA__",
      href: "/guides/midi-keyboards",
      featured: true,
    },
    {
      icon: Headphones,
      title: "Studio Monitors & Headphones",
      description: "Critical listening gear for accurate mixing and mastering. Compare top models across all price ranges.",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop",
      href: "/guides/monitoring",
      featured: true,
    },
    {
      icon: Mic2,
      title: "Audio Interfaces Guide",
      description: "Connect your instruments and microphones with crystal-clear quality. USB, Thunderbolt, and more.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop",
      href: "/guides/audio-interfaces",
      featured: true,
    },
    {
      icon: Monitor,
      title: "DAW Software Comparison",
      description: "Logic Pro, Ableton, FL Studio, Pro Tools—which is right for you? Complete feature breakdown.",
      href: "/guides/daws",
      featured: false,
    },
    {
      icon: Cable,
      title: "Essential Studio Cables",
      description: "XLR, TRS, MIDI—understand what you need and avoid common mistakes.",
      href: "/guides/cables",
      featured: false,
    },
    {
      icon: Laptop,
      title: "Best Laptops for Production",
      description: "Powerful machines that can handle heavy plugin loads and large projects.",
      href: "/guides/laptops",
      featured: false,
    },
  ];

  const affiliatePrograms = [
    { name: "Sweetwater", commission: "2-5%", link: "#" },
    { name: "Amazon Associates", commission: "4-10%", link: "#" },
    { name: "Plugin Boutique", commission: "10%", link: "#" },
    { name: "Splice", commission: "30-day trial", link: "#" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Gear <span className="gradient-text">Guides</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert reviews and buying guides for music production equipment. Find the perfect gear for your budget and workflow.
            </p>
          </div>

          {/* Featured Guides */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {guides.filter(g => g.featured).map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <Link key={index} href={guide.href}>
                    <Card className="h-full bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group cursor-pointer overflow-hidden">
                      {guide.image && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={guide.image}
                            alt={guide.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                        </div>
                      )}
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-accent transition-colors">
                          {guide.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {guide.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All Guides */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">All Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides.filter(g => !g.featured).map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <Link key={index} href={guide.href}>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer group">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {guide.description}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Affiliate Partners */}
          <Card className="bg-gradient-primary/5 border-accent/20">
            <CardHeader>
              <CardTitle>Our Affiliate Partners</CardTitle>
              <CardDescription>
                We earn commissions from these trusted retailers when you make a purchase through our links. This helps us keep our content free and high-quality.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {affiliatePrograms.map((program, index) => (
                  <a
                    key={index}
                    href={program.link}
                    className="flex flex-col items-center justify-center p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {program.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {program.commission}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mt-2" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center p-12 rounded-2xl bg-gradient-primary/10 border border-accent/20">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly adding new guides and reviews. Let us know what equipment you'd like us to cover next!
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Request a Guide
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
