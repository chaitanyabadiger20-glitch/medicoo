import SectionHeader from "../components/SectionHeader";
import { INTERNATIONAL_SERVICES, TESTIMONIALS } from "../data/data";

export default function InternationalPage({ setActivePage }) {
  const countries = [
    { flag: "🇦🇪", name: "UAE", patients: "2,400+" },
    { flag: "🇬🇧", name: "UK", patients: "1,800+" },
    { flag: "🇺🇸", name: "USA", patients: "1,600+" },
    { flag: "🇸🇦", name: "Saudi Arabia", patients: "2,100+" },
    { flag: "🇸🇬", name: "Singapore", patients: "900+" },
    { flag: "🇰🇪", name: "Kenya", patients: "700+" },
    { flag: "🇧🇩", name: "Bangladesh", patients: "3,200+" },
    { flag: "🇦🇫", name: "Afghanistan", patients: "1,400+" },
    { flag: "🇷🇺", name: "Russia", patients: "600+" },
    { flag: "🇦🇺", name: "Australia", patients: "500+" },
    { flag: "🇨🇦", name: "Canada", patients: "800+" },
    { flag: "🇳🇬", name: "Nigeria", patients: "400+" },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 to-navy-900/30" />
        {/* Animated Globe Icon */}
        <div className="absolute right-20 top-16 text-[120px] opacity-10 animate-spin-slow hidden xl:block">🌍</div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-semibold">Patients from 140+ Countries</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white font-display mb-4">
            International <span className="text-gold-400">Patients</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            We welcome patients from across the globe, offering end-to-end support from visa assistance to recovery — with the same world-class care available locally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold text-lg rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all shadow-xl hover:scale-105"
            >
              Plan Your Medical Trip →
            </button>
            <a
              href="tel:18002006060"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all"
            >
              📞 Call Our Int'l Desk
            </a>
          </div>
        </div>
      </div>

      {/* Why India / MediVance */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              badge="Why Choose MediVance"
              title="World-Class Care,"
              highlight="Indian Value"
              center={false}
            />
            <div className="space-y-4">
              {[
                { icon: "💰", title: "Up to 80% Cost Savings", desc: "Same quality as USA/UK at a fraction of the price — without compromising on care or outcomes." },
                { icon: "⏱️", title: "Zero Wait Times", desc: "No long NHS queues. Schedule surgery within days, not years." },
                { icon: "🏆", title: "#1 Ranked Hospital", desc: "MediVance Gurugram is India's top-ranked hospital by Newsweek for 7 consecutive years." },
                { icon: "🌐", title: "Multilingual Support", desc: "Interpreters in 15+ languages. Dedicated international patient coordinators." },
                { icon: "✈️", title: "Full Trip Management", desc: "Visa, airport pickup, accommodation, meals, medication — all arranged for you." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-gold-200 transition-colors">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-navy-900 font-bold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.Yd54HqcBJ977NPDPC5ASNwHaFK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="International Care"
              className="rounded-2xl shadow-2xl w-full object-cover h-96 hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gold-600 to-gold-700 rounded-2xl p-5 shadow-2xl">
              <div className="text-white font-black text-3xl font-display">140+</div>
              <div className="text-gold-100 text-sm font-semibold">Countries Served</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
              <div className="text-navy-900 font-black text-2xl font-display text-center">98%</div>
              <div className="text-slate-500 text-xs text-center">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Services"
            title="Everything You Need,"
            highlight="Taken Care Of"
            subtitle="From the moment you contact us to your full recovery — we handle every detail."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNATIONAL_SERVICES.map((svc, i) => (
              <div
                key={i}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {svc.icon}
                </div>
                <h3 className="text-navy-900 font-bold text-base mb-2 font-display group-hover:text-gold-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Global Reach"
            title="Patients From"
            highlight="Around the World"
            subtitle="Trusted by patients from 140+ countries for critical and complex medical procedures."
            light
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {countries.map((c) => (
              <div
                key={c.name}
                className="group  text-white text-center p-4 bg-navy-800/10 border border-navy-700/80 rounded-2xl hover:border-gold-600/40 hover:bg-navy-800/70 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{c.flag}</div>
                <p className="text-white font-bold text-xs mb-1">{c.name}</p>
                <p className="text-gold-400 text-[10px] font-semibold">{c.patients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader badge="Simple Process" title="How It" highlight="Works" />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gold-200 hidden md:block" />
            <div className="space-y-10">
              {[
                { step: "01", title: "Share Your Medical Reports", desc: "Send us your diagnosis, scans, and medical history. Our team reviews within 24 hours." },
                { step: "02", title: "Tele-Consultation with Specialist", desc: "Video consult with your assigned super-specialist to discuss treatment plan and cost." },
                { step: "03", title: "Travel & Visa Arrangements", desc: "We assist with medical visa invitation letters, airport transfers, and accommodation." },
                { step: "04", title: "Treatment & Recovery", desc: "Receive world-class treatment. One attendant's accommodation and meals included." },
                { step: "05", title: "Follow-up Care", desc: "Post-discharge tele-consultations, medication delivery, and ongoing support from home." },
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-6 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-gold-200 hover:bg-gold-50/30 transition-all">
                    <div className="text-gold-600 font-black text-sm mb-1 font-display tracking-wide">
                      Step {item.step}
                    </div>
                    <h3 className="text-navy-900 font-bold text-lg mb-2 font-display">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-white font-black flex-shrink-0 shadow-lg z-10">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader badge="International Stories" title="Patient" highlight="Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-gold-300 hover:shadow-lg transition-all">
                <div className="flex items-center gap-1 mb-3">
                  {Array(t.rating).fill(0).map((_, i) => <span key={i} className="text-gold-400">★</span>)}
                </div>
                <p className="text-slate-600 italic text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-gold-300" />
                  <div>
                    <p className="text-navy-900 font-bold">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.flag} {t.country} · {t.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}