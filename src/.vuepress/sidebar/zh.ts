import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
	'/': [
		'',
		{
			icon: 'discover',
			text: '如何使用',
			prefix: 'usage/',
			link: 'usage/',
			children: 'structure'
		},
		{
			icon: 'question',
			text: '常见问题',
			prefix: 'faq/',
			link: 'faq/',
			children: 'structure'
		},
	]
})
