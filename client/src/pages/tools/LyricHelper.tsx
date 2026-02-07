/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Search } from "lucide-react";
import { toast } from "sonner";

export default function LyricHelper() {
  const [searchWord, setSearchWord] = useState("");
  const [rhymes, setRhymes] = useState<string[]>([]);
  const [nearRhymes, setNearRhymes] = useState<string[]>([]);

  // Simple rhyme database (in production, this would use an API)
  const rhymeDatabase: Record<string, { perfect: string[], near: string[] }> = {
    love: {
      perfect: ["above", "dove", "glove", "shove", "thereof"],
      near: ["move", "prove", "groove", "remove", "approve"],
    },
    heart: {
      perfect: ["art", "part", "start", "chart", "smart", "apart"],
      near: ["hard", "guard", "yard", "card", "regard"],
    },
    night: {
      perfect: ["light", "sight", "right", "fight", "bright", "flight", "might", "tight"],
      near: ["life", "time", "mind", "find", "kind"],
    },
    dream: {
      perfect: ["beam", "cream", "stream", "team", "scheme", "theme"],
      near: ["free", "see", "believe", "achieve", "breathe"],
    },
    fire: {
      perfect: ["desire", "inspire", "require", "admire", "acquire", "retire"],
      near: ["higher", "wire", "tired", "inspired"],
    },
    time: {
      perfect: ["rhyme", "climb", "prime", "crime", "sublime", "chime"],
      near: ["mind", "find", "kind", "blind", "behind"],
    },
    soul: {
      perfect: ["goal", "whole", "control", "roll", "toll", "stroll"],
      near: ["hold", "cold", "bold", "gold", "told"],
    },
    way: {
      perfect: ["day", "say", "play", "stay", "away", "today", "gray"],
      near: ["make", "take", "break", "wake", "shake"],
    },
  };

  const handleSearch = () => {
    const word = searchWord.toLowerCase().trim();
    
    if (!word) {
      toast.error("Please enter a word");
      return;
    }

    if (rhymeDatabase[word]) {
      setRhymes(rhymeDatabase[word].perfect);
      setNearRhymes(rhymeDatabase[word].near);
      toast.success(`Found rhymes for "${word}"!`);
    } else {
      setRhymes([]);
      setNearRhymes([]);
      toast.error(`No rhymes found. Try: ${Object.keys(rhymeDatabase).slice(0, 5).join(", ")}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const commonWords = Object.keys(rhymeDatabase);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Rhyme & Lyric <span className="gradient-text">Helper</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover perfect rhymes and near-rhymes to elevate your songwriting. Never get stuck on a lyric again.
            </p>
          </div>

          {/* Search Interface */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Find Rhymes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Enter a word (e.g., love, heart, night)"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="bg-background border-border text-lg"
                />
                <Button 
                  onClick={handleSearch}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity px-8"
                >
                  <Search className="mr-2 w-5 h-5" />
                  Search
                </Button>
              </div>

              {/* Quick Word Suggestions */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Try:</span>
                {commonWords.slice(0, 6).map((word) => (
                  <button
                    key={word}
                    onClick={() => {
                      setSearchWord(word);
                      setTimeout(() => handleSearch(), 100);
                    }}
                    className="px-3 py-1 rounded-full bg-muted hover:bg-accent/20 hover:text-accent text-sm transition-all"
                  >
                    {word}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {(rhymes.length > 0 || nearRhymes.length > 0) && (
            <div className="space-y-6">
              {/* Perfect Rhymes */}
              {rhymes.length > 0 && (
                <Card className="bg-gradient-primary/5 border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                      Perfect Rhymes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {rhymes.map((rhyme, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 rounded-lg bg-card border border-accent/30 hover:border-accent hover:bg-accent/10 transition-all cursor-pointer"
                        >
                          <span className="font-medium">{rhyme}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Near Rhymes */}
              {nearRhymes.length > 0 && (
                <Card className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-muted-foreground" />
                      Near Rhymes (Slant Rhymes)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {nearRhymes.map((rhyme, index) => (
                        <div
                          key={index}
                          className="px-4 py-2 rounded-lg bg-background border border-border hover:border-accent/30 hover:bg-muted transition-all cursor-pointer"
                        >
                          <span className="font-medium text-muted-foreground">{rhyme}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Songwriting Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Don't force rhymes—near rhymes often sound more natural</p>
                <p>• Vary your rhyme schemes (AABB, ABAB, ABCB)</p>
                <p>• Internal rhymes add sophistication</p>
                <p>• The best lyrics prioritize meaning over perfect rhymes</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Rhyme Types</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p><strong>Perfect Rhyme:</strong> Identical sounds (love/above)</p>
                <p><strong>Near Rhyme:</strong> Similar but not identical (love/move)</p>
                <p><strong>Internal Rhyme:</strong> Rhyme within a line</p>
                <p><strong>Multisyllabic:</strong> Multiple syllables rhyme</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Master the Art of Songwriting</h3>
                <p className="text-muted-foreground mb-6">
                  Take your lyrics to the next level with courses from industry professionals. Learn from the best songwriters in the business.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Songwriting Courses
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
