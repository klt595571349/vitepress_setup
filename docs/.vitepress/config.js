export default {
  title: "xxx", //站点标题
  description: "随笔", //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "jiacheng",
    logo: "/logo.png",
    socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    nav: [
      { text: "博客", link: "/articles/组件库环境搭建" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现1",
          collapsible: true,
          items: [
            {
              text: "组件库环境搭建2",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程3",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },
  },
};
