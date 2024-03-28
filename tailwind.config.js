/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      'xs':'320px',
      'sm': '640px',
      'md': '768px',
      'xmd':'800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2560px',
    },

    extend: {
      colors: {
        'dred':'#F20A0A',
        milf:'#F1F6FF',
        gre:'#0E8104',
        Tbla:'#0D0D0D',
        Bbla:'#222222',
        Cbla:'#141414',

       },
      fontFamily:{
        Roboto:['Roboto'],
        RageItalic:['RageItalic'],
       },
       backgroundImage:{
        'my-bg':"url(/image11.png)",
       },

    },
  },
  plugins: [],
}

