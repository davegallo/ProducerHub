/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mic2 } from "lucide-react";
import { toast } from "sonner";

export default function VocalRange() {
  const [lowestNote, setLowestNote] = useState<string>("");
  const [highestNote, setHighestNote] = useState<string>("");
  const [vocalType, setVocalType] = useState<string | null>(null);
  const [rangeInSemitones, setRangeInSemitones] = useState<number>(0);

  const notes = [
    "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2",
    "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3",
    "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4",
    "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5",
    "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6",
  ];

  const vocalTypes = [
    { name: "Bass", range: "E2-E4", description: "Lowest male voice" },
    { name: "Baritone", range: "A2-A4", description: "Most common male voice" },
    { name: "Tenor", range: "C3-C5", description: "Higher male voice" },
    { name: "Alto", range: "F3-F5", description: "Lower female voice" },
    { name: "Mezzo-Soprano", range: "A3-A5", description: "Most common female voice" },
    { name: "Soprano", range: "C4-C6", description: "Highest female voice" },
  ];

  const calculateRange = () => {
    if (!lowestNote || !highestNote) {
      toast.error("Please select both lowest and highest notes");
      return;
    }

    const lowestIndex = notes.indexOf(lowestNote);
    const highestIndex = notes.indexOf(highestNote);

    if (highestIndex <= lowestIndex) {
      toast.error("Highest note must be higher than lowest note");
      return;
    }

    const semitones = highestIndex - lowestIndex;
    setRangeInSemitones(semitones);

    // Determine vocal type
    const lowestNoteBase = lowestNote.replace(/[0-9]/g, '');
    const lowestOctave = parseInt(lowestNote.replace(/[^0-9]/g, ''));
    const highestNoteBase = highestNote.replace(/[0-9]/g, '');
    const highestOctave = parseInt(highestNote.replace(/[^0-9]/g, ''));

    let detectedType = "Unknown";
    
    if (lowestOctave <= 2 && highestOctave <= 4) {
      detectedType = "Bass";
    } else if (lowestOctave <= 2 && highestOctave <= 4) {
      detectedType = "Baritone";
    } else if (lowestOctave >= 3 && highestOctave <= 5 && lowestOctave < 4) {
      detectedType = "Tenor";
    } else if (lowestOctave >= 3 && highestOctave >= 5) {
      detectedType = "Alto";
    } else if (lowestOctave >= 3 && highestOctave >= 5) {
      detectedType = "Mezzo-Soprano";
    } else if (lowestOctave >= 4 && highestOctave >= 6) {
      detectedType = "Soprano";
    }

    setVocalType(detectedType);
    toast.success("Vocal range calculated!");
  };

  const suggestedSongs = {
    Bass: ["Johnny Cash - Ring of Fire", "Barry White - Can't Get Enough", "Leonard Cohen - Hallelujah"],
    Baritone: ["Frank Sinatra - My Way", "Elvis Presley - Can't Help Falling in Love", "John Legend - All of Me"],
    Tenor: ["Ed Sheeran - Perfect", "Bruno Mars - Just The Way You Are", "Sam Smith - Stay With Me"],
    Alto: ["Adele - Someone Like You", "Amy Winehouse - Back to Black", "Lorde - Royals"],
    "Mezzo-Soprano": ["Beyoncé - Halo", "Taylor Swift - Love Story", "Ariana Grande - Thank U, Next"],
    Soprano: ["Mariah Carey - Hero", "Whitney Houston - I Will Always Love You", "Christina Aguilera - Beautiful"],
    Unknown: [],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Mic2 className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Vocal Range <span className="gradient-text">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Determine your vocal range and discover your voice type. Find songs that match your range perfectly.
            </p>
          </div>

          {/* Instructions */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>How to Find Your Range</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>1. Warm up your voice with scales or gentle humming</p>
              <p>2. Find the lowest note you can comfortably sing (not whisper or growl)</p>
              <p>3. Find the highest note you can comfortably sing (not falsetto or scream)</p>
              <p>4. Select both notes below and calculate your range</p>
            </CardContent>
          </Card>

          {/* Range Input */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Your Vocal Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Lowest Note */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Lowest Note</label>
                  <Select value={lowestNote} onValueChange={setLowestNote}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select lowest note" />
                    </SelectTrigger>
                    <SelectContent>
                      {notes.slice(0, 36).map((note) => (
                        <SelectItem key={note} value={note}>
                          {note}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Highest Note */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Highest Note</label>
                  <Select value={highestNote} onValueChange={setHighestNote}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select highest note" />
                    </SelectTrigger>
                    <SelectContent>
                      {notes.slice(12).map((note) => (
                        <SelectItem key={note} value={note}>
                          {note}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={calculateRange}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                size="lg"
              >
                Calculate Range
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {vocalType && (
            <>
              <Card className="bg-gradient-primary/5 border-accent/20 mb-8">
                <CardHeader>
                  <CardTitle>Your Voice Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold gradient-text mb-2">
                      {vocalType}
                    </div>
                    <div className="text-lg text-muted-foreground mb-4">
                      Range: {lowestNote} - {highestNote} ({rangeInSemitones} semitones)
                    </div>
                    <p className="text-muted-foreground">
                      {vocalTypes.find(v => v.name === vocalType)?.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Suggested Songs */}
              {suggestedSongs[vocalType as keyof typeof suggestedSongs]?.length > 0 && (
                <Card className="bg-card/50 border-border mb-8">
                  <CardHeader>
                    <CardTitle>Songs That Match Your Range</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {suggestedSongs[vocalType as keyof typeof suggestedSongs].map((song, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-background border border-border hover:border-accent/30 transition-all"
                        >
                          <span className="font-medium">{song}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {/* Voice Types Reference */}
          <Card className="bg-card/50 border-border mb-8">
            <CardHeader>
              <CardTitle>Voice Types Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {vocalTypes.map((type) => (
                  <div
                    key={type.name}
                    className="p-4 rounded-lg bg-background border border-border"
                  >
                    <div className="font-semibold mb-1">{type.name}</div>
                    <div className="text-sm text-accent mb-1">{type.range}</div>
                    <div className="text-sm text-muted-foreground">{type.description}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Vocal Health Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Always warm up before singing</p>
                <p>• Stay hydrated (drink water, not milk)</p>
                <p>• Don't strain or force high/low notes</p>
                <p>• Rest your voice when tired or sick</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Expanding Your Range</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Practice scales daily</p>
                <p>• Work with a vocal coach</p>
                <p>• Gradually push boundaries (don't force)</p>
                <p>• Focus on technique over raw power</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Improve Your Singing</h3>
                <p className="text-muted-foreground mb-6">
                  Take your vocals to the next level with professional microphones, vocal courses, and training resources.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Vocal Training Resources
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
