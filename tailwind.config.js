/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xlg: '1200px',
      xl: '1440px',
      xxl: '1536px',
    },
    colors: {
      Primary: '#0B0C0C',
      Secondary: '#1D70B8',
      Tertiary: '#A6B0B5',
      ButtonColor: '#00703C',
      borderColor: '#B1B4B6',
      WhiteOp5: '#ffffff80',
      White: '#fff',
      Draft: '#C41212',
      DraftOp5: '#c412121a',
      Published: '#40982E',
      PublishedOp01: '#40982e1a',
      ButtonBorderColor: '#B3C4CE',
      ButtonBorderColorOp2: '#b3c4ce33',
      colorP: '#000000',
      color1: '#92a1ba1a',
      transparent: 'transparent',
      '44ABB9': '#1D70B8',
    },
    fontFamily: {
      muli: ['Muli'],
    },
    extend: {
      spacing: {
        '10px': '0.625rem',
        '11px': '0.6875rem',
        '14px': '0.875rem',
        '22px': '1.375rem',
        '15px': '0.9375rem',
        '25px': '1.5625rem',
        '30px': '1.875rem',
        '35px': '2.188rem',
        '66px': '4.125rem',
        '188px': '11.75rem',
      },
      fontSize: {
        xsm: '0.9375rem',
        '22px': '1.375rem',
      },
      boxShadow: {
        '3xl': '0px 2px 20px rgba(0, 0, 0, 0.20)',
        '4xl': '0 2px 20px 0 rgba(38,34,98,0.07)',
        '5xl': '0 2px 20px 0 rgba(46,94,152,0.5)',
      },
      borderRadius: {
        '10px': '0.625rem',
      },

      flex: {
        '0auto': '0 0 auto',
      },
    },
  },
  plugins: [],
};
