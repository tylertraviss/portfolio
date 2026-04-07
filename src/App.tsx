import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YoureUsingClaudeWrong from "./pages/YoureUsingClaudeWrong";
import AIArchitectRoadmap from "./pages/AIArchitectRoadmap";
import StackingSkills from "./pages/stacking-skills/Index";
import Community from "./pages/stacking-skills/Community";
import Premium from "./pages/stacking-skills/Premium";
import CommunitySuccess from "./pages/stacking-skills/CommunitySuccess";
import PremiumSuccess from "./pages/stacking-skills/PremiumSuccess";
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
          <Route path="/stacking-skills" element={<StackingSkills />} />
          <Route path="/stacking-skills/community" element={<Community />} />
          <Route path="/stacking-skills/premium" element={<Premium />} />
          <Route path="/stacking-skills/community/success" element={<CommunitySuccess />} />
          <Route path="/stacking-skills/premium/success" element={<PremiumSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
