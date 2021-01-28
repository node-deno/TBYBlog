const nav = require("./config/nav");
const sidebar = require("./config/sidebar");

module.exports = {
  title: "TBYBlog",
  description: "人生除了生死  其他都是擦伤",
  theme: "reco",
  base: "", //在服务器哪个路径下就配置什么路径，如果在根路径下啥都不用配置
  // base: '/TBYBlog/',
  themeConfig: {
    // 这个主题是引用第三方的主题，这个主题有两种模式一种是普通模式，另一种是博客模式，在config.js的themeConfig中设置  type:'blog'即可
    type: "blog",

    // nav左上角的logo
    logo: "/images/faceImg.png",

    // 头像设置
    authorAvatar: "/images/faceImg.png",

    // 导航栏顶部进行显示
    nav: [
      { text: "时间轴", link: "/timeline/", icon: "reco-date" },
      {
        text: "github",
        link: "https://github.com/node-deno/TBYBlog",
        icon: "reco-github",
      },
    ],

    // 侧边栏的配置
    sidebar,

    // 侧边栏是否打开
    sidebarDepth: "auto",

    // 博客配置（这个是在nav导航栏的顶部进行显示）
    // blogConfig: {
    // 	category: {
    // 		location: 1,     // 在导航栏菜单中所占的位置，默认2
    // 		text: '文章分类' // 默认文案 “分类”
    // 	},
    // 	tag: {
    // 		location: 5,     // 在导航栏菜单中所占的位置，默认5
    // 		text: 'Tag'      // 默认文案 “标签”
    // 	}
    // },

    // 增加友情链接
    friendLink: [
      {
		title: '索洪波的博客',
		desc:'分享前端相关知识技巧、原创html特效！',
		logo:'https://suohb.com/images/logo.jpg',
		link:'https://suohb.com/'
      },
    ],

     // 备案
     record: '豫ICP备2021001417号-1',
     recordLink: 'https://beian.miit.gov.cn/',
    //  cyberSecurityRecord: '公安部备案文案',
    //  cyberSecurityLink: '公安部备案指向链接',
     // 项目开始时间，只填写年份
     startYear: '2017'
  },
  author: "TBY",

  // 移动端优化设置
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "node-deno",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
};
