import { hopeTheme } from 'vuepress-theme-hope'
import { zhNavbar } from './navbar'
import { zhSidebar } from './sidebar'

export default hopeTheme({
	hostname: 'https://serverbee.app',

	pageInfo: false,
	// author: {
	// 	name: 'ZingerLittleBee',
	// 	url: 'https://github.com/ZingerLittleBee'
	// },
	themeColor: {
		blue: '#2196f3',
		darkPurple: '#BB86FC',
		green: '#3eaf7c',
		red: '#f26d6d',
		orange: '#fb9b5f'
	},

	fullscreen: true,

	backToTop: true,

	iconAssets: 'iconfont',

	logo: '/serverbee-logo.png',

	editLink: false,

	repo: 'ZingerLittleBee/serverbee-website',

	locales: {
		/**
		 * Chinese locale config
		 */
		'/': {
			// navbar
			navbar: zhNavbar,

			// sidebar
			sidebar: zhSidebar,

			displayFooter: false,

			// page meta
			metaLocales: {
				editLink: '在 GitHub 上编辑此页'
			}
		}

		// '/en/': {
		// 	// navbar
		// 	navbar: enNavbar,
		//
		// 	// sidebar
		// 	sidebar: enSidebar,
		//
		// 	footer: 'Default footer',
		//
		// 	displayFooter: true,
		//
		// 	metaLocales: {
		// 		editLink: 'Edit this page on GitHub'
		// 	}
		// }
	},

	plugins: {
		copyCode: {},
		// comment: {
		// 	/**
		// 	 * Using Giscus
		// 	 */
		// 	provider: 'Giscus',
		// 	repo: 'ZingerLittleBee/serverbee-website',
		// 	repoId: 'R_kgDOIUGgBg',
		// 	category: 'General',
		// 	categoryId: 'DIC_kwDOIUGgBs4CSZiQ'
		// },
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			container: true,
			demo: true,
			echarts: true,
			flowchart: true,
			gfm: true,
			imageLazyload: true,
			imageTitle: true,
			imageSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ['ts', 'vue']
			},
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
			},
			stylize: [
				{
					matcher: 'Recommended',
					replacer: ({ tag }) => {
						if (tag === 'em')
							return {
								tag: 'Badge',
								attrs: { type: 'tip' },
								content: 'Recommended'
							}
					}
				}
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true
		},

		pwa: {
			favicon: '/serverbee-logo.png',
			cacheHTML: true,
			cachePic: true,
			appendBase: true,
			apple: {
				icon: '/serverbee-logo.png',
				statusBarColor: 'black'
			},
			msTile: {
				image: '/serverbee-logo.png',
				color: '#ffffff'
			},
			manifest: {
				icons: [
					{
						src: '/serverbee-logo.png',
						sizes: '512x512',
						purpose: 'maskable',
						type: 'image/png'
					},
					{
						src: '/serverbee-logo.png',
						sizes: '192x192',
						purpose: 'maskable',
						type: 'image/png'
					},
					{
						src: '/serverbee-logo.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: '/serverbee-logo.png',
						sizes: '192x192',
						type: 'image/png'
					}
				]
			}
		}
	}
})
