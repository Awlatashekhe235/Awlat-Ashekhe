import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Engineers from "./pages/Engineers";
import Categories from "./pages/Categories";
import Biography from "./pages/Biography";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
=======
import About from "./pages/About";
import Auth from "./pages/Auth";
import Maintenance from "./pages/Maintenance";
import Exchange from "./pages/Exchange";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";
>>>>>>> 406e6e1fa55f0aa354a97e93f4637c8c197d5497

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
<<<<<<< HEAD
          <Route path="/auth" element={<Auth />} />
          <Route path="/engineers" element={<Engineers />} />
          <Route path="/categories/:category" element={<Categories />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminDashboard />} />
=======
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/games" element={<Games />} />
>>>>>>> 406e6e1fa55f0aa354a97e93f4637c8c197d5497
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
