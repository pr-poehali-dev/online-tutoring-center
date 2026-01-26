
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EducationInfo from "./pages/EducationInfo";
import BasicInfo from "./pages/education-sections/BasicInfo";
import Structure from "./pages/education-sections/Structure";
import Documents from "./pages/education-sections/Documents";
import Education from "./pages/education-sections/Education";
import Management from "./pages/education-sections/Management";
import Staff from "./pages/education-sections/Staff";
import Facilities from "./pages/education-sections/Facilities";
import PaidServices from "./pages/education-sections/PaidServices";
import Finance from "./pages/education-sections/Finance";
import Vacancies from "./pages/education-sections/Vacancies";
import Scholarships from "./pages/education-sections/Scholarships";
import International from "./pages/education-sections/International";
import Nutrition from "./pages/education-sections/Nutrition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/education-info" element={<EducationInfo />} />
          <Route path="/education-info/basic" element={<BasicInfo />} />
          <Route path="/education-info/structure" element={<Structure />} />
          <Route path="/education-info/documents" element={<Documents />} />
          <Route path="/education-info/education" element={<Education />} />
          <Route path="/education-info/management" element={<Management />} />
          <Route path="/education-info/staff" element={<Staff />} />
          <Route path="/education-info/facilities" element={<Facilities />} />
          <Route path="/education-info/paid-services" element={<PaidServices />} />
          <Route path="/education-info/finance" element={<Finance />} />
          <Route path="/education-info/vacancies" element={<Vacancies />} />
          <Route path="/education-info/scholarships" element={<Scholarships />} />
          <Route path="/education-info/international" element={<International />} />
          <Route path="/education-info/nutrition" element={<Nutrition />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;