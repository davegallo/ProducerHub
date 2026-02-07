/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Activity } from "lucide-react";

export default function FrequencyChart() {
  const [selectedInstrument, setSelectedInstrument] = useState<string | null>(null);

  const frequencyRanges = [
    {
      name: "Sub Bass",
      range: "20-60 Hz",
      description: "Felt more than heard. Rumble and power.",
      color: "bg-purple-500",
      instruments: ["Kick Drum", "Bass Guitar", "Synth Bass"],
    },
    {
      name: "Bass",
      range: "60-250 Hz",
      description: "Warmth and body. Foundation of the mix.",
      color: "bg-blue-500",
      instruments: ["Bass Guitar", "Kick Drum", "Toms", "Cello"],
    },
    {
      name: "Low Mids",
      range: "250-500 Hz",
      description: "Muddiness lives here. Cut carefully.",
      color: "bg-cyan-500",
      instruments: ["Guitars", "Snare", "Vocals", "Piano"],
    },
    {
      name: "Midrange",
      range: "500 Hz-2 kHz",
      description: "Presence and clarity. Most important for vocals.",
      color: "bg-green-500",
      instruments: ["Vocals", "Guitars", "Piano", "Strings"],
    },
    {
      name: "Upper Mids",
      range: "2-4 kHz",
      description: "Attack and definition. Can be harsh.",
      color: "bg-yellow-500",
      instruments: ["Vocals", "Snare", "Hi-Hats", "Cymbals"],
    },
    {
      name: "Presence",
      range: "4-6 kHz",
      description: "Clarity and intelligibility. Vocal presence.",
      color: "bg-orange-500",
      instruments: ["Vocals", "Acoustic Guitar", "Hi-Hats"],
    },
    {
      name: "Brilliance",
      range: "6-20 kHz",
      description: "Air and sparkle. High-end detail.",
      color: "bg-red-500",
      instruments: ["Cymbals", "Hi-Hats", "Strings", "Vocals (air)"],
    },
  ];

  const instruments = [
    {
      name: "Kick Drum",
      fundamental: "50-100 Hz",
      body: "60-80 Hz",
      attack: "2-4 kHz",
      tips: "Boost 60-80 Hz for body, 2-4 kHz for beater attack. Cut 200-500 Hz to reduce mud.",
    },
    {
      name: "Snare",
      fundamental: "150-250 Hz",
      body: "200 Hz",
      attack: "3-5 kHz",
      tips: "Boost 200 Hz for body, 3-5 kHz for crack. Cut 300-600 Hz if boxy.",
    },
    {
      name: "Bass Guitar",
      fundamental: "40-250 Hz",
      body: "80-120 Hz",
      attack: "700 Hz-1 kHz",
      tips: "Boost 80-120 Hz for warmth, 700 Hz-1 kHz for definition. High-pass below 40 Hz.",
    },
    {
      name: "Vocals",
      fundamental: "100-300 Hz",
      body: "200-500 Hz",
      presence: "2-5 kHz",
      tips: "Boost 2-5 kHz for presence, 8-12 kHz for air. Cut 200-500 Hz if muddy.",
    },
    {
      name: "Acoustic Guitar",
      fundamental: "80-200 Hz",
      body: "200-500 Hz",
      presence: "2-5 kHz",
      tips: "Boost 200-500 Hz for warmth, 2-5 kHz for clarity. Cut below 80 Hz.",
    },
    {
      name: "Electric Guitar",
      fundamental: "80-250 Hz",
      body: "200-800 Hz",
      presence: "2-4 kHz",
      tips: "Boost 200-800 Hz for body, 2-4 kHz for bite. Cut 250 Hz if muddy.",
    },
    {
      name: "Piano",
      fundamental: "27-4186 Hz",
      body: "100-300 Hz",
      presence: "2-5 kHz",
      tips: "Wide range. Boost 100-300 Hz for warmth, 2-5 kHz for clarity.",
    },
    {
      name: "Hi-Hats",
      fundamental: "200-500 Hz",
      body: "5-8 kHz",
      air: "10-15 kHz",
      tips: "Boost 5-8 kHz for presence, 10-15 kHz for air. High-pass below 200 Hz.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Frequency <span className="gradient-text">Chart</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visual reference for EQ frequencies. Know exactly where to boost or cut for each instrument in your mix.
            </p>
          </div>

          {/* Frequency Spectrum Visual */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Frequency Spectrum (20 Hz - 20 kHz)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {frequencyRanges.map((range, index) => {
                  const isSelected = selectedInstrument && range.instruments.includes(selectedInstrument);
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg transition-all ${
                        isSelected
                          ? "ring-2 ring-accent shadow-lg shadow-accent/20"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className={`w-16 h-16 rounded-lg ${range.color} flex items-center justify-center text-white font-bold text-xs`}>
                          {range.range}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg">{range.name}</div>
                          <div className="text-sm text-muted-foreground">{range.description}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {range.instruments.map((instrument) => (
                          <button
                            key={instrument}
                            onClick={() => setSelectedInstrument(instrument)}
                            className={`px-3 py-1 rounded-full text-xs transition-all ${
                              selectedInstrument === instrument
                                ? "bg-accent text-accent-foreground"
                                : "bg-muted text-muted-foreground hover:bg-accent/20"
                            }`}
                          >
                            {instrument}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Instrument Details */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Instrument EQ Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {instruments.map((instrument) => {
                  const isSelected = selectedInstrument === instrument.name;
                  return (
                    <button
                      key={instrument.name}
                      onClick={() => setSelectedInstrument(instrument.name)}
                      className={`p-4 rounded-lg text-left transition-all ${
                        isSelected
                          ? "bg-gradient-primary/10 border-2 border-accent"
                          : "bg-background border border-border hover:border-accent/30"
                      }`}
                    >
                      <div className="font-semibold mb-2">{instrument.name}</div>
                      <div className="text-sm space-y-1">
                        <div className="text-muted-foreground">
                          <strong>Fundamental:</strong> {instrument.fundamental}
                        </div>
                        <div className="text-muted-foreground">
                          <strong>Body:</strong> {instrument.body}
                        </div>
                        {instrument.attack && (
                          <div className="text-muted-foreground">
                            <strong>Attack:</strong> {instrument.attack}
                          </div>
                        )}
                        {instrument.presence && (
                          <div className="text-muted-foreground">
                            <strong>Presence:</strong> {instrument.presence}
                          </div>
                        )}
                        {instrument.air && (
                          <div className="text-muted-foreground">
                            <strong>Air:</strong> {instrument.air}
                          </div>
                        )}
                      </div>
                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-border text-sm text-accent">
                          💡 {instrument.tips}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* EQ Tips */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Cutting vs Boosting</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Cut to remove problems (mud, harshness)</p>
                <p>• Boost to enhance character (presence, air)</p>
                <p>• Cutting is generally safer than boosting</p>
                <p>• Use narrow Q for cuts, wide Q for boosts</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Common Problems</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• <strong>Muddy:</strong> Cut 200-500 Hz</p>
                <p>• <strong>Boxy:</strong> Cut 300-600 Hz</p>
                <p>• <strong>Harsh:</strong> Cut 2-4 kHz</p>
                <p>• <strong>Thin:</strong> Boost 100-300 Hz</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Pro Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Use your ears, not just your eyes</p>
                <p>• Reference on multiple speakers</p>
                <p>• Less is often more with EQ</p>
                <p>• High-pass everything except bass/kick</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Master Mixing & EQ</h3>
                <p className="text-muted-foreground mb-6">
                  Learn professional mixing techniques and get the best EQ plugins to take your productions to the next level.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Mixing Resources
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
