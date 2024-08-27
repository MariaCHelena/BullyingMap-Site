/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        laranja: '#CB491D',
        azul: '#204D9C',
        fundo: '#FBF0ED',
        azulClaro: '#1F9BD7',
        marrom: '#31201A',
        preto: '#000000',
        branco: '#ffffff',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

