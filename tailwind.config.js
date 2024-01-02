/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
      "./component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'burger-image': "url('/png/menu.png')",
      }),
      width: {
        '100': '100px',
        '200': '200px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',

      },
      height:{
        '100':'100px',
        '200':'200px',
        '300':'300px',

      },
      boxShadow: {
        'inset': 'inset 0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        'top-shadow':' 0px 1px 6px 0px rgba(0, 0, 0, 0.5)'
      },
      fontSize:{
        "size-18px":"18px",
        "size-14px":"14px",
      },
      backgroundColor: {
        "logo-blue":"#3eb7c8",
      }
    },
  },
  plugins: [],
}

