/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function BPMCalculator() {
  const [bpm, setBpm] = useState<number | null>(null);
  const [taps, setTaps] = useState<number[]>([]);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleTap = () => {
    const now = Date.now();
    const newTaps = [...taps, now];
    
    // Reset if more than 3 seconds since last tap
    if (taps.length > 0 && now - taps[taps.length - 1] > 3000) {
      setTaps([now]);
      setBpm(null);
      setIsActive(true);
      return;
    }

    setTaps(newTaps);
    setIsActive(true);

    // Calculate BPM if we have at least 2 taps
    if (newTaps.length >= 2) {
      const intervals: number[] = [];
      for (let i = 1; i < newTaps.length; i++) {
        intervals.push(newTaps[i] - newTaps[i - 1]);
      }
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const calculatedBpm = Math.round(60000 / avgInterval);
      setBpm(calculatedBpm);
    }

    // Clear timeout if exists
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Auto-reset after 3 seconds of inactivity
    timeoutRef.current = setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  const reset = () => {
    setTaps([]);
    setBpm(null);
    setIsActive(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    toast.success("Reset!");
  };

  const commonBPMs = [
    { genre: "Hip-Hop", range: "80-100" },
    { genre: "House", range: "120-130" },
    { genre: "Techno", range: "125-135" },
    { genre: "Drum & Bass", range: "160-180" },
    { genre: "Dubstep", range: "140" },
    { genre: "Pop", range: "100-130" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              BPM <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect tempo for your track. Tap along to any beat or rhythm to calculate BPM instantly.
            </p>
          </div>

          {/* Main Tool */}
          <Card className="bg-card border-border mb-8">
            <CardContent className="py-12">
              <div className="text-center space-y-8">
                {/* BPM Display */}
                <div className="relative">
                  <div className={`text-8xl font-bold transition-all duration-300 ${
                    isActive ? "gradient-text scale-110" : "text-muted-foreground/30"
                  }`}>
                    {bpm || "---"}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {bpm ? "Beats Per Minute" : "Start tapping to calculate"}
                  </div>
                </div>

                {/* Tap Counter */}
                {taps.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    Taps: {taps.length}
                  </div>
                )}

                {/* Tap Button */}
                <div className="flex justify-center gap-4">
                  <Button
                    onClick={handleTap}
                    size="lg"
                    className={`w-48 h-48 rounded-full text-2xl font-bold transition-all ${
                      isActive 
                        ? "bg-gradient-primary animate-pulse-glow" 
                        : "bg-gradient-primary/50"
                    } hover:opacity-90`}
                  >
                    TAP
                  </Button>
                </div>

                {/* Reset Button */}
                {taps.length > 0 && (
                  <Button
                    onClick={reset}
                    variant="outline"
                    className="border-accent/30 hover:bg-accent/10"
                  >
                    <RotateCcw className="mr-2 w-4 h-4" />
                    Reset
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Common BPM Reference */}
          <Card className="bg-card/50 border-border mb-8">
            <CardHeader>
              <CardTitle>Common BPM by Genre</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {commonBPMs.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-background border border-border hover:border-accent/30 transition-all"
                  >
                    <div className="font-semibold mb-1">{item.genre}</div>
                    <div className="text-sm text-accent">{item.range} BPM</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">How to Use</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>1. Play the song or beat you want to measure</p>
                <p>2. Tap the button in time with the beat</p>
                <p>3. Keep tapping for at least 4-8 beats for accuracy</p>
                <p>4. The BPM will update in real-time</p>
                <p>5. Click "Reset" to start over</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Tap on the kick drum or snare for best results</p>
                <p>• More taps = more accurate BPM reading</p>
                <p>• Use headphones for precise timing</p>
                <p>• Double or halve the result if it seems off (common with half-time/double-time)</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Need a Metronome or DAW?</h3>
                <p className="text-muted-foreground mb-6">
                  Check out our recommended production software and hardware to take your music to the next level.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Recommended Gear
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
