import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { SampleRibbon } from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NigeriaDesk from "./pages/NigeriaDesk.jsx";
import Library from "./pages/Library.jsx";
import Methodology from "./pages/Methodology.jsx";
import BriefingDesk from "./pages/BriefingDesk.jsx";
import Alerts from "./pages/Alerts.jsx";
import AccessModel from "./pages/AccessModel.jsx";
import BriefDetail from "./pages/BriefDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SampleRibbon />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nigeria" element={<NigeriaDesk />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/briefing-desk" element={<BriefingDesk />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/access-model" element={<AccessModel />} />
          <Route path="/brief/:slug" element={<BriefDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
