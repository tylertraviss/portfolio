import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YoureUsingClaudeWrong from "./pages/YoureUsingClaudeWrong";
import AIArchitectRoadmap from "./pages/AIArchitectRoadmap";
import Shipyard from "./pages/shipyard/Index";
import Community from "./pages/shipyard/Community";
import Premium from "./pages/shipyard/Premium";
import CommunitySuccess from "./pages/shipyard/CommunitySuccess";
import PremiumSuccess from "./pages/shipyard/PremiumSuccess";
import Dashboard from "./pages/shipyard/Dashboard";
import LinkedInPromo from "./pages/shipyard/LinkedInPromo";
import EmailGate from "@/components/EmailGate";

const queryClient = new QueryClient();

const GatedRoute = ({ element }: { element: React.ReactNode }) => {
  const { pathname } = useLocation();
  return <EmailGate storageKey={`gate${pathname}`}>{element}</EmailGate>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/youre-using-claude-wrong" element={<GatedRoute element={<YoureUsingClaudeWrong />} />} />
          <Route path="/ai-architect-roadmap-2026" element={<GatedRoute element={<AIArchitectRoadmap />} />} />
          <Route path="/shipyard" element={<Shipyard />} />
          <Route path="/shipyard/community" element={<Community />} />
          <Route path="/shipyard/premium" element={<Premium />} />
          <Route path="/shipyard/community/success" element={<CommunitySuccess />} />
          <Route path="/shipyard/premium/success" element={<PremiumSuccess />} />
          <Route path="/shipyard/dashboard" element={<Dashboard />} />
          <Route path="/shipyard/linkedin-promo" element={<LinkedInPromo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
