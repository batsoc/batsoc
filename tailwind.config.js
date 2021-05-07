/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 **
 ** DEFAULTS: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Get shades by entering brand color: https://tailwind.ink/
 **
 ** Palette https://coolors.co/073763-f57f20-d5f4cd-523f38-fdee50
 **
 ** Brand Color: steel-900, mango-500, limegreen-300
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // see https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',

  // Extends the default Studio Meta Tailwind configuration here...
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // to change or add fonts, see also nuxt.config.js -> webfontloader
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mango: {
          50: '#f9f4e6',
          100: '#faedc5',
          200: '#f7e18d',
          300: '#f4cb4a',
          400: '#efaa1a',
          500: '#f57f20',
          600: '#e06207',
          700: '#c0490b',
          800: '#9e3a12',
          900: '#823013',
        },
        olive: {
          50: '#fafaf1',
          100: '#f9f8d5',
          200: '#f3f092',
          300: '#eae14a',
          400: '#d3c717',
          500: '#b7a907',
          600: '#928504',
          700: '#706607',
          800: '#544c0b',
          900: '#413c0d',
        },
        limegreen: {
          50: '#f6faf6',
          100: '#eef9e9',
          200: '#d8f3c3',
          300: '#b3e891',
          400: '#65d44f',
          500: '#2ebb24',
          600: '#219d17',
          700: '#237d19',
          800: '#215f1c',
          900: '#1c4b1b',
        },
        turquoise: {
          50: '#edf9f9',
          100: '#d3f7f5',
          200: '#a4f0e9',
          300: '#67e6dc',
          400: '#23d2c7',
          500: '#0bb9ad',
          600: '#0a9c90',
          700: '#0f7e74',
          800: '#12625b',
          900: '#114f49',
        },
        steel: {
          50: '#f2fafc',
          100: '#dff7fa',
          200: '#b5ecf6',
          300: '#83dbf3',
          400: '#40bdef',
          500: '#1a98e8',
          600: '#1475d9',
          700: '#175cb5',
          800: '#164786',
          900: '#143967',
        },
        royalblue: {
          50: '#f5fafd',
          100: '#e5f6fc',
          200: '#c1e7fa',
          300: '#98d1f9',
          400: '#5faaf8',
          500: '#317ef6',
          600: '#225aef',
          700: '#2047d4',
          800: '#1b37a2',
          900: '#172d7d',
        },
        indigo: {
          50: '#f4f7fb',
          100: '#eaedfb',
          200: '#d4d5fa',
          300: '#bdb8f9',
          400: '#a28cf9',
          500: '#845ff8',
          600: '#683ff4',
          700: '#5232e1',
          800: '#4029b7',
          900: '#332391',
        },
        flamingo: {
          50: '#f6f6fa',
          100: '#f1eafa',
          200: '#e5cdf7',
          300: '#d9adf6',
          400: '#cf7ef4',
          500: '#c652f3',
          600: '#ab35ec',
          700: '#832ad3',
          800: '#6323a7',
          900: '#4e1f83',
        },
        blush: {
          50: '#fcf9f8',
          100: '#fceff3',
          200: '#fad3e6',
          300: '#f9add1',
          400: '#f975ac',
          500: '#fa4a85',
          600: '#f22c5f',
          700: '#d2224c',
          800: '#a41c3c',
          900: '#801830',
        },
        tomato: {
          50: '#fbf7f2',
          100: '#fcefe3',
          200: '#f9dbc2',
          300: '#f7bd8e',
          400: '#f6904e',
          500: '#f66628',
          600: '#ec431a',
          700: '#cc331d',
          800: '#a32920',
          900: '#83221d',
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
    // enabled: process.env.NODE_ENV === 'production',
    whitelistPatterns: [/^formulate/],
    // If you really want to remove all unused styles, use the mode: 'all'
    // option and be very careful to provide the paths to all files that might
    // reference any classes or HTML elements
    // mode: 'all',
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
