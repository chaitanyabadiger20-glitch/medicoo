export default function SectionHeader({ badge, title, highlight, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${
          light
            ? "bg-white/10 border border-white/20 text-gold-300"
            : "bg-gold-600/10 border border-gold-500/30 text-gold-600"
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl md:text-5xl font-black font-display leading-tight ${light ? "text-white" : "text-navy-900"}`}>
        {title}{" "}
        {highlight && <span className="text-gold-500">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${light ? "text-slate-300" : "text-slate-500"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <div className="h-0.5 w-8 bg-gold-500 rounded-full" />
        <div className="h-0.5 w-16 bg-gold-400 rounded-full" />
        <div className="h-0.5 w-8 bg-gold-500 rounded-full" />
      </div>
    </div>
  );
}