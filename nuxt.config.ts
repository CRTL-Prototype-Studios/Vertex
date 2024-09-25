// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    experimental: {
      tasks: true,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-tiptap-editor", "@sidebase/nuxt-auth", "@nuxtjs/mdc"],
  compatibilityDate: "2024-09-24",
  tiptap: {
    prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
  },
  runtimeConfig: {
    authOrigin: '',
    secretKey: process.env.JWT_TOKEN || 'your-secret-token'
  },
  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    baseURL: '/v1/api/auth',
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/session', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/token',
        type: 'Bearer',
        cookieName: 'auth.token',
        headerName: 'Authorization',
        maxAgeInSeconds: 1800,
        sameSiteAttribute: 'lax',
        cookieDomain: 'vertex.crtl-prototype-studios.cn',
        secureCookieAttribute: false,
        httpOnlyCookieAttribute: false,
      },
      session: {
        dataType: {
          id: 'string | number',
          username: 'string',
          nickname: 'string',
          email: 'string',
        },
      },
    }
  }
})