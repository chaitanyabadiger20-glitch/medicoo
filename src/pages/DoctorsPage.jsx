import { useState } from "react";
import { DOCTORS, SPECIALITIES } from "../data/data";

export default function DoctorsPage({ setActivePage }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = ["All", ...new Set(DOCTORS.map((d) => d.speciality))];
  const filtered = filter === "All" ? DOCTORS : DOCTORS.filter((d) => d.speciality === filter);

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://th.bing.com/th/id/R.89dca7ac202c94cf879cc87218621853?rik=kbfsXUNPzNJE7A&riu=http%3a%2f%2fnebula.wsimg.com%2f6153ff699e1f55ab15c7870f2b06f288%3fAccessKeyId%3d1A1A816D805699E0CEA8%26disposition%3d0%26alloworigin%3d1&ehk=%2f%2bGKNbZCDTj6GJmClzk4XHqvPJho%2fCgUABJQ9O3uudA%3d&risl=&pid=ImgRaw&r=0" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/50 to-navy-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-semibold">350+ Super-Specialists</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white font-display mb-4">
            Find a <span className="text-gold-400">Doctor</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Our team of globally trained super-specialists brings world-class expertise and decades of experience to every patient.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="bg-yellow-50 border-b border-slate-100 sticky top-[73px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 overflow-x-auto">
          <span className="text-slate-500 text-sm font-semibold whitespace-nowrap">Filter by:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                filter === cat
                  ? "bg-gold-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-gold-50 hover:text-gold-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Doctors Grid */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((doc) => (
              <div
                key={doc.id}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-all hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    {doc.awards.map((a, i) => (
                      <span key={i} className="inline-block px-2 py-1 bg-gold-500/90 text-white text-[10px] font-bold rounded-full mr-1 mb-1">
                        🏆 {a}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-navy-900 font-black text-xl font-display mb-1">{doc.name}</h3>
                  <p className="text-gold-600 text-sm font-bold mb-1">{doc.designation}</p>
                  <p className="text-slate-500 text-xs mb-1">{doc.speciality}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 mb-3">
                    <span>🏥 {doc.hospital}</span>
                    <span>⏱️ {doc.experience}</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-5 flex items-center gap-1">
                    <span>🎓</span> {doc.education}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelected(doc)}
                      className="flex-1 py-2.5 border border-navy-800 text-navy-900 text-sm font-bold rounded-xl hover:bg-navy-50 transition-colors"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="flex-1 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
            <div className="relative h-72 overflow-hidden">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 backdrop-blur-sm"
              >✕</button>
            </div>
            <div className="p-6">
              <h2 className="text-navy-900 font-black text-2xl font-display">{selected.name}</h2>
              <p className="text-gold-600 font-bold mt-1">{selected.designation}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1">Speciality</p>
                  <p className="text-navy-900 font-bold text-sm">{selected.speciality}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="text-xs text-slate-400 mb-1">Experience</p>
                  <p className="text-navy-900 font-bold text-sm">{selected.experience}</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3 col-span-2">
                  <p className="text-xs text-slate-400 mb-1">Education</p>
                  <p className="text-navy-900 font-bold text-sm">{selected.education}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.awards.map((a) => (
                  <span key={a} className="px-3 py-1 bg-gold-50 text-gold-700 text-xs font-bold rounded-full border border-gold-200">
                    🏆 {a}
                  </span>
                ))}
              </div>
              <button
                onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); setSelected(null); }}
                className="w-full mt-5 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all"
              >
                Book Appointment with {selected.name.split(" ")[0]} {selected.name.split(" ")[1]}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}