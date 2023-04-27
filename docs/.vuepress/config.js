const { hopeTheme } = require('vuepress-theme-hope')
// import { hopeTheme } from ('vuepress-theme-hope')
module.exports = {
    title: '微控工业网关',
    description: '解释说明文档',
    themeConfig: {
        logo: '/assets/img/tu.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '导航', link: '/guide/' },
            { text: '链接', link: 'https://github.com/winingner/vuepressfour' }
          ],
        sidebar: [
            ['/','首页'],
            ['/graphic_pageone','图形界面'],
          ],
          activeHeaderLinks: false,
      },
      theme: hopeTheme({
        encrypt: {
          config: {
            // 这会加密整个 guide 目录，并且两个密码都是可用的
            "/guide/": ["1234", "5678"],
            // 这只会加密 config/page.html
            // "/config/page.html": "1234",
          },
        },
      }),
      plugins: ['@vuepress/back-to-top']
  }