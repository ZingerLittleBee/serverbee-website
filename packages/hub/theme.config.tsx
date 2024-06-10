import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
  project: {
    link: 'https://github.com/ZingerLittleBee/server_bee-backend',
  },
  chat: {
    link: 'https://discord.gg/AM3rC32CC8',
  },
  docsRepositoryBase: 'https://github.com/ZingerLittleBee/serverbee-website/tree/main/packages/hub',
  footer: {
    text: '2024 © ServerBee',
  },
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: 'zh-CN', text: '中文' },
    ]
}

export default config
