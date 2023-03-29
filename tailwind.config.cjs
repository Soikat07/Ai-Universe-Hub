/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#19aa19',

          secondary: '#afe4ed',

          accent: '#cc0088',

          neutral: '#231C2B',

          'base-100': '#F8F4FA',

          info: '#9CB8E2',

          success: '#18AF82',

          warning: '#9C6C11',

          error: '#E97963',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
