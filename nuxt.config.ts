// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      { name: 'English', code: 'en', file: 'en/index.ts' },
      { name: '中文（简体）', code: 'zh-CN', file: 'zh-CN/index.ts' },
    ],
    lazy: true,
    langDir: 'locale',
    defaultLocale: 'en',
    strategy: 'no_prefix',
    dynamicRouteParams: false,
    experimental: {
      jsTsFormatResource: true,
    },
    vueI18n: './i18n.config.ts',
  },
})
