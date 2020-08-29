const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
	title: 'TBY-VuePressDemo',
	description: '我们借助VuePress可以快速的搭建属于自己的博客，并且可以直接放在github的二级域名上，不需要我们花费一分钱搭建一个静态资源的网站',
	theme: 'reco',
	base: '/vuepress-project/',
	themeConfig: {
		// 这个主题是引用第三方的主题，这个主题有两种模式一种是普通模式，另一种是博客模式，在config.js的themeConfig中设置  type:'blog'即可
		type: 'blog',

		// nav左上角的logo
		logo: '/images/logo.png',

		// 头像设置
		authorAvatar: '/images/faceImg.jpg',

		// 导航栏顶部进行显示
		nav: [
			{ text: '时间轴', link: '/timeline/', icon: 'reco-date' },
			{ text: 'github', link: 'https://github.com/node-deno/vuepress-project', icon: 'reco-github' }
		],

		// 侧边栏的配置
		sidebar,

		// 侧边栏是否打开
		sidebarDepth: 'auto',
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


	},
	author: 'TBY',

	// 移动端优化设置
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "node-deno", content: "width=device-width,initial-scale=1,user-scalable=no" }]
	]
}