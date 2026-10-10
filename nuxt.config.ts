// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },

  app: {
    head: {
      title: 'Delvin — Frontend Developer',
      meta: [
        { name: 'description', content: 'Frontend developer crafting clean, performant web experiences.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Delvin — Frontend Developer' },
        { property: 'og:description', content: 'Frontend developer crafting clean, performant web experiences.' },
        { name: 'theme-color', content: '#fafaf9' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
