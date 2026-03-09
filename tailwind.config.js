/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'landing': "url('/images/landing-profile.jpg')",
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

