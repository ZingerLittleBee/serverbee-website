import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
	'/en/': [
		'',
		{
			icon: 'discover',
			text: 'How to use',
			prefix: 'usage/',
			link: 'usage/',
			children: 'structure'
		},
		{
			icon: 'question',
			text: 'FAQ',
			prefix: 'faq/',
			link: 'faq/',
			children: 'structure'
		},
	]
})
