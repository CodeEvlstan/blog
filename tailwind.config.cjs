/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.vitepress/theme/**/*.{vue,js,ts,jsx,tsx,md}',
    './columns/**/*.{vue,js,ts,jsx,tsx,md}',
    './components/**/*.{vue,js,ts,jsx,tsx,md}',
  ],
  corePlugins: {
    preflight: false // 禁用默认样式（可选，避免与 VitePress 默认样式冲突）
  },
  theme: {
    extend: {},
  },
  plugins: [],
  // 其他 Tailwind 配置...
}