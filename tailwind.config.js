/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
     './src/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', md: '2rem' },
      screens: { '2xl': '1280px' }, 
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        mainColor: 'rgb(36 36 36)',
        primary: '#f7ab0a',
        secondary: '#333333',
      },
    },
  },
  plugins: [
    // ihtiyacın olursa aç:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
