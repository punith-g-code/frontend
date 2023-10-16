/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // we start to customize colors and fonts
  theme: {
    extend: {
      height: {
        header: '560px',
        rate: '400px',
      },
      fontSize: {
        h1: '2.6rem',
      },
      screens: {
        xs: '475px',
      },
      colors: {
        main: '#032b27',
        subMain: '#F20000',
        dry: '#06453f',
        star: '#FFB000',
        text: '#C0C0C0',
        border: '#4b5563',
        dryGray: '#7de88f',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
