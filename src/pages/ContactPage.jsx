import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { HOSPITALS, SPECIALITIES } from "../data/data";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", hospital: "", speciality: "", date: "", message: "", type: "appointment",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/80 to-navy-900/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-semibold">Book an Appointment</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white font-display mb-4">
            Get In <span className="text-gold-400">Touch</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Book an appointment, request a second opinion, or reach out for any queries. Our team responds within 2 hours.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <section className="py-10 bg-yellow-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { icon: "📞", title: "Call Us", info: "+91 1800 200 6060", sub: "Mon–Sat, 8am–8pm", href: "tel:18002006060" },
            { icon: "🚨", title: "Emergency", info: "108", sub: "24/7 · Air Ambulance Available", href: "tel:108", urgent: true },
            { icon: "✉️", title: "Email Us", info: "care@medivance.com", sub: "Reply within 2 hours", href: "mailto:care@medivance.com" },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                item.urgent
                  ? "border-red-200 bg-red-50 hover:border-red-300 hover:shadow-red-100"
                  : "border-slate-200 bg-slate-50 hover:border-gold-300 hover:shadow-gold-50"
              }`}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <div>
                <p className={`font-bold text-sm ${item.urgent ? "text-red-700" : "text-navy-900"}`}>{item.title}</p>
                <p className={`font-black text-lg font-display ${item.urgent ? "text-red-600" : "text-gold-600"}`}>{item.info}</p>
                <p className="text-slate-400 text-xs">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mx-auto mb-5 animate-bounce">✅</div>
                <h2 className="text-2xl font-black text-navy-900 font-display mb-2">Appointment Requested!</h2>
                <p className="text-slate-500 mb-6">
                  Thank you, {form.name}! Our team will call you at <strong>{form.phone}</strong> within 2 hours to confirm your appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-black text-navy-900 font-display mb-2">Book an Appointment</h2>
                <p className="text-slate-500 text-sm mb-7">Fill in the form below and we'll get back to you within 2 hours.</p>

                {/* Type Toggle */}
                <div className="flex gap-2 mb-7 p-1 bg-yellow-100 rounded-xl">
                  {[
                    { val: "appointment", label: "📅 Appointment" },
                    { val: "teleconsult", label: "📹 Tele-Consult" },
                    { val: "secondopinion", label: "🔬 Second Opinion" },
                  ].map((t) => (
                    <button
                      key={t.val}
                      onClick={() => setForm({ ...form, type: t.val })}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                        form.type === t.val
                          ? "bg-white text-gold-600 shadow-sm"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 or international"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Country</label>
                      <input
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Hospital</label>
                      <select
                        name="hospital"
                        value={form.hospital}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all bg-white"
                      >
                        <option value="">Select hospital</option>
                        {HOSPITALS.map((h) => <option key={h.id} value={h.name}>{h.name}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Speciality</label>
                      <select
                        name="speciality"
                        value={form.speciality}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all bg-white"
                      >
                        <option value="">Select speciality</option>
                        {SPECIALITIES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Preferred Date</label>
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">
                      Message / Medical Summary
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Brief description of your condition, existing reports, etc."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-black text-lg rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all shadow-lg hover:shadow-gold-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request Appointment →"
                    )}
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    We respect your privacy. Your information is secure and will never be shared.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 border border-navy-700">
              <h3 className="text-white font-black text-lg font-display mb-4">Hospital Locations</h3>
              <div className="space-y-3">
                {HOSPITALS.slice(0, 4).map((h) => (
                  <div key={h.id} className="flex items-start gap-3 py-3 border-b border-navy-700/50 last:border-0">
                    <span className="text-gold-400 mt-0.5">🏥</span>
                    <div>
                      <p className="text-white font-bold text-sm">{h.name}</p>
                        <a
                        href={`https://www.google.com/maps?q=${encodeURIComponent(h.address)}`}
                        target="_blank"
                          rel="noopener noreferrer"
                         className="text-slate-400 text-xs mt-0.5 hover:text-gold-400 hover:underline transition cursor-pointer"
                         >
                         {h.address}
                       </a>
                      <a href={`tel:${h.phone}`} className="text-gold-400 text-xs hover:text-gold-300 transition-colors">
                        {h.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-800/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl animate-pulse">🚨</span>
                <div>
                  <h3 className="text-red-400 font-black font-display">Emergency?</h3>
                  <p className="text-slate-400 text-sm">Immediate assistance available</p>
                </div>
              </div>
              <a
                href="tel:108"
                className="block w-full py-3.5 bg-red-600 text-white font-black text-center text-xl rounded-xl hover:bg-red-500 transition-all hover:scale-105 shadow-lg"
              >
                Call 108 Now
              </a>
              <p className="text-slate-500 text-xs text-center mt-2">24/7 · Air Ambulance Available</p>
            </div>

            <div className="bg-gold-50 border border-gold-100 rounded-2xl p-5">
              <h4 className="text-navy-900 font-bold text-sm mb-3">International Patients</h4>
              <p className="text-slate-500 text-xs mb-3">
                Calling from abroad? Our international helpdesk is available 24/7 for medical tourists and overseas patients.
              </p>
              <a href="mailto:international@medivance.com" className="text-gold-600 text-sm font-bold hover:text-gold-500 transition-colors">
                international@medivance.com →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}