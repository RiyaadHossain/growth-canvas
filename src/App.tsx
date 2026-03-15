import { ScrollToTopOnNavigate } from "@/components/ScrollToTopOnNavigate";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurWork from "./pages/OurWork";
import WhyUs from "./pages/WhyUs";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BrandingIdentity from "./pages/BrandingIdentity";
import MarketResearch from "./pages/MarketResearch";
import WebDesignDevelopment from "./pages/WebDesignDevelopment";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import ContentCreative from "./pages/ContentCreative";
import SEOOrganicGrowth from "./pages/SEOOrganicGrowth";
import CRMFunnelsAutomation from "./pages/CRMFunnelsAutomation";
import GrowthStrategy from "./pages/GrowthStrategy";
import TravelInsights from "./pages/TravelInsights";
import TravelInsightDetail from "./pages/TravelInsightDetail";
import GuidesPlaybooks from "./pages/GuidesPlaybooks";
import GuideDetail from "./pages/GuideDetail";
import VideoSessions from "./pages/VideoSessions";
import VideoSessionDetail from "./pages/VideoSessionDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services/branding-identity" element={<BrandingIdentity />} />
          <Route path="/services/market-research" element={<MarketResearch />} />
          <Route path="/services/growth-strategy" element={<GrowthStrategy />} />
          <Route path="/services/web-design-development" element={<WebDesignDevelopment />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
          <Route path="/services/content-creative" element={<ContentCreative />} />
          <Route path="/services/content-seo" element={<SEOOrganicGrowth />} />
          <Route path="/services/ai-automation" element={<CRMFunnelsAutomation />} />
          <Route path="/resources/travel-insights" element={<TravelInsights />} />
          <Route path="/resources/travel-insights/:slug" element={<TravelInsightDetail />} />
          <Route path="/resources/guides-playbooks" element={<GuidesPlaybooks />} />
          <Route path="/resources/guides-playbooks/:slug" element={<GuideDetail />} />
          <Route path="/resources/video-sessions" element={<VideoSessions />} />
          <Route path="/resources/video-sessions/:slug" element={<VideoSessionDetail />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
