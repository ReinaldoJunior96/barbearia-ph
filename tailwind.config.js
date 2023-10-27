/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      /*=> @media (min-width: 360px)*/
      'sm': '300px',
      'md': '380px',
      'lg': '500px'

    },
    extend: {
      colors: {

        primary: '#312d2d',
        // secondary: '#0f1431',
        secondary: '#11141D',
        danger: '#FF6066',

        accent100: '#aed3d5',
        accent200: '#4d88a6',
        accent300: '#294970',
        accent400: '#457fca',
        accent500: '#5691c8',








        darkPrimary: '#23272A', // Cor de fundo escura
        darkSecondary: '#343A40', // Cor secundária escura
        darkText: '#E2E8F0', // Cor do texto em um fundo escuro
        darkLilac: '#8D4EFD', // Tom de lilás para destaque em um fundo escuro
        darkBlue: '#333333', // Tom de azul escuro quase cinza ou preto
        darkHoverPrimary: '#1C1F22', // Cor de hover para o fundo escuro
        darkHoverSecondary: '#2E3337', // Cor de hover para a cor secundária escura
        darkHoverLilac: '#695182', // Cor de hover para o destaque lilás em um fundo escuro
        darkHoverBlue: '#2B2B2B',

        erro:'#CE1D1D',
        success: '#70D825'






      }
    },
  },
  extend: {
    backgroundColor: ['dark', 'hover'],
    textColor: ['dark', 'hover'],
  },
  plugins: [
  ],
}

