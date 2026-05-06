import { useState, useEffect, useCallback } from "react";
import { HERO_SLIDES } from "../data/data";

export default function HeroSlider({ setActivePage }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const DURATION = 3500;

  const goToSlide = useCallback(
    (idx) => {
      if (animating || idx === current) return;
      setAnimating(true);
      setPrev(current);
      setCurrent(idx);
      setProgress(0);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 900);
    },
    [animating, current]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % HERO_SLIDES.length);
  }, [current, goToSlide]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, DURATION);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const raf = requestAnimationFrame(function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [current]);

  const navigate = (path) => {
    setActivePage(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-screen min-h-[650px] overflow-hidden bg-navy-950">
      {/* Slides */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === current;
        const isPrev = idx === prev;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[900ms] ease-in-out ${
              isActive
                ? "opacity-100 scale-100 z-10"
                : isPrev
                ? "opacity-0 scale-105 z-5"
                : "opacity-0 scale-100 z-0"
            }`}
          >
            {/* Background Image */}
            <img
                  src={slide.image}
                   alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover ${
                  isActive ? "scale-115" : "scale-100"
                   }`}
                   style={{
                   transformOrigin: "center center",
                   transition: "transform 3.2s ease-out"
                  }}
              />
            {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-navy-950/10" />
          </div>
        );
      })}

      {/* Decorative Gold Lines */}
      <div className="absolute left-0 top-1/4 w-1 h-48 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-60 z-20" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 bg-gold-600/20 border border-gold-500/40 rounded-full px-4 py-1.5 mb-6 animate-slideInLeft"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-gold-300 text-sm font-semibold tracking-wide">
                {HERO_SLIDES[current].badge}
              </span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="text-5xl md:text-7xl font-black text-white leading-none mb-3 animate-slideInUp font-display"
            >
              {HERO_SLIDES[current].title}
            </h1>
            <h2
              key={`sub-${current}`}
              className="text-4xl md:text-6xl font-black text-gold-400 leading-none mb-6 animate-slideInUp animation-delay-100 font-display"
            >
              {HERO_SLIDES[current].subtitle}
            </h2>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-slideInUp animation-delay-200"
            >
              {HERO_SLIDES[current].description}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="flex flex-col sm:flex-row gap-4 animate-slideInUp animation-delay-300"
            >
              <button
                onClick={() => navigate("contact")}
                className="group px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-white font-bold text-lg rounded-xl hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-2xl hover:shadow-gold-500/40 hover:scale-105 flex items-center gap-3"
              >
                {HERO_SLIDES[current].cta}
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <button
                onClick={() => navigate("specialities")}
                className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                {HERO_SLIDES[current].ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats Cards */}
      <div className="absolute bottom-20 right-6 md:right-16 z-20 flex flex-col gap-3 hidden md:flex">
        {[
          { icon: "🏥", val: "7", label: "Hospitals" },
          { icon: "👨‍⚕️", val: "350+", label: "Specialists" },
          { icon: "🛏️", val: "1600+", label: "Beds" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-navy-950/80 backdrop-blur-md border border-gold-700/30 rounded-xl px-4 py-3 flex items-center gap-3 animate-slideInRight"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <span className="text-2xl">{stat.icon}</span>
            <div>
              <div className="text-gold-400 font-black text-lg leading-none">{stat.val}</div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: idx === current ? "48px" : "24px" }}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full" />
            {idx === current && (
              <div
                className="absolute top-0 left-0 h-full bg-gold-400 rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={() =>
          goToSlide((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy-900/60 border border-white/20 text-white flex items-center justify-center hover:bg-gold-600/50 transition-all hover:scale-110 backdrop-blur-sm"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy-900/60 border border-white/20 text-white flex items-center justify-center hover:bg-gold-600/50 transition-all hover:scale-110 backdrop-blur-sm"
      >
        →
      </button>
    </div>
  );
}