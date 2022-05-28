const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    base: '/fansMedalHelperVersion/',
    lang: "zh-CN",
    title: "B站粉丝牌助手文档",
    description: "B站粉丝牌助手文档",
    head: [
        [
            'link', { rel: 'icon', href: '/images/logo.jpg' }
        ],
        ['script', { src: "https://cdn.jsdelivr.net/gh/XiaoMiku01/fansMedalHelperVersion@master/docs/.vuepress/public/js/live2d.js" }]
    ],
    theme: defaultTheme({
        title: "B站粉丝牌助手文档",
        description: "B站粉丝牌助手文档",
        logo: '/images/logo.jpg',
        navbar: [
            { text: '首页', link: '/'},
            { text: '指南',link:'/guide/', children: [
                {
                  text: '项目介绍',
                  link: '/guide/',
                  activeMatch: '/guide/'

                },
                {
                    text: '部署方式',
                    children: [{
                        text: '本地/服务器部署',
                        link: '/guide/location',
      
                      },
                      {
                        text: '云函数部署',
                        link: '/guide/cloud',
                      },],
                  },
              ]},
              { text: '更新日志', link: '/changelog/'},
        ],
        repo: 'XiaoMiku01/fansMedalHelper',
        docsRepo: 'https://github.com/XiaoMiku01/fansMedalHelperVersion',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        editLink: true,
        editLinkText: "在 GitHub 上编辑此页",
        contributorsText: '文档贡献者'
    }),
  }
