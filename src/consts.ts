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

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

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
		'How to use': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
			{ text: 'Page 3', link: 'en/page-3' }
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
		'': [{ text: 'Page 5', link: 'en/page-4' }]
	},
	zh: {
		如何使用: [
			{ text: 'Docker', link: 'zh/usage/docker' },
			{ text: 'Linux', link: 'zh/usage/linux' },
			{ text: 'macOS', link: 'zh/usage/macos' },
			{ text: 'Windows', link: 'zh/usage/windows' },
			{ text: 'QTS', link: 'zh/usage/qts' },
			{ text: 'Synology', link: 'zh/usage/synology' }
		]
	}
}
