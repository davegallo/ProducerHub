/* Design Philosophy: Neo-Sonic Modernism - Tools showcase page */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music2, Zap, Sparkles, Sliders, Piano, Clock, Mic, Activity } from "lucide-react";
import { useLocation } from "wouter";

export default function Tools() {
  const tools = [
    {
      icon: Music2,
      title: "Chord Progression Generator",
      description: "Generate professional chord progressions in any key. Perfect for overcoming writer's block and discovering new harmonic ideas.",
      href: "/tools/chords",
      category: "Songwriting",
      status: "active",
    },
    {
      icon: Zap,
      title: "BPM Calculator",
      description: "Calculate tempo from tap input or analyze audio files. Find the perfect BPM for your track.",
      href: "/tools/bpm",
      category: "Production",
      status: "active",
    },
    {
      icon: Sparkles,
      title: "Rhyme & Lyric Helper",
      description: "Discover rhymes, synonyms, and lyrical ideas. Elevate your songwriting with our comprehensive word database.",
      href: "/tools/lyrics",
      category: "Songwriting",
      status: "active",
    },
    {
      icon: Sliders,
      title: "Song Structure Builder",
      description: "Plan your song's arrangement with proven templates. Visualize intro, verse, chorus, bridge, and more.",
      href: "/tools/structure",
      category: "Songwriting",
      status: "active",
    },
    {
      icon: Piano,
      title: "Piano Chord Reference",
      description: "Interactive piano chord chart with audio playback. Learn and reference chords in all keys.",
      href: "/tools/piano-chords",
      category: "Learning",
      status: "active",
    },
    {
      icon: Clock,
      title: "Key & Scale Finder",
      description: "Identify the key and scale of any melody or chord progression. Perfect for remixing and sampling.",
      href: "/tools/key-finder",
      category: "Production",
      status: "active",
    },
    {
      icon: Mic,
      title: "Vocal Range Calculator",
      description: "Determine your vocal range and find songs that match your voice. Great for singers and songwriters.",
      href: "/tools/vocal-range",
      category: "Learning",
      status: "active",
    },
    {
      icon: Activity,
      title: "Frequency Chart",
      description: "Visual reference for EQ frequencies. Know exactly where to boost or cut for each instrument.",
      href: "/tools/frequency-chart",
      category: "Production",
      status: "active",
    },
  ];

  const categories = ["All", "Songwriting", "Production", "Learning"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Production <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Free, professional-grade tools for music producers and songwriters. No signup required, no limits.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all ${
                  category === "All"
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const isComingSoon = tool.status === "coming-soon";
              
              return (
                <Card 
                  key={index}
                  className={`h-full bg-card border-border transition-all group ${
                    isComingSoon 
                      ? "opacity-60 cursor-not-allowed" 
                      : "hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 cursor-pointer"
                  }`}
                  onClick={() => !isComingSoon && (window.location.href = tool.href)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-primary/10 flex items-center justify-center ${!isComingSoon && "group-hover:bg-gradient-primary/20"} transition-colors`}>
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      {isComingSoon && (
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          Coming Soon
                        </span>
                      )}
                      {!isComingSoon && (
                        <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {tool.category}
                        </span>
                      )}
                    </div>
                    <CardTitle className={`text-xl ${!isComingSoon && "group-hover:text-accent"} transition-colors`}>
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 p-8 rounded-2xl bg-gradient-primary/10 border border-accent/20 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Have a tool idea?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking to build tools that help producers. Let us know what you need!
            </p>
            <a 
              href="mailto:hello@producerhub.com" 
              className="inline-block px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Suggest a Tool
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
