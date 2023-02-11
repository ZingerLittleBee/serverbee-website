import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
	'/': [
		{
			icon: 'home',
			text: '主页',
			link: '/',
			children: [],
		},
		{
			icon: 'fa-solid fa-palette',
			text: '如何使用',
			prefix: 'usage/',
			link: 'usage/',
			children: 'structure'
		},
		{
			icon: 'fa-solid fa-circle-question',
			text: '常见问题',
			prefix: 'faq/',
			link: 'faq/',
			children: 'structure'
		},
		{
			icon: 'fa-solid fa-circle-exclamation',
			text: '已知问题',
			prefix: 'issue/',
			link: 'issue/',
			children: 'structure'
		},
		{
			icon: 'fa-solid fa-circle-plus',
			text: '需求墙',
			prefix: 'roadmap/',
			link: 'roadmap/',
			children: 'structure'
		},
		{
			icon: 'fa-solid fa-phone',
			text: '联系我们',
			prefix: 'contact/',
			link: 'contact/',
			children: 'structure'
		},
		{
			icon: 'fa-solid fa-eye',
			text: '隐私政策',
			prefix: 'privacy/',
			link: 'privacy/',
			children: 'structure'
		},
	]
})
