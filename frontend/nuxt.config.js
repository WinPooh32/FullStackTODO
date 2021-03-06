const path = require('path')

export default {
  mode: 'universal', //'spa', 
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '@/plugins/element-ui'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
  ],
  styleResources: {
    // your settings here
    scss: [
      './assets/vars/*.scss',
      './assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^todo/],
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, {
      isDev,
      isClient
    }) {
      // resolve local modules from assets folder
      // config.resolve.modules = [path.resolve(__dirname, 'assets'), 'node_modules'];
      config.mode = isDev ? 'development' : 'production';
    },
  }
}