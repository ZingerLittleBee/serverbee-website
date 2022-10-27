// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	app: {
		head: {
			charset: 'utf-8',
			viewport:
				'width=device-width,user-scalable=no,initial-scale=1.0,  maximum-scale=1.0,minimum-scale=1.0',
			title: 'ServerBee',
			link: [
				{
					rel: 'icon',
					href: '/serverbee-logo.png'
				}
			],
			meta: [
				{ name: 'application-name', content: 'ServerBee' },
				{ name: 'description', content: '掌控你所有 PC、服务器的状态' },
				{
					name: 'keywords',
					content:
						'监控服务器, ios, app, 下载, 探针, mac, windows, linux, server, vps, 高性能, 开源, 跨平台, 系统状态, 服务器状态, CPU 核心, 系统负载, 内存用量, 磁盘读写, 网卡 IO, 网卡流量, 进程管理, SSH 终端.'
				}
			],
			style: [
				{
					children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2{margin:0}h1,h2{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
				}
			]
		}
	},
	modules: ['@unocss/nuxt'],
	unocss: {
		uno: true,
		attributify: true,
		icons: true,
		shortcuts: [],
		rules: []
	}
})
