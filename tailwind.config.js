/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        textReveal: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        dash: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        spinAround: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        runningDotted: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "100% 0%" },
        }
      },
      animation: {
        "text-reveal": "textReveal 3s cubic-bezier(0.65, 0, 0.35, 1) forwards",
        dash: "dash 2s linear infinite",
        "spin-slow": "spinAround 3s linear infinite", // Added new spinning animation
        "dotted-running": "runningDotted 2s linear infinite"
      },
    },
  },
  plugins: [],
};
