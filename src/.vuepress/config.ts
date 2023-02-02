import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import theme from './theme.js'
import { getDirname, path } from "@vuepress/utils";

// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
	base: '/',

	locales: {
		'/': {
			lang: 'zh-CN',
			title: 'ServerBee',
			description: '掌控你所有 PC、服务器的状态.'
		}
		// '/en/': {
		// 	lang: 'en-US',
		// 	title: 'ServerBee',
		// 	description: 'Control the status of all your PCs and servers.'
		// }
	},

	theme,

	shouldPrefetch: false,

	alias: {
		"@DesktopDownload": path.resolve(__dirname, "components/DesktopDownload.vue"),
		"@CliDownload": path.resolve(__dirname, "components/CliDownload.vue"),
		"@ServerMilkLogo": path.resolve(__dirname, "components/ServerMilkLogo.vue"),
	},
	plugins: [
		registerComponentsPlugin({
		}),
	],

})
