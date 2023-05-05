import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), preact(), mdx()],
	site: `https://serverbee.app/`
})
