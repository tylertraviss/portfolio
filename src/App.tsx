import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import YoureUsingClaudeWrong from "./pages/YoureUsingClaudeWrong";
import AIArchitectRoadmap from "./pages/AIArchitectRoadmap";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
