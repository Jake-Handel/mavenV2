/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3D0906',
        secondary: '#654321',
        accent: '#D2691E',
        'text-light': '#F5F0E8',
        'home-bg': '#0A0A0A',
      },
      fontFamily: {
        maven: ['ComputerSaysNo', 'serif'],
        body: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
