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
		{
			icon: 'info',
			text: '已知问题',
			prefix: 'issue/',
			link: 'issue/',
			children: 'structure'
		},
		{
			icon: 'add',
			text: '需求墙',
			prefix: 'roadmap/',
			link: 'roadmap/',
			children: 'structure'
		},
		{
			icon: 'call',
			text: '联系我们',
			prefix: 'contact/',
			link: 'contact/',
			children: 'structure'
		},
		{
			icon: 'preview',
			text: '隐私政策',
			prefix: 'privacy/',
			link: 'privacy/',
			children: 'structure'
		},
	]
})
