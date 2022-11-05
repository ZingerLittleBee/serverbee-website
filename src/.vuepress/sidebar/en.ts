import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
	'/': [
		'',
		{
			icon: 'discover',
			text: '如何使用',
			prefix: 'usage/',
			link: 'usage/',
			children: 'structure'
		},
		'slides'
	]
})
