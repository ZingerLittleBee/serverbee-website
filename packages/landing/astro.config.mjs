import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), preact(), mdx(), partytown(
      {
        config: {
          forward: ["dataLayer.push"],
        },
      }
  )],
  site: `https://serverbee.app/`
});
