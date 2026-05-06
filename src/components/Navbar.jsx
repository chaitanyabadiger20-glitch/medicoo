import { useState, useEffect } from "react";
import { BRAND, NAV_LINKS } from "../data/data";

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (path) => {
    setActivePage(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-950 text-gold-300 text-xs py-2 px-6 hidden md:flex justify-between items-center border-b border-gold-800/30">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span>📞</span>
            <a href={`tel:${BRAND.phone}`} className="hover:text-gold-400 transition-colors">{BRAND.phone}</a>
          </span>
          <span className="flex items-center gap-1.5">
            <span>🚨</span>
            <span>Emergency: <a href="tel:108" className="text-red-400 font-bold hover:text-red-300">108</a></span>
          </span>
          <span className="flex items-center gap-1.5">
            <span>✉️</span>
            <a href={`mailto:${BRAND.email}`} className="hover:text-gold-400 transition-colors">{BRAND.email}</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gold-500">🏆 Ranked #1 Hospital in India 2026</span>
          <button
            onClick={() => navigate("contact")}
            className="bg-gold-600 text-white px-3 py-1 rounded text-xs font-semibold hover:bg-gold-500 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
  className={`sticky top-0 z-50 transition-all duration-500 ${
    scrolled
      ? "bg-navy-900 shadow-lg py-3"
      : "bg-navy-900 py-4"
  }`}
>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-lg tracking-tight">M</span>
            </div>
            <div className="text-left">
              <div className="text-xl font-black text-white tracking-wide font-display leading-none">
                Medi<span className="text-gold-400">Vance</span>
              </div>
              <div className="text-gold-500 text-[9px] tracking-widest uppercase font-semibold leading-none mt-0.5">
                Healing Beyond Boundaries
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                  activePage === link.path
                    ? "text-gold-400 bg-gold-500/10"
                    : "text-slate-300 hover:text-gold-300 hover:bg-white/5"
                }`}
              >
                {link.label}
                {activePage === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => navigate("contact")}
              className="px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg hover:shadow-gold-500/30 hover:scale-105"
            >
              Book Appointment
            </button>
            {/* <button
              onClick={() => navigate("doctors")}
              className="px-4 py-2.5 border border-gold-600/50 text-gold-400 text-sm font-semibold rounded-xl hover:bg-gold-600/10 transition-all"
            >
              Find Doctor
            </button> */}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-navy-950 border-t border-navy-700 px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activePage === link.path
                    ? "text-gold-400 bg-gold-500/10"
                    : "text-slate-300 hover:text-gold-300 hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-bold rounded-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}