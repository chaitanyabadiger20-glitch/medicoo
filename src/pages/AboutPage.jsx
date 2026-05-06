import SectionHeader from "../components/SectionHeader";
import { TIMELINE, AWARDS } from "../data/data";

export default function AboutPage({ setActivePage }) {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 to-navy-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-semibold">Founded 2009 · 15+ Years of Excellence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white font-display mb-4">
            About <span className="text-gold-400">MediVance</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
            India's #1 hospital network, built on a singular mission: to deliver world-class, patient-centric, and affordable healthcare — and to be the institution that changes India's medical landscape forever.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                desc: "To deliver world-class, patient-centric, integrated and affordable healthcare through a dynamic institution that focuses on the development of people and knowledge.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                desc: "To be India's most trusted and globally recognised centre of medical excellence — where every patient receives the best possible care, regardless of financial background.",
              },
              {
                icon: "💎",
                title: "Our Values",
                desc: "Compassion, Clinical Excellence, Innovation, Integrity, and an unwavering commitment to putting patients first — in every decision, every procedure, every day.",
              },
            ].map((item) => (
              <div key={item.title} className="group p-8 border border-slate-200 rounded-2xl hover:border-gold-400/40 transition-all hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-slate-50 to-white">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-navy-900 font-black text-xl mb-3 font-display">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Founder Story */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                alt="Founder"
                className="rounded-2xl shadow-2xl w-full h-[480px] object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl p-5 shadow-2xl border border-gold-600/20">
                <p className="text-gold-400 font-black text-lg font-display leading-none">"Healing is not</p>
                <p className="text-gold-400 font-black text-lg font-display leading-none">just a profession.</p>
                <p className="text-white font-black text-lg font-display leading-none">It's a calling."</p>
                <p className="text-slate-400 text-xs mt-2">— Dr. Arjun Mehta, Founder</p>
              </div>
            </div>
            <div>
              <SectionHeader
                badge="Our Story"
                title="Founded on"
                highlight="a Dream"
                center={false}
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                MediVance was founded in 2009 by Dr. Arjun Mehta, a world-renowned cardiovascular and cardiothoracic surgeon who had spent decades training at India's finest institutions and the world's most prestigious medical centres.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Frustrated by the gap between the care available to the wealthy and the ordinary citizen, Dr. Mehta envisioned a hospital that would combine the clinical excellence of the world's best institutions with the accessibility and affordability every Indian deserves.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Today, MediVance is the realisation of that dream — ranked <strong>#1 in India</strong> and consistently among the world's top 150 hospitals, serving over 1 million patients annually across 7 campuses.
              </p>
              <button
                onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg"
              >
                Be Part of Our Story →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeader
            badge="Our Journey"
            title="15 Years of"
            highlight="Excellence"
            subtitle="From a single campus in Gurugram to India's most celebrated hospital network."
            light
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold-600/10 via-gold-500/60 to-gold-600/10" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-gold-400 border-2 border-navy-900 shadow-lg shadow-gold-500/30 z-10 mt-1" />
                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[45%] ${
                      i % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <div className="bg-navy-800/50 border border-navy-700/50 hover:border-gold-600/30 rounded-2xl p-5 transition-all hover:-translate-y-0.5">
                      <span className="text-gold-400 font-black text-2xl font-display block mb-1">{item.year}</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader badge="Recognition" title="Awards &" highlight="Accreditations" subtitle="Recognised globally for clinical excellence, patient safety, and medical innovation." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 p-5 bg-gradient-to-r from-gold-50 to-white border border-gold-100 rounded-2xl hover:border-gold-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  🏆
                </div>
                <div>
                  <div className="text-gold-600 font-black text-sm">{award.year}</div>
                  <div className="text-navy-900 font-bold text-sm mt-0.5">{award.title}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{award.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader badge="Inside MediVance" title="Our" highlight="World-Class Facilities" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80",
              "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
              "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=600&q=80",
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
              "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&q=80",
              "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
              "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
              "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80",
            ].map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}