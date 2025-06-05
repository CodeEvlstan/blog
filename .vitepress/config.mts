import { defineConfig } from 'vitepress'
import { javascriptSidebarItem, vueSidebarItem } from './directory.mjs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  //   vite: {
  //   resolve: {
  //     alias: {
  //       'vue': 'vue/dist/vue.esm-bundler.js'
  //     }
  //   },
  // },
  base: '/blog/',
  title: "Evlstan's Columns",
  description: "Evlstan的前端专栏",
  head: [
    ['link', { rel: 'icon', href: '/blog/icon.ico'}]
  ],
  themeConfig: {
    logo: '/logo.jpg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '组件库', link: '/components' },
      { text: 'Hooks', link: '/components' },
      { text: 'Utils', link: '/components' },
      { text: '专栏', items: [
        {text: '人工智能', link: '/columns/ai'}
      ] },
    ],
    outline: 3,
    sidebar: {
      '/interview/': [javascriptSidebarItem,vueSidebarItem],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CodeEvlstan/blog' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-present Evlstan<br/>
      <a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank'>吉ICP备2025028976号-1</a> 

      `
    }
  }
})
