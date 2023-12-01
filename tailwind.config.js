/** @type {import('tailwindcss').Config} */

import foont from "/Kurale-Regular.ttf";

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      irishGrover: [
        '"irish grover", irish-grover',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
      kuraleFont: [
        '"kurale font", kurale',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32'
        },
      ],
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      "RedWood": "#003b95",
      "RedWoodLight": "#006ce4",
      "Carib": "#7E685A",
      "CaribLight": "#AA9588",
      "Seashell": "#C2CAD0",
      "SeashellLight": "#F9F2F0",
      "Pistachio": "#AFD275",
      "PistachioLight": "#D2E6B2",
      "mint": "#4fc9b1",
      "mintLight": "#64ffe0",
      "grey": "#cccccc",
      "yellow": "#ffb700",
      "red": "#da1a1b",
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2.5s ease-in-out forwards",
        fastFadeIn: "signfadeIn 1s ease-in-out forwards",
        intro: "intro 2.5s ease-in-out forwards",
        signLogo: "signLogoAnim 1s ease-in-out forwards",
      }, 
      keyframes: {
        intro: {
          '0%': { transform: 'translateY(-10px)', opacity: 0.0 },
          '50%': { transform: 'translateY(0px)', opacity: 1.0 },
          '75%': { transform: 'translateY(0px)', opacity: 1.0 },
          '100%': { transform: 'translateY(-15vh)', opacity: 1.0 },
        },
        fadeIn: {
          '0%': { transform: 'translateY(-20px)', opacity: 0.0 },
          '75%': { transform: 'translateY(-20px)', opacity: 0.0 },
          '100%': { transform: 'translateY(15px)', opacity: 1.0 }
        },
        signfadeIn: {
          '0%': { transform: 'translateY(-20px)', opacity: 0.0 },
          '40%': { transform: 'translateY(-20px)', opacity: 0.0 },
          '100%': { transform: 'translateY(0px)', opacity: 1.0 }
        },
        signLogoAnim: {
          '0%': { transform: 'translateY(-15vh)', opacity: 1.0 },
          '100%': { transform: 'translateY(-30vh)', opacity: 1.0 },
        },
      }
    },
  },
  plugins: [],
}