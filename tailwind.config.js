/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "bg-0": "url('/bg0.png')",
        // "bg-1": "url('/bg1.svg')",
        // "bg-2": "url('/bg2.png')",
        // "bg-3": "url('/bg3.png')",
        // "bg-4": "url('/bg4.png')",
        // "bg-5": "url('/bg5.svg')",
        "bg-6": "url('/bg6.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
