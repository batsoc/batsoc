/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 **
 ** DEFAULTS: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Get shades: https://javisperez.github.io/tailwindcolorshades/#/
 **
 ** Palette https://coolors.co/073763-f57f20-d5f4cd-523f38-fdee50
 **
 **   Colors: navy-500, orange-500, green-200
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // Extends the default Studio Meta Tailwind configuration here...
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // to change or add fonts, see also nuxt.config.js -> webfontloader
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: {
          50: '#f3f5f7',
          100: '#e6ebef',
          200: '#c1cdd8',
          300: '#9cafc1',
          400: '#517392',
          500: '#073763',
          600: '#063259',
          700: '#05294a',
          800: '#04213b',
          900: '#031b31',
        },
        orange: {
          50: '#fff9f4',
          100: '#fef2e9',
          200: '#fddfc7',
          300: '#fbcca6',
          400: '#f8a563',
          500: '#F57F20',
          600: '#dd721d',
          700: '#b85f18',
          800: '#934c13',
          900: '#783e10',
        },
        green: {
          50: '#f8fdf7',
          100: '#f1fbee',
          200: '#dcf6d5',
          300: '#c7f0bc',
          400: '#9ce58a',
          500: '#72DA58',
          600: '#67c44f',
          700: '#56a442',
          800: '#448335',
          900: '#386b2b',
        },
      },
    },
  },
  variants: {
    extend: {
      // opacity: ['disabled'],
      // cursor: ['disabled'],
    },
  },
  plugins: [
    // Docs https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
    // Docs https://github.com/tailwindlabs/tailwindcss-typography
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/^formulate/],
    // If you really want to remove all unused styles, use the mode: 'all'
    // option and be very careful to provide the paths to all files that might
    // reference any classes or HTML elements
    mode: 'all',
    content: [
      'components/**/*.vue',
      'content/**/*.md',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'utils/**/*.js',
      'nuxt.config.js',
      'formulate.config.js',
    ],
  },
}
