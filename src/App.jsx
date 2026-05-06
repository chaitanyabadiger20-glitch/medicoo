import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SpecialitiesPage from "./pages/SpecialitiesPage";
import DoctorsPage from "./pages/DoctorsPage";
import HospitalsPage from "./pages/HospitalsPage";
import InternationalPage from "./pages/InternationalPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const PAGES = {
  home: HomePage,
  specialities: SpecialitiesPage,
  doctors: DoctorsPage,
  hospitals: HospitalsPage,
  international: InternationalPage,
  about: AboutPage,
  contact: ContactPage,
};

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const PageComponent = PAGES[activePage] || HomePage;

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main>
        <PageComponent setActivePage={setActivePage} />
      </main>
      <Footer setActivePage={setActivePage} />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/911800200606"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all duration-200 group"
        title="Chat on WhatsApp"
      >
        💬
        <span className="absolute right-16 bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with us
        </span>
      </a>

      {/* Floating Emergency Button */}
      <a
        href="tel:108"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all duration-200 animate-pulse-slow group"
        title="Emergency"
      >
        🚨
        <span className="absolute right-16 bg-red-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Emergency: 108
        </span>
      </a>
    </div>
  );
}