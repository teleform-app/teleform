import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Teleform Docs",
  description: "Docs for the Telegram Mini App called Teleform – an app for creating feedback forms.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api-documentation' }
    ],

    sidebar: [
      {
        text: 'Backend',
        items: [
          { text: 'API Documentation', link: '/api-documentation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teleform-app/teleform' }
    ]
  }
})
