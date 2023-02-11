import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
	{ text: '主页', icon: 'home', link: '/' },
	{ text: '如何使用', icon: 'fa-solid fa-palette', link: '/usage/' },
	{ text: '常见问题', icon: 'fa-solid fa-circle-question', link: '/faq/' },
	{ text: '需求墙', icon: 'fa-solid fa-circle-plus', link: '/roadmap/' }
])
