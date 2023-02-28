// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Beyond Identity Documentation',
  tagline: '',
  url: 'https://docs.beyondidentity.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.png',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gobeyondidentitybeyond', // Usually your GitHub org/user name.
  projectName: 'customer-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/gobeyondidentity/customer-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gobeyondidentity/customer-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: 'Beyond Identity',
        logo: {
          alt: 'Beyond Identity Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Documentation',
            type: 'dropdown',
            items: [

              {
                to: '/docs/secure-workforce-guides',
                label: 'Secure Workforce',
              },
              {
                to: '/docs/secure-devops',
                label: 'Secure DevOps',
              },
              {
                to: '/customer',
                label: 'Secure Customer',
              },
            ],
          },          {
            to: '/docs/integration-guides',
            label: 'Integration Guides',
            
          },
          {
            type: 'doc',
            position: 'left',
            docId: 'faq',
            label: 'FAQs',
          }, 
          {
            type: 'doc',
            position: 'left',
            docId: 'get-support',
            label: 'Support',
          }, 
          // {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `Copyright © ${new Date().getFullYear()} Beyond Identity`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      'plugin-image-zoom'
    ],
  themes: [
    '@docusaurus/theme-live-codeblock', 
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],


};

module.exports = config;
