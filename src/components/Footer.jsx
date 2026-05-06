import { BRAND, NAV_LINKS, SPECIALITIES } from "../data/data";

export default function Footer({ setActivePage }) {
  const navigate = (path) => {
    setActivePage(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gold-700 via-gold-600 to-gold-700 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white font-display">
              Your Health Is Our Priority
            </h3>
            <p className="text-gold-100 mt-1">
              Book an appointment with India's top specialists today.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("contact")}
              className="px-6 py-3 bg-white text-gold-700 font-bold rounded-xl hover:bg-gold-50 transition-all shadow-lg hover:scale-105"
            >
              Book Appointment
            </button>
            <a
              href="tel:18002006060"
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div>
              <div className="text-xl font-black text-white font-display">
                Medi<span className="text-gold-400">Vance</span>
              </div>
              <div className="text-gold-600 text-[9px] tracking-widest uppercase font-semibold">
                Healing Beyond Boundaries
              </div>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            India's #1 ranked multi-super-speciality hospital network, founded with the mission to deliver world-class, affordable healthcare to all.
          </p>
          <div className="flex gap-3">
            {["🐦", "📘", "📷", "▶️", "💼"].map((icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-sm hover:bg-gold-600/20 hover:border-gold-600/40 transition-all"
              >
                {icon}
              </button>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {["NABH", "JCI", "ISO 9001", "NABL"].map((cert) => (
              <span
                key={cert}
                className="px-2.5 py-1 bg-gold-600/10 border border-gold-600/20 rounded text-gold-400 text-xs font-bold"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-navy-700">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-slate-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-gold-600/50 group-hover:w-5 transition-all duration-200" />
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => navigate("contact")}
                className="text-slate-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
              >
                <span className="w-3 h-px bg-gold-600/50 group-hover:w-5 transition-all duration-200" />
                Health Packages
              </button>
            </li>
          </ul>
        </div>

        {/* Specialities */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-navy-700">
            Specialities
          </h4>
          <ul className="space-y-2.5">
            {SPECIALITIES.slice(0, 8).map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => navigate("specialities")}
                  className="text-slate-400 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-gold-600/50 group-hover:w-5 transition-all duration-200" />
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5 pb-2 border-b border-navy-700">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-gold-500 mt-0.5">📍</span>
              <a
                href="https://www.google.com/maps?q=Sector+38,+Gurugram,+Haryana+122001"
                target="_blank"
                rel="noopener noreferrer"
              >
               <div className="cursor-pointer hover:text-white transition">
               <p className="text-slate-300 text-sm font-semibold">
               MediVance Gurugram (HQ)
              </p>
               <p className="text-slate-500 text-xs mt-0.5">
                 Sector 38, Gurugram, Haryana 122001
               </p>
             </div>
              </a>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 mt-0.5">📞</span>
              <div>
                <p className="text-slate-300 text-sm font-semibold">Helpline</p>
                <a href="tel:18002006060" className="text-gold-400 text-sm hover:text-gold-300 transition-colors">
                  +91 1800 200 6060
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 mt-0.5">🚨</span>
              <div>
                <p className="text-slate-300 text-sm font-semibold">Emergency</p>
                <a href="tel:108" className="text-red-400 text-sm font-bold hover:text-red-300 transition-colors">
                  108 (24/7)
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-500 mt-0.5">✉️</span>
              <div>
                <p className="text-slate-300 text-sm font-semibold">Email</p>
                <a href="mailto:care@medivance.com" className="text-gold-400 text-sm hover:text-gold-300 transition-colors">
                  care@medivance.com
                </a>
              </div>
            </li>
          </ul>
         <a href="tel:+911234567890">
            <div className="mt-5 p-3 bg-red-900/20 border border-red-800/30 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-red-900/40 transition">
         <span className="text-2xl">🚑</span>
         <div>
         <p className="text-red-400 font-bold text-sm">24/7 Emergency</p>
        <p className="text-slate-400 text-xs">Air Ambulance Available</p>
             </div>
          </div>
            </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2026 MediVance Hospitals. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"].map((item) => (
              <button
                key={item}
                className="text-slate-500 text-xs hover:text-gold-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}