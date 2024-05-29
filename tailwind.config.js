const { Spectral, Cinzel, Alegreya, Alegreya_Sans } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#1A696B",
        foreground: {

        },
        background: {

        },
        gray: {
          // Inherit from Tailwind defaults, add additional shades as needed
        },
        purple: {
          500: '#6f42c1', // Purple for buttons or accents
        },
      },
      fontFamily: {
        // Alegreya_Sans: ["Alegreya_Sans"],
        Alegreya_Sans: 'Alegreya Sans',
        sans: ['Inter', 'sans-serif'],
        Spectral: 'Spectral',
        Cinzel: 'Cinzel',
        // Alegreya_Sans: ["Alegreya Sans", "Sans"],
        serif: ['Playfair Display', 'serif'], // Replace with a serif font
      },
      backgroundImage: {
        gradient: 'linear-gradient(to bottom, transparent, var(--background-end-rgb)) var(--background-start-rgb)',
        // Add other background images here
      },
    },
  },
  plugins: [],
};
