export const SITE = {
	title: 'ServerBee',
	description: 'Your website description.',
	defaultLanguage: 'zh'
} as const

export const OPEN_GRAPH = {
	image: {
		src: '/images/serverbee-logo.png',
		alt: 'ServerBee Logo'
	},
	twitter: 'zinger_bee'
}

export const KNOWN_LANGUAGES = {
	English: 'en',
	简体中文: 'zh'
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const GITHUB_EDIT_URL = `https://github.com/ZingerLittleBee/serverbee-website/tree/main/src/content/docs`

export const COMMUNITY_INVITE_URL = `https://t.me/serverbee`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX'
}

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
	en: {
		'Start 🛫️': [
			{ text: 'Getting Started', link: 'en/starter/getting-started' },
			{ text: 'Deploy vs Web', link: 'en/starter/module' },
			{ text: 'Deploy', link: 'en/starter/deploy' },
			{ text: 'Web', link: 'en/starter/web' },
			{ text: 'Release Notes', link: 'en/starter/changelog' }
		],
		'Guide 🧭': [
			{ text: 'Docker', link: 'en/usage/docker' },
			{ text: 'Linux', link: 'en/usage/linux' },
			{ text: 'macOS', link: 'en/usage/macos' },
			{ text: 'Windows', link: 'en/usage/windows' },
			{ text: 'QTS', link: 'en/usage/qts' },
			{ text: 'Synology', link: 'en/usage/synology' }
		],
		'Question ❓': [
			{ text: 'FAQ', link: 'en/question/faq' },
			{ text: 'Known Issues', link: 'en/question/known-problem' }
		],
		'Future 🌟': [
			{ text: 'Requirement Wall', link: 'en/future/requirement-wall' },
			{ text: 'Roadmap', link: 'en/future/roadmap' }
		],
		'Contact ☎️': [{ text: 'Info', link: 'en/contact/way' }],
		'Policy 📖': [{ text: 'Privacy', link: 'en/policy/privacy' }]
	},
	zh: {
		'起步 🛫️': [
			{ text: '入门指南', link: 'zh/starter/getting-started' },
			{ text: 'Deploy vs Web', link: 'zh/starter/module' },
			{ text: 'Deploy', link: 'zh/starter/deploy' },
			{ text: 'Web', link: 'zh/starter/web' },
			{ text: '发行说明', link: 'zh/starter/changelog' }
		],
		'使用指南 🧭': [
			{ text: 'Docker', link: 'zh/usage/docker' },
			{ text: 'Linux', link: 'zh/usage/linux' },
			{ text: 'macOS', link: 'zh/usage/macos' },
			{ text: 'Windows', link: 'zh/usage/windows' },
			{ text: 'QTS', link: 'zh/usage/qts' },
			{ text: 'Synology', link: 'zh/usage/synology' }
		],
		'问题 ❓': [
			{ text: '常见问题', link: 'zh/question/faq' },
			{ text: '已知问题', link: 'zh/question/known-problem' }
		],
		'发展 🌟': [
			{ text: '需求墙', link: 'zh/future/requirement-wall' },
			{ text: 'Roadmap', link: 'zh/future/roadmap' }
		],
		'联系我们 ☎️': [{ text: '联系方式', link: 'zh/contact/way' }],
		'使用政策 📖': [{ text: '隐私政策', link: 'zh/policy/privacy' }]
	}
}
