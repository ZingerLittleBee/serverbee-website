import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
	base: '/',

	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'ServerBee',
			description: '掌控你所有 PC、服务器的状态.'
		},
		// '/en/': {
		// 	lang: 'en-US',
		// 	title: 'ServerBee',
		// 	description: 'Control the status of all your PCs and servers.'
		// }
	},

	theme,

	shouldPrefetch: false
})
