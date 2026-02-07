import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import ChordGenerator from "./pages/tools/ChordGenerator";
import BPMCalculator from "./pages/tools/BPMCalculator";
import Guides from "./pages/Guides";
import LyricHelper from "./pages/tools/LyricHelper";
import StructureBuilder from "./pages/tools/StructureBuilder";
import PianoChords from "./pages/tools/PianoChords";
import KeyFinder from "./pages/tools/KeyFinder";
import VocalRange from "./pages/tools/VocalRange";
import FrequencyChart from "./pages/tools/FrequencyChart";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/tools/chords"} component={ChordGenerator} />
      <Route path={"/tools/bpm"} component={BPMCalculator} />
      <Route path={"/tools/lyrics"} component={LyricHelper} />
      <Route path={"/tools/structure"} component={StructureBuilder} />
      <Route path={"/tools/piano-chords"} component={PianoChords} />
      <Route path={"/tools/key-finder"} component={KeyFinder} />
      <Route path={"/tools/vocal-range"} component={VocalRange} />
      <Route path={"/tools/frequency-chart"} component={FrequencyChart} />      <Route path={"/guides"} component={Guides} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
