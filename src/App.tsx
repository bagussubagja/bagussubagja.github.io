import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/context/LanguageContext";
import Index from "./pages/Index";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { initMotion, destroyMotion } from "./motion";

const queryClient = new QueryClient();

/** Re-init motion when the route changes */
function MotionManager() {
  const location = useLocation();

  useEffect(() => {
    // Mark document so CSS visibility guards activate
    document.documentElement.classList.add("has-motion");

    // Small tick so the new page's DOM is painted before ScrollTrigger measures
    const id = setTimeout(() => {
      destroyMotion();
      initMotion();
    }, 60);

    return () => {
      clearTimeout(id);
      destroyMotion();
    };
  }, [location.pathname]);

  return null;
}

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <HashRouter>
              {/* Custom cursor dot - one instance for the whole app */}
              <div data-cursor aria-hidden="true" />

              <MotionManager />

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
