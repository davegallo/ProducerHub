/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Piano } from "lucide-react";

export default function PianoChords() {
  const [selectedKey, setSelectedKey] = useState("C");
  const [selectedChord, setSelectedChord] = useState("major");

  const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const chordTypes = [
    { value: "major", label: "Major", intervals: [0, 4, 7] },
    { value: "minor", label: "Minor", intervals: [0, 3, 7] },
    { value: "maj7", label: "Major 7th", intervals: [0, 4, 7, 11] },
    { value: "min7", label: "Minor 7th", intervals: [0, 3, 7, 10] },
    { value: "dom7", label: "Dominant 7th", intervals: [0, 4, 7, 10] },
    { value: "dim", label: "Diminished", intervals: [0, 3, 6] },
    { value: "aug", label: "Augmented", intervals: [0, 4, 8] },
    { value: "sus2", label: "Sus2", intervals: [0, 2, 7] },
    { value: "sus4", label: "Sus4", intervals: [0, 5, 7] },
  ];

  const allNotes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  
  const getChordNotes = () => {
    const rootIndex = allNotes.indexOf(selectedKey);
    const chordType = chordTypes.find(c => c.value === selectedChord);
    if (!chordType) return [];
    
    return chordType.intervals.map(interval => {
      const noteIndex = (rootIndex + interval) % 12;
      return allNotes[noteIndex];
    });
  };

  const chordNotes = getChordNotes();
  const currentChordType = chordTypes.find(c => c.value === selectedChord);

  // Piano keyboard layout (2 octaves)
  const whiteKeys = ["C", "D", "E", "F", "G", "A", "B"];
  const blackKeys = ["C#", "D#", null, "F#", "G#", "A#", null]; // null for gaps

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Piano className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Piano Chord <span className="gradient-text">Reference</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive piano chord chart with visual keyboard. Learn and reference chords in all keys.
            </p>
          </div>

          {/* Chord Selector */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Select Chord</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Key Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Root Note</label>
                  <Select value={selectedKey} onValueChange={setSelectedKey}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {keys.map((key) => (
                        <SelectItem key={key} value={key}>
                          {key}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Chord Type Selector */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Chord Type</label>
                  <Select value={selectedChord} onValueChange={setSelectedChord}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {chordTypes.map((chord) => (
                        <SelectItem key={chord.value} value={chord.value}>
                          {chord.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Chord Display */}
              <div className="text-center p-6 rounded-lg bg-gradient-primary/5 border border-accent/20">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {selectedKey} {currentChordType?.label}
                </div>
                <div className="text-lg text-muted-foreground">
                  Notes: {chordNotes.join(" - ")}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Piano Keyboard */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Piano Keyboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-background rounded-lg p-8 overflow-x-auto">
                {/* Keyboard Container */}
                <div className="relative h-48 min-w-[700px]">
                  {/* White Keys */}
                  <div className="flex gap-1 h-full">
                    {whiteKeys.map((note, octave) => {
                      return [0, 1].map((oct) => {
                        const fullNote = note;
                        const isActive = chordNotes.includes(fullNote);
                        return (
                          <div
                            key={`${note}-${oct}`}
                            className={`flex-1 rounded-b-lg border-2 transition-all ${
                              isActive
                                ? "bg-accent border-accent shadow-lg shadow-accent/50"
                                : "bg-white border-gray-300 hover:bg-gray-100"
                            }`}
                          >
                            <div className="h-full flex items-end justify-center pb-4">
                              <span className={`text-xs font-medium ${isActive ? "text-accent-foreground" : "text-gray-600"}`}>
                                {fullNote}
                              </span>
                            </div>
                          </div>
                        );
                      });
                    })}
                  </div>

                  {/* Black Keys */}
                  <div className="absolute top-0 left-0 right-0 h-28 flex pointer-events-none">
                    {blackKeys.map((note, index) => {
                      return [0, 1].map((oct) => {
                        if (note === null) {
                          return <div key={`gap-${index}-${oct}`} className="flex-1" />;
                        }
                        const isActive = chordNotes.includes(note);
                        return (
                          <div key={`${note}-${oct}`} className="flex-1 relative">
                            <div
                              className={`absolute left-1/2 -translate-x-1/2 w-8 h-full rounded-b-lg transition-all pointer-events-auto ${
                                isActive
                                  ? "bg-accent border-2 border-accent shadow-lg shadow-accent/50"
                                  : "bg-gray-800 border-2 border-gray-900 hover:bg-gray-700"
                              }`}
                            >
                              <div className="h-full flex items-end justify-center pb-2">
                                <span className={`text-xs font-medium ${isActive ? "text-accent-foreground" : "text-white"}`}>
                                  {note}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      });
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chord Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Chord Formula</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p><strong>Intervals:</strong> {currentChordType?.intervals.join(", ")}</p>
                <p><strong>Notes:</strong> {chordNotes.join(", ")}</p>
                <p className="pt-2">
                  {selectedChord === "major" && "Bright, happy sound. Most common chord type."}
                  {selectedChord === "minor" && "Sad, melancholic sound. Second most common."}
                  {selectedChord === "maj7" && "Jazzy, sophisticated sound. Adds color to major."}
                  {selectedChord === "min7" && "Smooth, mellow sound. Common in jazz and R&B."}
                  {selectedChord === "dom7" && "Tense, bluesy sound. Wants to resolve."}
                  {selectedChord === "dim" && "Dissonant, unstable sound. Creates tension."}
                  {selectedChord === "aug" && "Dreamy, mysterious sound. Rarely used."}
                  {selectedChord === "sus2" && "Open, floating sound. No major or minor."}
                  {selectedChord === "sus4" && "Suspended, unresolved sound. Creates anticipation."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Practice Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Practice chord shapes in all 12 keys</p>
                <p>• Learn inversions to create smoother transitions</p>
                <p>• Try different voicings (spread notes across octaves)</p>
                <p>• Combine with the Chord Progression Generator</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Want to Learn Piano?</h3>
                <p className="text-muted-foreground mb-6">
                  Check out our recommended MIDI keyboards and online piano courses to start your musical journey.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Piano Learning Resources
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
