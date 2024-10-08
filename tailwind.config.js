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
        amarelo: '#F6A414',
        azul: '#204D9C',
        fundo: '#FBF0ED',
        azulClaro: '#1F9BD7',
        azulMedio: '#184DFA',
        marrom: '#31201A',
        preto: '#000000',
        branco: '#ffffff',
      },
      screens: {
        '2md': '980px' // breakpoint pra corrigir a responsividade da header
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

