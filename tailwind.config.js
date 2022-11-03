/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'my-black': '#282828',
        'my-dark-gray': '#333232',
        'my-creamy-white': '#ebdbb2',
        'my-light-blue': '#67bece',
        'my-dark-blue': '#83a598',
      },
      fontSize: {
        '1.5xs': '0.6875rem',
      },
      padding: {
        0.75: '3px',
        1.5: '6px',
      },
      gridTemplateColumns: {
        'fill-15': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
};
