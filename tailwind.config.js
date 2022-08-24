/** @type {import('tailwindcss').Config} */ 
module.exports = {
  //important:true,
  content: [
    "./components/*.{html,js}",
    "./pages/*.{html,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':'#ffffff',
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      work: ['Work-Sans', 'serif'],
      'work-italic': ['Work-Sans-Italic', 'serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      flexo: ['Flexo-Regular'],
      roboto: ['Roboto-Regular']
    },
    fontSize:{
      title: '30px',
      search: '167%'
    },
    
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation:{
        'bounce-once' : 'bounce 0.5s ease-in-out '
      },
      backgroundImage: {
        'dark-pattern': "url('/assets/images/body_bg.png')",
        'white-pattern': "url('/assets/images/container_bg.png')",
      }
    }
  },
  plugins: [],
}

