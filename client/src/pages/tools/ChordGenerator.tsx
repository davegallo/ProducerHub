/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music2, RefreshCw, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function ChordGenerator() {
  const [key, setKey] = useState("C");
  const [scale, setScale] = useState("major");
  const [progression, setProgression] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const scales = ["major", "minor", "dorian", "mixolydian"];

  const progressions = {
    major: [
      ["I", "V", "vi", "IV"],
      ["I", "IV", "V", "IV"],
      ["I", "vi", "IV", "V"],
      ["I", "V", "vi", "iii", "IV", "I", "IV", "V"],
      ["I", "IV", "vi", "V"],
      ["I", "iii", "IV", "V"],
    ],
    minor: [
      ["i", "VI", "III", "VII"],
      ["i", "iv", "VII", "III"],
      ["i", "VI", "iv", "V"],
      ["i", "iv", "v", "i"],
      ["i", "VII", "VI", "V"],
    ],
    dorian: [
      ["i", "IV", "v", "i"],
      ["i", "ii", "IV", "v"],
      ["i", "IV", "VII", "i"],
    ],
    mixolydian: [
      ["I", "VII", "IV", "I"],
      ["I", "VII", "IV", "V"],
      ["I", "IV", "VII", "IV"],
    ],
  };

  const generateProgression = () => {
    const availableProgressions = progressions[scale as keyof typeof progressions];
    const randomProgression = availableProgressions[Math.floor(Math.random() * availableProgressions.length)];
    setProgression(randomProgression);
    toast.success("New progression generated!");
  };

  const copyProgression = () => {
    const text = `${key} ${scale}: ${progression.join(" - ")}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Music2 className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Chord Progression <span className="gradient-text">Generator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Generate professional chord progressions instantly. Perfect for overcoming writer's block and discovering new harmonic ideas.
            </p>
          </div>

          {/* Tool Interface */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Key Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Key</label>
                  <Select value={key} onValueChange={setKey}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {keys.map((k) => (
                        <SelectItem key={k} value={k}>
                          {k}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Scale Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Scale/Mode</label>
                  <Select value={scale} onValueChange={setScale}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {scales.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s.charAt(0).toUpperCase() + s.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={generateProgression} 
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                <RefreshCw className="mr-2 w-5 h-5" />
                Generate Progression
              </Button>
            </CardContent>
          </Card>

          {/* Result Display */}
          {progression.length > 0 && (
            <Card className="bg-gradient-primary/5 border-accent/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Your Progression</CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={copyProgression}
                    className="border-accent/30 hover:bg-accent/10"
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    {key} {scale.charAt(0).toUpperCase() + scale.slice(1)}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {progression.map((chord, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-card border-2 border-accent/30 hover:border-accent transition-all"
                    >
                      <span className="text-2xl font-bold gradient-text">{chord}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">How to Use</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>1. Select your desired key from the dropdown</p>
                <p>2. Choose a scale or mode (Major, Minor, Dorian, Mixolydian)</p>
                <p>3. Click "Generate Progression" to create a new chord sequence</p>
                <p>4. Copy the progression and use it in your DAW</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Try different modes for unique flavors (Dorian for jazzy, Mixolydian for bluesy)</p>
                <p>• Experiment with inversions to add movement</p>
                <p>• Layer melodies on top using scale notes</p>
                <p>• Don't be afraid to modify generated progressions</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Want to Learn More About Music Theory?</h3>
                <p className="text-muted-foreground mb-6">
                  Check out our recommended courses and books to deepen your understanding of harmony and composition.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Recommended Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
