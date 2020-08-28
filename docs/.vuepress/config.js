const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
	title: 'VuePress-demo',
	description: '我们借助VuePress可以快速的搭建属于自己的博客，并且可以直接放在github的二级域名上，不需要我们花费一分钱搭建一个静态资源的网站',
	theme: 'reco',
	base: '/vuepress-project/',
	themeConfig: {
		type: 'blog',
		logo: '/images/logo.png',
		nav,
		sidebar,
		sidebarDepth: 1,
		blogConfig: {
			category: {
				location: 2,     // 在导航栏菜单中所占的位置，默认2
				text: '文章分类' // 默认文案 “分类”
			},
			tag: {
				location: 5,     // 在导航栏菜单中所占的位置，默认5
				text: 'Tag'      // 默认文案 “标签”
			}
		}
	},
	author: 'suohongbo',
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
	]
}