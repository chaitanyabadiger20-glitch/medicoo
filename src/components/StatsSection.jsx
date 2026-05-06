import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/data";

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const end = parseFloat(target);
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600 rounded-full blur-3xl" />
      </div>
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <p className="text-gold-400 text-sm font-bold uppercase tracking-widest">
            Excellence in Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white font-display mt-2">
            A Legacy of <span className="text-gold-400">Trust & Care</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-2xl bg-navy-800/40 border border-navy-700/50 hover:border-gold-600/40 hover:bg-navy-800/70 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl font-black text-gold-400 font-display leading-none mb-2 group-hover:scale-110 transition-transform">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="mt-3 h-0.5 w-8 bg-gold-600/40 mx-auto rounded-full group-hover:w-12 group-hover:bg-gold-400 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}