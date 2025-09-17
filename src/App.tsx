import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AuspiciousDates from "./pages/AuspiciousDates";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import Vendors from "./pages/Vendors";
import MenuPlanner from "./pages/MenuPlanner";
import ThemesDecor from "./pages/ThemesDecor";
import Gallery from "./pages/Gallery";
import RSVP from "./pages/RSVP";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dates" element={<AuspiciousDates />} />
          <Route path="/itinerary" element={<ItineraryBuilder />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/menu" element={<MenuPlanner />} />
          <Route path="/themes" element={<ThemesDecor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// import TestRSVP from "./testRSVP";

// function App() {
//   return <TestRSVP />;
// }

// export default App;

