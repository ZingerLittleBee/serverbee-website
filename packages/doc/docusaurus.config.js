// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: 'ServerBee Document',
  favicon: 'img/favicon.png',

  url: 'https://docs.serverbee.app',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ZingerLittleBee',
  projectName: 'serverbee-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh',
    locales: ['zh','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-5BLSVZQP00',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'serverbee, blog, document, probes, terminal, monitor, cpu, memory, disk, network, process, docker, ios, app, backend, open source'}],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'ServerBee',
        logo: {
          alt: 'ServerBee Logo',
          src: 'img/logo.png',
          // href: 'https://serverbee.app',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'startupSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ZingerLittleBee/server_bee-backend',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Github Projects',
            items: [
              {
                label: 'serverbee-website',
                href: 'https://github.com/ZingerLittleBee/serverbee-website',
              },
              {
                label: 'server_bee-backend',
                href: 'https://github.com/ZingerLittleBee/server_bee-backend',
              },
              {
                label: 'ServerMilk',
                href: 'https://github.com/ZingerLittleBee/ServerMilk',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/serverbee',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/AM3rC32CC8',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/zinger_bee',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ZingerLittleBee',
              },
              {
                label: 'Official Website',
                href: 'https://serverbee.app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ServerBee.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'nginx'],
      },
      algolia: {
        appId: '2XHJWOR8EY',

        apiKey: 'b629626742a1c0cc3b28bb3d77f2e7e0',

        indexName: 'serverbee',

        contextualSearch: true,
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};

module.exports = config;
