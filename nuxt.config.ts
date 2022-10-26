// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@unocss/nuxt'],
	unocss: {
		uno: true, // enabled `@unocss/preset-uno`
		attributify: true, // enabled `@unocss/preset-attributify`,
		icons: true,
		shortcuts: [],
		rules: []
	}
})
