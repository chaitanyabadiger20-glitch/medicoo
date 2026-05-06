import { motion } from "framer-motion";
import { useEffect, useRef } from "react";


export default function CinematicIntro({ onFinish }) {
    const audioRef = useRef(null);
 useEffect(() => {
  const timer = setTimeout(() => {
    onFinish();
  }, 3000);

  return () => clearTimeout(timer);
}, [onFinish]);

  return (
    
    <motion.div
  onClick={() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }}
  className="fixed inset-0 bg-black flex items-center justify-center z-[9999] cursor-pointer"
  initial={{ opacity: 1 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>
        <audio ref={audioRef} src="/sounds/heartbeat.mp3" preload="auto" />
      <div className="text-center">
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-2xl"
        >
          <span className="text-white text-3xl font-black">M</span>
        </motion.div>

        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl font-black text-white tracking-wide"
        >
          Medi<span className="text-gold-400">Vance</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-gray-400 text-sm mt-3 tracking-widest"
        >
          Healing Beyond Boundaries
        </motion.p>

        {/* Cinematic Glow Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6"
        />
      </div>
    </motion.div>
    
  );
}