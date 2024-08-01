/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '1024px'
        
      },
      colors: {
        'primary-pink': '#FC81DF',
        'primary-beige': '#FDFFDC',
        'primary-green': '#C5ECBE',
        'primary-yellow': '#FFD655',
        'primary-blue': '#A3D8FF',
        'primary-purple' : '#F6CBEC',
        'primary-dark' : '#222831',
        'secondary-pink': '#F857B5',
      }
    },
  },
  plugins: [],
}

