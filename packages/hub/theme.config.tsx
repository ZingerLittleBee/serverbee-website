import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

// @ts-ignore
const config: DocsThemeConfig = {
  logo:  <><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-gantt-chart">
      <rect width="18" height="18" x="3" y="3" rx="2"/>
      <path d="M9 8h7"/>
      <path d="M8 12h6"/>
      <path d="M11 16h5"/>
    </svg>
    <span style={{marginLeft: '.4em', fontWeight: 800}}>
        ServerBee
      </span>
  </>,
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="ServerBee" />
            <meta property="og:description" content="ServerBee is an efficient tool that supports monitoring, managing, and controlling multiple platforms, systems, and terminals." />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – ServerBee',
            description: 'ServerBee is an efficient tool that supports monitoring, managing, and controlling multiple platforms, systems, and terminals.',
        }
    },
  project: {
    link: 'https://github.com/ZingerLittleBee/server_bee-backend',
  },
  chat: {
    link: 'https://discord.gg/AM3rC32CC8',
  },
  docsRepositoryBase: 'https://github.com/ZingerLittleBee/serverbee-website/tree/main/packages/hub',
  // @ts-ignore
    footer: false,
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: 'zh-CN', text: '中文' },
    ]
}

export default config
