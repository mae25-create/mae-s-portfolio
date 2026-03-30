import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index.tsx";
import DataAnalysisPage from "./pages/DataAnalysisPage.tsx";
import AIProductsPage from "./pages/AIProductsPage.tsx";
import FlightDelayPage from "./pages/FlightDelayPage.tsx";
import NFLDraftPage from "./pages/NFLDraftPage.tsx";
import RetailAnalysisPage from "./pages/RetailAnalysisPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects/data-analysis" element={<DataAnalysisPage />} />
              <Route path="/projects/ai-products" element={<AIProductsPage />} />
              <Route path="/projects/data-analysis/flight-delay" element={<FlightDelayPage />} />
              <Route path="/projects/data-analysis/nfl-draft" element={<NFLDraftPage />} />
              <Route path="/projects/data-analysis/retail-analysis" element={<RetailAnalysisPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
