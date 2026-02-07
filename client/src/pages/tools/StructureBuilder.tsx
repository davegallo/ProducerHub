/* Design Philosophy: Neo-Sonic Modernism - Interactive tool page */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sliders, Plus, Trash2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface Section {
  id: string;
  type: string;
  duration: number;
}

export default function StructureBuilder() {
  const [structure, setStructure] = useState<Section[]>([
    { id: "1", type: "Intro", duration: 8 },
    { id: "2", type: "Verse", duration: 16 },
    { id: "3", type: "Chorus", duration: 16 },
    { id: "4", type: "Verse", duration: 16 },
    { id: "5", type: "Chorus", duration: 16 },
    { id: "6", type: "Outro", duration: 8 },
  ]);
  const [copied, setCopied] = useState(false);

  const sectionTypes = [
    "Intro",
    "Verse",
    "Pre-Chorus",
    "Chorus",
    "Bridge",
    "Break",
    "Outro",
    "Solo",
    "Drop",
  ];

  const templates = [
    {
      name: "Pop Standard",
      structure: [
        { id: "1", type: "Intro", duration: 4 },
        { id: "2", type: "Verse", duration: 16 },
        { id: "3", type: "Chorus", duration: 16 },
        { id: "4", type: "Verse", duration: 16 },
        { id: "5", type: "Chorus", duration: 16 },
        { id: "6", type: "Bridge", duration: 8 },
        { id: "7", type: "Chorus", duration: 16 },
        { id: "8", type: "Outro", duration: 8 },
      ],
    },
    {
      name: "EDM Drop",
      structure: [
        { id: "1", type: "Intro", duration: 16 },
        { id: "2", type: "Verse", duration: 16 },
        { id: "3", type: "Pre-Chorus", duration: 8 },
        { id: "4", type: "Drop", duration: 16 },
        { id: "5", type: "Break", duration: 8 },
        { id: "6", type: "Drop", duration: 16 },
        { id: "7", type: "Outro", duration: 16 },
      ],
    },
    {
      name: "Hip-Hop",
      structure: [
        { id: "1", type: "Intro", duration: 8 },
        { id: "2", type: "Verse", duration: 16 },
        { id: "3", type: "Chorus", duration: 8 },
        { id: "4", type: "Verse", duration: 16 },
        { id: "5", type: "Chorus", duration: 8 },
        { id: "6", type: "Verse", duration: 16 },
        { id: "7", type: "Chorus", duration: 8 },
        { id: "8", type: "Outro", duration: 8 },
      ],
    },
  ];

  const addSection = () => {
    const newSection: Section = {
      id: Date.now().toString(),
      type: "Verse",
      duration: 16,
    };
    setStructure([...structure, newSection]);
    toast.success("Section added!");
  };

  const removeSection = (id: string) => {
    setStructure(structure.filter((s) => s.id !== id));
    toast.success("Section removed!");
  };

  const updateSection = (id: string, field: keyof Section, value: string | number) => {
    setStructure(
      structure.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const loadTemplate = (templateName: string) => {
    const template = templates.find((t) => t.name === templateName);
    if (template) {
      setStructure(template.structure);
      toast.success(`Loaded ${templateName} template!`);
    }
  };

  const copyStructure = () => {
    const text = structure
      .map((s, i) => `${i + 1}. ${s.type} (${s.duration} bars)`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const totalBars = structure.reduce((sum, s) => sum + s.duration, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-20">
        <div className="container max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary/10 mb-6">
              <Sliders className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Song Structure <span className="gradient-text">Builder</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plan your song's arrangement with proven templates or build your own custom structure. Visualize the flow before you start producing.
            </p>
          </div>

          {/* Templates */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <CardTitle>Load Template</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.name}
                    onClick={() => loadTemplate(template.name)}
                    className="p-4 rounded-lg bg-background border border-border hover:border-accent hover:bg-accent/5 transition-all text-left"
                  >
                    <div className="font-semibold mb-2">{template.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {template.structure.length} sections
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Structure Builder */}
          <Card className="bg-card border-border mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Structure</CardTitle>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    Total: <strong className="text-accent">{totalBars} bars</strong>
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyStructure}
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
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {structure.map((section, index) => (
                <div
                  key={section.id}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  
                  <Select
                    value={section.type}
                    onValueChange={(value) => updateSection(section.id, "type", value)}
                  >
                    <SelectTrigger className="w-40 bg-card border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {sectionTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      max="64"
                      value={section.duration}
                      onChange={(e) =>
                        updateSection(section.id, "duration", parseInt(e.target.value) || 1)
                      }
                      className="w-20 px-3 py-2 rounded-lg bg-card border border-border text-center"
                    />
                    <span className="text-sm text-muted-foreground">bars</span>
                  </div>

                  <div className="flex-1" />

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSection(section.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}

              <Button
                onClick={addSection}
                variant="outline"
                className="w-full border-dashed border-accent/30 hover:bg-accent/5 hover:border-accent"
              >
                <Plus className="mr-2 w-4 h-4" />
                Add Section
              </Button>
            </CardContent>
          </Card>

          {/* Visual Timeline */}
          <Card className="bg-gradient-primary/5 border-accent/20">
            <CardHeader>
              <CardTitle>Visual Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {structure.map((section, index) => {
                  const widthPercent = (section.duration / totalBars) * 100;
                  const colors = [
                    "bg-cyan-500",
                    "bg-purple-500",
                    "bg-pink-500",
                    "bg-orange-500",
                    "bg-blue-500",
                    "bg-green-500",
                    "bg-yellow-500",
                    "bg-red-500",
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div key={section.id} className="flex items-center gap-3">
                      <div className="w-24 text-sm text-muted-foreground text-right flex-shrink-0">
                        {section.type}
                      </div>
                      <div className="flex-1 h-10 bg-background rounded-lg overflow-hidden">
                        <div
                          className={`h-full ${color} flex items-center justify-center text-white font-medium text-sm transition-all`}
                          style={{ width: `${widthPercent}%` }}
                        >
                          {section.duration} bars
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Structure Tips</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>• Most pop songs are 3-4 minutes (96-128 bars at 120 BPM)</p>
                <p>• Intro should hook listeners within 8-16 bars</p>
                <p>• Chorus is typically the most energetic section</p>
                <p>• Bridge provides contrast before final chorus</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border">
              <CardHeader>
                <CardTitle className="text-lg">Common Sections</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p><strong>Intro:</strong> Sets the mood (4-16 bars)</p>
                <p><strong>Verse:</strong> Tells the story (8-16 bars)</p>
                <p><strong>Chorus:</strong> Main hook (8-16 bars)</p>
                <p><strong>Bridge:</strong> Contrast and build (8-16 bars)</p>
              </CardContent>
            </Card>
          </div>

          {/* Affiliate CTA */}
          <Card className="mt-8 bg-gradient-accent/10 border-accent/20">
            <CardContent className="py-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Learn Arrangement from the Pros</h3>
                <p className="text-muted-foreground mb-6">
                  Master song structure and arrangement techniques with courses from top producers and songwriters.
                </p>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  View Production Courses
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
