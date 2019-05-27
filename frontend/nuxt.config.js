const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Yee NetBank',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    prefix: '/api/'
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:8080',
      pathRewrite: { '^/api': '' }
    }
  },

  auth: {
    redirect: false,
    strategies: {
      customer: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/customer/login',
            method: 'post'
          },
          logout: {
            url: '/customer/logout',
            method: 'get'
          },
          user: {
            url: '/customer/query',
            method: 'get'
          }
        },
        tokenRequired: false,
        tokenType: false
      },
      staff: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/staff/login',
            method: 'post'
          },
          logout: {
            url: '/staff/logout',
            method: 'get'
          },
          user: {
            url: '/staff/query',
            method: 'get'
          }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: [
      'app/transactions/2019/09',
      '/app/transactions/2019/10',
      'app/transactions/2019/11',
      'app/transactions/2019/12'
    ]
  }
}
