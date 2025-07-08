/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{,vue, js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        notosans: ["Noto Sans", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        emeraldlight: "#ecfdf5", // emerald-50
        emeraldmedium: "#a7f3d0", // emerald-300
        primary: "#05775E", // emerald-600
        primaryhover: "#07735b", // emerald-700
        primarydark: "#013A33", // emerald-900
        primarylight: "#6ee7b7", // emerald-300
        secondary: "#0D9488", //teal-600
        secondarydark: "#085952", // teal-800
        secondaryhover: "#0c8278", // teal-900
        dark: "#374151", // gray-700
        darkhover: "#111827", // gray-900
        primarygray: "#9ca3af", // gray-400
        grayhover: "#6b7280", // gray-500
        graydark: "#4b5563", // gray-600
        graylight: "#d1d5db", //gray-300
        light: "#f9fafb", // gray-50
        lighthover: "#e5e7eb", // gray-200
      },
    },
  },
  plugins: [],
};
