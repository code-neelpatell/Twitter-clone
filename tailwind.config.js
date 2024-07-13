/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: 'rgb(231,233,234)',
      background: 'rgb(0, 0, 0)',
      accent: 'rgb(29, 155, 240)',
      secondary: 'rgb(113, 118, 123)',
      primary_hover: 'rgb(215, 219,220)',
      accent_hover: 'rgb(26,140,216)',
      secondary_hover: 'rgb(231,233,234,0.1)',
    },
    fontSize: {
      base: '15px',
      lg: '20px',
      md: '17px',
      sm: '13px',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    borderWidth: {
      DEFAULT: '0.5px',
      0: '0',
    },
    borderColor: {
      DEFAULT: '#2d2f31',
      primary: 'rgb(231,233,234)',
      background: 'rgb(0, 0, 0)',
      accent: 'rgb(29, 155, 240)',
      secondary: 'rgb(113, 118, 123)',
      primary_hover: 'rgb(215, 219,220)',
      accent_hover: 'rgb(26,140,216)',
      secondary_hover: 'rgb(231,233,234,0.1)',
    },
  },
  plugins: [],
}

// 1281: nav small - laptop -> done
// 1094: suggest small=290px -> not required
// 1024: nav padding less -> not required
// 1004: nav padding default, suggest hide - tablet
// 616: nav padding less - tablet_small
// 499: mobile screen, nav top, nav side, nav bottom, fab button - mobile

// https://play.tailwindcss.com/20F4NxNRpC