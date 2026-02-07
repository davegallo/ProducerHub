/* Design Philosophy: Neo-Sonic Modernism
 * - Dark base with vibrant cyan-purple gradients
 * - Audio-visual synergy through waveform patterns and flowing elements
 * - Asymmetric layouts with strategic negative space
 * - Smooth animations with purposeful motion
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Music2, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Sliders, 
  BookOpen, 
  ShoppingCart,
  Headphones,
  Keyboard,
  Mic2
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const tools = [
    {
      icon: Music2,
      title: "Chord Progression Generator",
      description: "Create professional chord progressions instantly. Perfect for overcoming writer's block.",
      href: "/tools/chords",
    },
    {
      icon: Zap,
      title: "BPM Calculator",
      description: "Find the perfect tempo for your track. Calculate BPM from tap input or audio.",
      href: "/tools/bpm",
    },
    {
      icon: Sparkles,
      title: "Rhyme & Lyric Helper",
      description: "Discover rhymes and lyrical ideas to elevate your songwriting.",
      href: "/tools/lyrics",
    },
    {
      icon: Sliders,
      title: "Song Structure Builder",
      description: "Plan your song's arrangement with proven templates and custom layouts.",
      href: "/tools/structure",
    },
  ];

  const gearCategories = [
    {
      icon: Keyboard,
      title: "MIDI Keyboards",
      description: "From budget-friendly to professional-grade controllers",
      link: "/guides/midi-keyboards",
    },
    {
      icon: Headphones,
      title: "Studio Monitors & Headphones",
      description: "Critical listening gear for accurate mixing",
      link: "/guides/monitoring",
    },
    {
      icon: Mic2,
      title: "Audio Interfaces",
      description: "Connect your instruments and microphones with clarity",
      link: "/guides/audio-interfaces",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/WDYXYh2uC4vcBcthFfQaIv/sandbox/kA7pmf6jEALLS0gON3fW08-img-2_1770500429000_na1fn_YWJzdHJhY3Qtc291bmQtd2F2ZXM.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV0RZWFloMnVDNHZjQmN0aEZmUWFJdi9zYW5kYm94L2tBN3BtZjZqRUFMTFMwZ09OM2ZXMDgtaW1nLTJfMTc3MDUwMDQyOTAwMF9uYTFmbl9ZV0p6ZEhKaFkzUXRjMjkxYm1RdGQyRjJaWE0ucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N1mzOzd9qUvyNZqt58-kRhcolpIWAlTqg2tseO~s3OLaXE9EoSFdgUimyvu84GgCsam-DNvxQZsd8CvLEW-WYVd2jWt3eBTiN5UT9JkX0li05HEojJP-CzW~ogStmXCLAMo860ig0DZt6ht7SsEU5XtafKWA4A4~dFsDsVh5XEI8k9dzogvz1ENDCNUY6Byipb6qkXfJNgSfII0WPQaq70MZNLHrpdlRppZOYMTlHJxvlVr8vUcWA8da4jJruaGWvffT1zWj-wib~VwWhXNgy3tAYIRXOsQ4X6ey4xEdtBgnAIx4jWSwUs0eU6uG3~Fbl-8Jelc86wSKljKKGtS5qA__')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
        </div>

        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  Free Tools for Producers
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Create Music That{" "}
                <span className="gradient-text">Moves People</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Access professional music production tools, songwriting resources, and expert gear guides—all in one place. From chord generators to equipment reviews, we've got you covered.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/tools">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8">
                    Explore Tools
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/guides">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-border hover:border-accent hover:text-accent transition-colors">
                    <BookOpen className="mr-2 w-5 h-5" />
                    Read Guides
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/WDYXYh2uC4vcBcthFfQaIv/sandbox/kA7pmf6jEALLS0gON3fW08-img-1_1770500425000_na1fn_aGVyby1zdHVkaW8tc2V0dXA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV0RZWFloMnVDNHZjQmN0aEZmUWFJdi9zYW5kYm94L2tBN3BtZjZqRUFMTFMwZ09OM2ZXMDgtaW1nLTFfMTc3MDUwMDQyNTAwMF9uYTFmbl9hR1Z5YnkxemRIVmthVzh0YzJWMGRYQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=i6xDbKXyt-6Sj3Wo28bKUXFOYJr4iSGqLC54Y5mAAuTlQx-uO~2jKi83PVwzsbLY1m-1DhwdogwxuR0Mb40C7uXsIWnm8lyhzVoxGbpYVqMQf4IQczLM6y20JMrA0OyO0ZJKQt74ws~fz7StYkqTTQVQ6Jpr3ohnEoXZgITsDdIDfcq2KrtJ9RTLQDOw6UmgCwpaKYx~iv9Tpux710GibrI-RF3IqVgESY30Gw~Fu934vkXQJTfoFhW9YLoq7eMMMrkf-SCijrXkcslGccoPgQMP3wpQGgVThR1W6SMuBp8yIJl2vPBtNKCnpnuvsKaJhg1cHSV6oOMFBK7cYU1eug__"
                  alt="Professional music production studio setup"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Production Tools That <span className="gradient-text">Actually Help</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive tools designed by producers, for producers. No signup required, completely free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link key={index} href={tool.href}>
                  <Card className="h-full bg-card border-border hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {tool.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {tool.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/tools">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View All Tools
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gear Guides Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/WDYXYh2uC4vcBcthFfQaIv/sandbox/kA7pmf6jEALLS0gON3fW08-img-4_1770500427000_na1fn_cHJvZHVjZXItd29ya3NwYWNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV0RZWFloMnVDNHZjQmN0aEZmUWFJdi9zYW5kYm94L2tBN3BtZjZqRUFMTFMwZ09OM2ZXMDgtaW1nLTRfMTc3MDUwMDQyNzAwMF9uYTFmbl9jSEp2WkhWalpYSXRkMjl5YTNOd1lXTmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jOODp9IN42eKXKMTUox8xOwbc-BdnBv2u~CFkqsV1sgUJS6u5Kl8ll6tib0dM2KNG5CpS5npxJjE5StJbBPq77iXsU~uOt61iWPZgaDdYS6s64-nJmIyF~3Qmy0kOR4pgK0mN23dRqw4whMHyVex6o2dg0auXE6U7tfBiZlaorbKw0413Hubw21qtBWFo~RyVTYeFy3ZjR-RPLuGiSuO9Fm~EwVeYBMzfS5N9prWnv9Ait8RjfUdO0DKLHODgiypYL5s~~zfKXYLVAJMUjn8kc0VzqedSUr7M4cfKdEyWGQGsQiD9xDcFMPge0hj3F5uonafmAIsAegpKtRdotKDfg__"
                  alt="Producer workspace with laptop and MIDI controller"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold">
                Build Your <span className="gradient-text">Dream Studio</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Not sure what gear to buy? Our comprehensive guides break down the best equipment for every budget, from bedroom producers to professional studios.
              </p>

              <div className="space-y-4">
                {gearCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Link key={index} href={category.link}>
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors ml-auto flex-shrink-0" />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <Link href="/guides">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  <ShoppingCart className="mr-2 w-5 h-5" />
                  Explore All Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/WDYXYh2uC4vcBcthFfQaIv/sandbox/kA7pmf6jEALLS0gON3fW08-img-5_1770500427000_na1fn_YXVkaW8td2F2ZWZvcm0tcGF0dGVybg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvV0RZWFloMnVDNHZjQmN0aEZmUWFJdi9zYW5kYm94L2tBN3BtZjZqRUFMTFMwZ09OM2ZXMDgtaW1nLTVfMTc3MDUwMDQyNzAwMF9uYTFmbl9ZWFZrYVc4dGQyRjJaV1p2Y20wdGNHRjBkR1Z5YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KdFex7jlPFg9JxD3urfMK9LPXre1GmAzzSfG1J~oRn3EEyR5cYMpuEUML4YU8jSsGLiliQujyyJXe9jSm3Xk37JK5Y4RdWqypEDOeBbv-o8OmALYgREbpz9V9oSv5~4lkZciw5p1Lppekht4fULza9wyhD3WDuxU0jhqyxdKwVJ2q~Y0benLSYIB-M1rs-NFuAEsS2E38a3ibvVCqE-JJQhqFPar63X6elGr35Zi7tLZ1lsQjoYYwiUpnBUB1RRIgkoJ4d15i6D~Gv3yU2ysYUQ0ExqQ5f~lglblUNk3m4pYhDgUlYdru9GGBov2Vu97hWfM-uU7idtvnGiX7oRL3Q__')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat',
            }}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Level Up Your Production?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of producers using our tools and guides to create better music. Get started for free today.
            </p>
            <Link href="/tools">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
                Start Creating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
