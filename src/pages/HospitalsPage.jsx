import SectionHeader from "../components/SectionHeader";
import { HOSPITALS } from "../data/data";

export default function HospitalsPage({ setActivePage }) {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1920&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/50 to-navy-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-semibold">7 Hospitals Across India</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white font-display mb-4">
            Our <span className="text-gold-400">Hospitals</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From our 1600-bed flagship campus in Gurugram to state-of-the-art facilities across India — world-class care wherever you are.
          </p>
        </div>
      </div>

      {/* Hospitals Grid */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {HOSPITALS.map((hosp, i) => (
              <div
                key={hosp.id}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-gold-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1 ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "h-80" : "h-56"}`}>
                  <img
                    src={hosp.image}
                    alt={hosp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gold-600 text-white text-xs font-bold rounded-full">
                      {hosp.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-navy-900/80 text-gold-400 text-xs font-bold rounded-full border border-gold-600/30 backdrop-blur-sm">
                      {hosp.landmark}
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-white font-black text-2xl font-display">{hosp.name}</h3>
                    <p className="text-gold-400 text-sm font-semibold mt-0.5">{hosp.subtitle}</p>
                  </div>
                </div>
                <div className={`p-6 ${i === 0 ? "grid md:grid-cols-2 gap-6" : ""}`}>
                  <div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      <span>📍</span>
                      <span>{hosp.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <span>📞</span>
                      <a href={`tel:${hosp.phone}`} className="text-gold-600 hover:text-gold-500 font-semibold transition-colors">
                        {hosp.phone}
                      </a>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Beds", val: `${hosp.beds}+` },
                        { label: "Specialities", val: `${hosp.specialities}+` },
                        { label: "OT's", val: `${hosp.ots}+` },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-gold-50 border border-gold-100 rounded-xl p-3 text-center">
                          <div className="text-gold-700 font-black text-xl font-display">{stat.val}</div>
                          <div className="text-slate-500 text-xs font-semibold">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {i === 0 && (
                    <div className="flex flex-col justify-between">
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Our flagship hospital — a 43-acre, 1600+ bed medical city offering world-class care across 32 super-specialities. Ranked <strong>#1 in India</strong> and among the world's top 150 hospitals.
                      </p>
                      <div className="flex gap-3 mt-4">
                        <button
                          onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          className="flex-1 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all"
                        >
                          Book Appointment
                        </button>
                        <button
                          onClick={() => { setActivePage("doctors"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                          className="flex-1 py-3 border border-navy-800 text-navy-900 font-bold rounded-xl hover:bg-navy-900 hover:text-white transition-all"
                        >
                          Find Doctors
                        </button>
                      </div>
                    </div>
                  )}
                  {i !== 0 && (
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="flex-1 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white text-sm font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all"
                      >
                        Book Appointment
                      </button>
                     <button
  onClick={() =>
    window.open(
      `https://www.google.com/maps?q=${encodeURIComponent(hosp.address)}`,
      "_blank"
    )
  }
  className="px-4 py-2.5 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
>
  Get Directions
</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Strip */}
      <section className="bg-navy-950 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white font-display mb-3">
            Presence Across <span className="text-gold-400">India</span>
          </h2>
          <p className="text-slate-400 mb-8">
            7 hospitals in Gurugram, Lucknow, Patna, Indore, Ranchi, Noida and expanding.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
  {HOSPITALS.map((h) => (
    
    <a
      key={h.id}
      href={`https://www.google.com/maps?q=${encodeURIComponent(h.address)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center group cursor-pointer"
    >
      <div className="w-10 h-10 mx-auto rounded-full bg-gold-600/20 border border-gold-600/40 flex items-center justify-center text-gold-400 group-hover:bg-gold-600 group-hover:text-white transition-all mb-2">
        🏥
      </div>

      <p className="text-white text-xs font-semibold group-hover:text-gold-400 transition">
        {h.city.split(",")[0]}
      </p>
    </a>

  ))}
</div>
        </div>
      </section>
    </div>
  );
}