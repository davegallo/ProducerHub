/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Clock, X } from "lucide-react";
import { toast } from "sonner";

export default function KeyFinder() {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [detectedKey, setDetectedKey] = useState<string | null>(null);
  const [detectedScale, setDetectedScale] = useState<string | null>(null);

  const allNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

  // Scale patterns (intervals from root)
  const scales = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10], // Natural minor
    locrian: [0, 1, 3, 5, 6, 8, 10],
  };

  const toggleNote = (note: string) => {
    if (selectedNotes.includes(note)) {
      setSelectedNotes(selectedNotes.filter(n => n !== note));
    } else {
      setSelectedNotes([...selectedNotes, note]);
    }
    setDetectedKey(null);
    setDetectedScale(null);
  };

  const clearNotes = () => {
    setSelectedNotes([]);
    setDetectedKey(null);
    setDetectedScale(null);
    toast.success("Cleared!");
  };

  const analyzeKey = () => {
    if (selectedNotes.length < 3) {
      toast.error("Please select at least 3 notes");
      return;
    }

    // Convert selected notes to intervals
    const noteIndices = selectedNotes.map(note => allNotes.indexOf(note)).sort((a, b) => a - b);

    let bestMatch = { key: "", scale: "", matchCount: 0 };

    // Try each key and scale combination
    allNotes.forEach(rootNote => {
      const rootIndex = allNotes.indexOf(rootNote);
      
      Object.entries(scales).forEach(([scaleName, scaleIntervals]) => {
        const scaleNotes = scaleIntervals.map(interval => (rootIndex + interval) % 12);
        const matchCount = noteIndices.filter(noteIdx => scaleNotes.includes(noteIdx)).length;
        
        if (matchCount > bestMatch.matchCount) {
          bestMatch = { key: rootNote, scale: scaleName, matchCount };
        }
      });
    });

    if (bestMatch.matchCount >= 3) {
      setDetectedKey(bestMatch.key);
      setDetectedScale(bestMatch.scale);
      toast.success(`Key detected: ${bestMatch.key} ${bestMatch.scale}!`);
    } else {
      toast.error("Could not determine key. Try adding more notes.");
    }
  };

  const blackKeys = ["C#", "D#", null, "F#", "G#", "A#", null];
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Key & Scale <span className="gradient-text">Finder</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Identify the key and scale of any melody or chord progression. Perfect for remixing, sampling, and music theory analysis.
            </p>
          </div>

          {/* Instructions */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Click on the notes below that appear in your melody or chord progression. Select at least 3 notes, then click "Analyze Key" to detect the most likely key and scale.
              </p>
            </CardContent>
          </Card>

          {/* Note Selector */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Select Notes</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearNotes}
                  className="border-accent/30 hover:bg-accent/10"
                  disabled={selectedNotes.length === 0}
                >
                  <X className="mr-2 w-4 h-4" />
                  Clear
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Selected Notes Display */}
              {selectedNotes.length > 0 && (
                <div className="mb-6 p-4 rounded-lg bg-gradient-primary/5 border border-accent/20">
                  <div className="text-sm text-muted-foreground mb-2">Selected Notes:</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedNotes.map((note) => (
                      <div
                        key={note}
                        className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium"
                      >
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Piano Keyboard */}
              <div className="relative bg-background rounded-lg p-8 overflow-x-auto">
                <div className="relative h-48 min-w-[700px]">
                  {/* White Keys */}
                  <div className="flex gap-1 h-full">
                    {whiteKeys.map((note) => {
                      const isSelected = selectedNotes.includes(note);
                      return (
                        <button
                          key={note}
                          onClick={() => toggleNote(note)}
                          className={`flex-1 rounded-b-lg border-2 transition-all ${
                            isSelected
                              ? "bg-accent border-accent shadow-lg shadow-accent/50"
                              : "bg-white border-gray-300 hover:bg-gray-100"
                          }`}
                        >
                          <div className="h-full flex items-end justify-center pb-4">
                            <span className={`text-sm font-medium ${isSelected ? "text-accent-foreground" : "text-gray-600"}`}>
                              {note}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Black Keys */}
                  <div className="absolute top-0 left-0 right-0 h-28 flex pointer-events-none">
                    {blackKeys.map((note, index) => {
                      if (note === null) {
                        return <div key={`gap-${index}`} className="flex-1" />;
                      }
                      const isSelected = selectedNotes.includes(note);
                      return (
                        <div key={note} className="flex-1 relative">
                          <button
                            onClick={() => toggleNote(note)}
                            className={`absolute left-1/2 -translate-x-1/2 w-10 h-full rounded-b-lg transition-all pointer-events-auto ${
                              isSelected
                                ? "bg-accent border-2 border-accent shadow-lg shadow-accent/50"
                                : "bg-gray-800 border-2 border-gray-900 hover:bg-gray-700"
                            }`}
                          >
                            <div className="h-full flex items-end justify-center pb-2">
                              <span className={`text-xs font-medium ${isSelected ? "text-accent-foreground" : "text-white"}`}>
                                {note}
                              </span>
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Button
                onClick={analyzeKey}
                className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
                disabled={selectedNotes.length < 3}
              >
                Analyze Key
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {detectedKey && detectedScale && (
            <Card className="bg-gradient-primary/5 border-accent/20 mb-8">
              <CardHeader>
                <CardTitle>Detected Key</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">
                    {detectedKey} {detectedScale.charAt(0).toUpperCase() + detectedScale.slice(1)}
                  </div>
                  <p className="text-muted-foreground">
                    This is the most likely key based on your selected notes. Try playing along in this key!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Common Scales</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p><strong>Major:</strong> Happy, bright sound (most pop music)</p>
                <p><strong>Minor:</strong> Sad, dark sound (emotional songs)</p>
                <p><strong>Dorian:</strong> Jazzy, sophisticated (jazz, funk)</p>
                <p><strong>Mixolydian:</strong> Bluesy, rock sound (rock, blues)</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Select notes from the main melody or bassline</p>
                <p>• More notes = more accurate detection</p>
                <p>• Works best with diatonic music (Western scales)</p>
                <p>• Use with samples to match keys when remixing</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Master Music Theory</h3>
                <p className="text-muted-foreground mb-6">
                  Deepen your understanding of keys, scales, and harmony with courses from expert instructors.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Music Theory Courses
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
