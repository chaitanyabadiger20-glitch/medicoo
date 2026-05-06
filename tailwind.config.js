/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        navy: {
          50: "#f0f5ff",
          100: "#e5edff",
          200: "#cddbfe",
          300: "#b4c6fc",
          400: "#8da9f8",
          500: "#6485f0",
          600: "#4a66e3",
          700: "#1e3a5f",
          800: "#152a47",
          900: "#0d1e35",
          950: "#07111f",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "slideInLeft": "slideInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slideInUp": "slideInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "slideInRight": "slideInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #b45309 100%)",
        "navy-gradient": "linear-gradient(135deg, #07111f 0%, #0d1e35 50%, #152a47 100%)",
      },
      boxShadow: {
        "gold": "0 4px 24px -4px rgba(217, 119, 6, 0.3)",
        "gold-lg": "0 8px 40px -8px rgba(217, 119, 6, 0.4)",
        "navy": "0 4px 24px -4px rgba(7, 17, 31, 0.5)",
      },
    },
  },
  plugins: [],
};