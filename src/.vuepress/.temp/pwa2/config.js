import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/Users/zingerbee/Documents/nuxt/serverbee-website/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.120/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/Users/zingerbee/Documents/nuxt/serverbee-website/node_modules/.pnpm/vuepress-plugin-pwa2@2.0.0-beta.120/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
