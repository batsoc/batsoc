export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BatSoc',
    titleTemplate:
      '%s — ' + require('./content/settings/site-settings.json').orgName,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        hid: 'netlify-identity-widget',
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        defer: true,
      },
    ],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/filters.js'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc https://github.com/nuxt-community/dayjs-module
    '@nuxtjs/dayjs',
    // Doc https://axios.nuxtjs.org/setup
    '@nuxtjs/axios',
    // Doc https://github.com/pimlie/nuxt-rfg-icon
    'nuxt-rfg-icon',
    // Doc https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    // Doc https://github.com/nuxt-community/google-gtag-module
    '@nuxtjs/google-gtag',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/juliomrqz/nuxt-optimized-images
    // '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/ivodolenc/nuxt-lazysizes
    'nuxt-lazysizes',
    // Doc https://vueformulate.com/guide/installation/#nuxt
    '@braid/vue-formulate/nuxt',
    // https://github.com/nuxt-community/svg-module#readme
    '@nuxtjs/svg',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.URL,
  },

  // Doc https://github.com/nuxt-community/google-gtag-module
  'google-gtag': {
    id: 'G-LNYW3JRWXF',
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['batsoc.org.au'],
      },
    },
  },

  sitemap: {
    hostname: 'https://batsoc.org.au',
    gzip: true,
    // exclude can be used to exclude non-dynamic routes from the site-map
    // Any route in the generate.routes property will be added to the sitemap
    // and it doesn't appear such a route can be excluded
    exclude: ['/404'],
    trailingSlash: true,
  },

  'rfg-icon': {
    masterPicture: 'static/img/logo-lg.png',
  },

  formulate: {
    configPath: '~/formulate.config.js',
  },

  webfontloader: {
    google: {
      families: ['Inter:400,700,900&display=swap'], // Loads Lato font with weights 400 and 700
    },
  },

  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    defaultTimeZone: 'Australia/Brisbane',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone', // import 'dayjs/plugin/timezone'
      'localizedFormat',
    ],
  },

  hooks: {
    // Doc: https://content.nuxtjs.org/advanced#contentfilebeforeinsert
    'content:file:beforeInsert': async (document, database) => {
      // search for markdown containing
      // only `specialNotice` property.
      if (
        document.extension === '.json' &&
        document.questions &&
        document.questions.length > 0
      ) {
        document.questions.forEach(async (q) => {
          // Replace Markdown string in database
          // with the JSON ATS version
          q.answer = await database.markdown.toJSON(q.answer)
        })
      }
    },
  },

  // tailwindcss: {
  //   // configPath: '~/tailwind.config.js',
  //   // cssPath: '~/assets/css/main.scss',
  //   // Doc: https://github.com/nuxt-community/tailwindcss-module
  //   exposeConfig: true,
  // },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,
  },
}
