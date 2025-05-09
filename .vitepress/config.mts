import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Evlstan's Blog",
  description: "Evlstan的前端博客",
  head: [
    ['link', { rel: 'icon', href: '/public/icon.ico'}]
  ],
  themeConfig: {
    logo: '/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件库', link: '/components' },
      { text: 'Hooks', link: '/components' },
      { text: 'Utils', link: '/components' },
      { text: '博客', items: [
        {text: 'Vue', link: '/article'}
      ] },
    ],
    outline: 3,
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
