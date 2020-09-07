// noinspection JSUnusedGlobalSymbols
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/style.scss',
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/lib/css/mdb.min.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/vue-formulate'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/toast',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDLq-silESo4GMFy0DJzbsOj_XXVjynb8E',
          authDomain: 'aaua-xperience.firebaseapp.com',
          databaseURL: 'https://aaua-xperience.firebaseio.com',
          projectId: 'aaua-xperience',
          storageBucket: 'aaua-xperience.appspot.com',
          messagingSenderId: '967876807982',
          appId: '1:967876807982:web:36d28facc8f7029401bebf',
          measurementId: 'G-SRM55PZFQY',
        },
      },
    ],
  ],
  firebase: {
    // ...
    services: {
      auth: {
        persistence: 'local', // default
        ssr: true,
      },
      performance: true,
      analytics: true,
      storage: true,
      realtimeDb: true,
      // ...
    },
  },
  toast: {
    theme: 'bubble',
    position: 'top-right',
    duration: 4000,
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  server: {
    // port: process.env.PORT || 30000,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {},
    transpile: ['mdbvue/lib/components'],
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[chunkhash].js'),
    },
  },
}
