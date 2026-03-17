import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import AllProjects from "./pages/AllProjects";
import ProjectDetail from "./pages/ProjectDetail";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/about" element={<AboutMe />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
