const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const pkg = require('./package')

console.log(process.env.NODE_ENV) //eslint-disable-line

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
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://yeebank.topty.me/api'
        : 'http://localhost:3000/api'
    // prefix: process.env.NODE_ENV === 'development' ? '/api/' : undefined
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
            url: '/customer/query/me',
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
            url: '/staff/general/login',
            method: 'post'
          },
          logout: {
            url: '/staff/general/logout',
            method: 'get'
          },
          user: {
            url: '/staff/general/query/me',
            method: 'get'
          }
        },
        tokenRequired: false,
        tokenType: false
      },
      manager: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/staff/manager/login',
            method: 'post'
          },
          logout: {
            url: '/staff/manager/logout',
            method: 'get'
          },
          user: {
            url: '/staff/manager/query/me',
            method: 'get'
          }
        },
        tokenRequired: false,
        tokenType: false
      },
      admin: {
        _scheme: 'local',
        endpoints: {
          login: {
            url: '/admin/login',
            method: 'post'
          },
          logout: {
            url: '/admin/logout',
            method: 'get'
          },
          user: {
            url: '/admin/query/me',
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
