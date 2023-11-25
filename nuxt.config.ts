export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
        titleTemplate: '%s - Portal',
        title: 'Home',
        htmlAttrs: { lang: 'pt-br' },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        ],
  
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'slide-left', mode: 'out-in' }
  },

  components: true,

  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    'nuxt-vue3-google-signin'
  ],

  googleSignIn: {
    clientId: '872896941312-1fp0lstojvm381u5mecvm45kf6i3u4j5.apps.googleusercontent.com',
  },

  devServer:{
    port: 8080
  }

})