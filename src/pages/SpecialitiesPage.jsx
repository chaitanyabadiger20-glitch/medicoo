import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { SPECIALITIES } from "../data/data";

export default function SpecialitiesPage({ setActivePage }) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = SPECIALITIES.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.procedures.some((p) => p.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.magnific.com/premium-photo/doctors-hospital-corridor-standing-arms-crossed_950577-2210.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/50 to-navy-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-semibold">32 Super-Specialities</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white font-display mb-4">
            Our <span className="text-gold-400">Specialities</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            World-class care across 32 medical disciplines — each led by globally trained super-specialists with decades of experience.
          </p>
          <input
            type="text"
            placeholder="Search speciality or procedure..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white/15 transition-all backdrop-blur-md"
          />
        </div>
      </div>

      {/* Grid */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-slate-500 text-lg">No specialities found for "{search}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((spec) => (
                <div
                  key={spec.id}
                  onClick={() => setSelected(spec)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer border border-slate-200 hover:border-gold-400/50 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <div className="absolute bottom-3 left-4 text-4xl">{spec.icon}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-navy-900 font-bold text-base mb-2 font-display group-hover:text-gold-600 transition-colors">
                      {spec.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                      {spec.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {spec.procedures.map((p) => (
                        <span key={p} className="px-2 py-0.5 bg-gold-50 text-gold-700 text-[10px] font-semibold rounded-full border border-gold-200">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-4">
                    <div className="w-full py-2.5 bg-navy-900 text-white text-xs font-bold rounded-xl text-center group-hover:bg-gold-600 transition-colors">
                      Learn More & Book →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl animate-slideInUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <span className="text-4xl">{selected.icon}</span>
                <h2 className="text-white font-black text-2xl font-display">{selected.name}</h2>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-5">{selected.description}</p>
              <h4 className="text-navy-900 font-bold text-sm mb-3 uppercase tracking-wider">
                Key Procedures
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selected.procedures.map((p) => (
                  <span key={p} className="px-3 py-1.5 bg-gold-50 text-gold-700 text-sm font-semibold rounded-lg border border-gold-200">
                    {p}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); setSelected(null); }}
                  className="flex-1 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}