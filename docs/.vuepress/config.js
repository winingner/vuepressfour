module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        logo: '/assets/img/tu.png',
        nav: [
            { text: '主页', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' }

            // {
            //     text: 'Languages',
            //     items: [
            //       { text: 'Chinese', link: '/language/chinese' },
            //       { text: 'Japanese', link: '/language/japanese' }
            //     ]
            //   }

            // {
            //     text: 'Languages',
            //     items: [
            //       { text: 'Group1', items: [
            //         { text: 'Home', link: '/' },
            //         { text: 'Guide', link: '/guide/' },
            //         { text: 'External', link: 'https://google.com' }
            //       ] },
            //       { text: 'Group2', items: [/* 66 */] }
            //     ]
            //   }

          ],
        //   navbar: false,
        sidebar: [
            ['/','首页'],
            '/page-a',
            ['/page-b', 'Explicit link text']
          ],
        //   displayAllHeaders: true ,

      }
  }