import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import StatsSection from "../components/StatsSection";
import SectionHeader from "../components/SectionHeader";
import {
  SPECIALITIES, DOCTORS, TESTIMONIALS, AWARDS, TECHNOLOGIES, HEALTH_PACKAGES,
} from "../data/data";

function SpecialityCard({ spec, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer border border-navy-200 hover:border-gold-400/50 transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10 bg-white"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={spec.image}
          alt={spec.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
        <div className="absolute bottom-3 left-4 text-3xl">{spec.icon}</div>
      </div>
      <div className="p-5">
        <h3 className="text-navy-900 font-bold text-base mb-1.5 group-hover:text-gold-600 transition-colors font-display">
          {spec.name}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
          {spec.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {spec.procedures.slice(0, 2).map((p) => (
            <span key={p} className="px-2 py-0.5 bg-gold-50 text-gold-700 text-[10px] font-semibold rounded-full border border-gold-200">
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center text-white text-sm shadow-lg">
          →
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="bg-navy-800/50 border border-navy-700/50 rounded-2xl p-6 hover:border-gold-600/30 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-1 mb-4">
        {Array(t.rating).fill(0).map((_, i) => (
          <span key={i} className="text-gold-400 text-sm">★</span>
        ))}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed italic mb-5">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={t.image}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-gold-600/40"
        />
        <div>
          <p className="text-white font-bold text-sm">{t.name}</p>
          <p className="text-slate-400 text-xs">
            {t.flag} {t.country} · {t.treatment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const navigate = (path) => {
    setActivePage(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <HeroSlider setActivePage={setActivePage} />

      {/* Quick Actions */}
      <section className="bg-yellow-100 border-b border-slate-100 py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📅", label: "Book Appointment", action: "contact", color: "from-gold-500 to-gold-600" },
              { icon: "👨‍⚕️", label: "Find a Doctor", action: "doctors", color: "from-navy-700 to-navy-800" },
              { icon: "🏥", label: "Our Hospitals", action: "hospitals", color: "from-teal-600 to-teal-700" },
              { icon: "🌍", label: "International Patients", action: "international", color: "from-purple-700 to-purple-800" },
            ].map((item) => (
              <button
                key={item.action}
                onClick={() => navigate(item.action)}
                className={`group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${item.color} text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-bold text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Specialities */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="World-Class Care"
            title="Our"
            highlight="Specialities"
            subtitle="32 super-specialities under one roof, each led by globally trained experts with decades of experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {SPECIALITIES.slice(0, 8).map((spec) => (
              <SpecialityCard
                key={spec.id}
                spec={spec}
                onClick={() => navigate("specialities")}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("specialities")}
              className="px-8 py-3.5 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg hover:shadow-gold-500/30 hover:scale-105"
            >
              View All 32 Specialities
            </button>
          </div>
        </div>
      </section>

      {/* About / Mission Strip */}
      <section className="py-24 bg-yellow-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pond5.com/generic-health-care-modern-hospital-088664126_prevstill.jpeg"
                alt="Hospital"
                className="rounded-2xl h-64 w-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://as2.ftcdn.net/v2/jpg/05/13/56/19/1000_F_513561931_2OeWN4BzXoeHNDpUi1lc40c5zHAAS5cB.jpg"
                alt="Doctor"
                className="rounded-2xl h-48 w-full object-cover shadow-xl mt-12 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://aaa-accreditation.org/wp-content/uploads/2024/11/Hospital-1024x640.png"
                alt="Surgery"
                className="rounded-2xl h-48 w-full object-cover shadow-xl -mt-8 hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://thumbs.dreamstime.com/b/stethoscope-rests-digital-world-map-data-visualization-global-healthcare-tech-advancements-concept-worldwide-medicine-387292819.jpg"
                alt="Care"
                className="rounded-2xl h-64 w-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-500 to-gold-700 rounded-2xl p-5 shadow-2xl">
              <div className="text-white font-black text-3xl font-display">15+</div>
              <div className="text-gold-100 text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>
          <div>
            <SectionHeader
              badge="About MediVance"
              title="India's Premier"
              highlight="Healthcare Network"
              subtitle=""
              center={false}
            />
            <p className="text-slate-600 leading-relaxed mb-5">
              Founded in 2009 by world-renowned cardiovascular surgeon Dr. Arjun Mehta, MediVance was built with a singular mission: to deliver world-class, patient-centric, integrated, and affordable healthcare to every Indian.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Ranked <strong>#1 Hospital in India 2026</strong> by Newsweek and recognised among the World's Best Hospitals for seven consecutive years, MediVance has set the benchmark for clinical excellence, patient care, and medical innovation.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🏆", label: "Newsweek #1 India 2026" },
                { icon: "🌍", label: "World's Best 7 Years Running" },
                { icon: "🔬", label: "Latest Medical Technology" },
                { icon: "❤️", label: "Patient-First Philosophy" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-3 bg-gold-50 rounded-xl border border-gold-100">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-navy-900 font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate("about")}
              className="px-6 py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-all"
            >
              Learn Our Story →
            </button>
          </div>
        </div>
      </section>

      {/* Technology */}
<section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <SectionHeader
      badge="Advanced Technology"
      title="Cutting-Edge"
      highlight="Medical Innovation"
      subtitle="Equipped with technology owned by fewer than 10 hospitals worldwide — delivering precision medicine at its finest."
      light
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {TECHNOLOGIES.map((tech, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-2xl border border-navy-700/50 hover:border-gold-600/40 transition-all duration-300 hover:-translate-y-1 bg-navy-800/30"
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500  saturate-50 brightness-90"
            />

            {/* Reduced overlay darkness */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/30 to-transparent" />
          </div>

          <div className="p-5">
            <h3 className="text-white font-bold text-sm mb-2 font-display group-hover:text-gold-400 transition-colors">
              {tech.name}
            </h3>

            <p className="text-slate-400 text-xs leading-relaxed">
              {tech.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Doctors */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Expert Team"
            title="Our"
            highlight="Super-Specialists"
            subtitle="Trained at the world's most renowned institutions, our doctors are distinguished experts dedicated exclusively to MediVance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-gold-400/40 transition-all hover:shadow-xl hover:shadow-gold-500/10 hover:-translate-y-1 bg-white"
              >
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-navy-50 to-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {doc.awards.slice(0, 1).map((a) => (
                        <span key={a} className="px-2 py-0.5 bg-gold-500/90 text-white text-[10px] font-bold rounded-full">
                          🏆 {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-navy-900 font-black text-lg font-display">{doc.name}</h3>
                  <p className="text-gold-600 text-sm font-semibold mb-1">{doc.designation}</p>
                  <p className="text-slate-500 text-xs mb-3">{doc.hospital} · {doc.experience}</p>
                  <p className="text-slate-400 text-xs mb-4 flex items-center gap-1.5">
                    <span>🎓</span> {doc.education}
                  </p>
                  <button
                    onClick={() => navigate("contact")}
                    className="w-full py-2.5 bg-navy-900 text-white text-sm font-bold rounded-xl hover:bg-gold-600 transition-colors"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("doctors")}
              className="px-8 py-3.5 border-2 border-navy-800 text-navy-900 font-bold rounded-xl hover:bg-navy-900 hover:text-white transition-all"
            >
              View All Doctors →
            </button>
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Preventive Healthcare"
            title="Health Check"
            highlight="Packages"
            subtitle="Personalised health check-ups tailored to your age, lifestyle, and risk profile."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HEALTH_PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-gold-400 shadow-xl shadow-gold-500/20"
                    : "border-slate-200 hover:border-gold-300"
                } bg-white`}
              >
                {pkg.popular && (
                  <div className="bg-gradient-to-r from-gold-600 to-gold-500 text-white text-xs font-bold py-2 text-center tracking-widest uppercase">
                    ⭐ Most Popular
                  </div>
                )}
                <div className={`p-7 ${pkg.popular ? "bg-gradient-to-b from-gold-50 to-white" : ""}`}>
                  <h3 className="text-navy-900 font-black text-xl font-display mb-1">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">Ideal for {pkg.ideal}</p>
                  <div className="text-4xl font-black text-gold-600 font-display mb-1">{pkg.price}</div>
                  <p className="text-slate-400 text-xs mb-6">{pkg.tests} tests included</p>
                  <ul className="space-y-2.5 mb-7">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-600 flex items-center justify-center text-xs font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("contact")}
                    className={`w-full py-3 font-bold rounded-xl transition-all ${
                      pkg.popular
                        ? "bg-gradient-to-r from-gold-600 to-gold-500 text-white hover:from-gold-500 hover:to-gold-400 shadow-lg"
                        : "bg-navy-900 text-white hover:bg-navy-800"
                    }`}
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader badge="Recognition" title="Awards &" highlight="Accreditations" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="group p-5 bg-gradient-to-b from-gold-50 to-white border border-gold-100 rounded-2xl text-center hover:border-gold-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-gold-600 font-black text-sm font-display">{award.year}</div>
                <div className="text-navy-900 font-bold text-xs mt-1 leading-tight">{award.title}</div>
                <div className="text-slate-400 text-[10px] mt-1">{award.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            badge="Patient Stories"
            title="What Our"
            highlight="Patients Say"
            subtitle="Real stories from real patients across the world — lives transformed through world-class care."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="bg-red-700 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-4xl animate-pulse">🚨</span>
            <div>
              <h3 className="text-white font-black text-xl">24/7 Emergency Services</h3>
              <p className="text-red-200 text-sm">
                MediVance emergency teams are always ready. Air ambulance available.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:108"
              className="px-6 py-3 bg-white text-red-700 font-black text-lg rounded-xl hover:scale-105 transition-transform shadow-lg"
            >
              📞 108
            </a>
            <button
              onClick={() => navigate("hospitals")}
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all"
            >
              Find Nearest Hospital
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}