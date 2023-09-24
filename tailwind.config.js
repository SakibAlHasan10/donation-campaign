/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('https://i.ibb.co/JFtJGWC/donations.jpg')",
      'footer-texture': "url('/img/footer-texture.png')",
    }},
  },
  plugins: [require("daisyui")],
}

