// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const baseUrl = process.env.BASE_URL ?? '/api';

/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [

    require.resolve("docusaurus-plugin-image-zoom"),

//    'plugin-image-zoom',
//    '@chatwoot/docusaurus-plugin',
//    [
//      require.resolve("@easyops-cn/docusaurus-search-local"),
//      {
//        indexDocs: true,
//        indexBlog: false,
//        indexPages: true,
//        language: "en",
//        hashed: true
//      }
//    ],
  ],
  markdown: {
    mermaid: true,
  },
themes: [
  '@docusaurus/theme-mermaid',
  '@docusaurus/theme-live-codeblock', 
  'docusaurus-theme-redoc',
],


  title: 'Beyond Identity',
  tagline: 'Secure Workforce',
  url: 'https://docs.beyondidentity.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gobeyondidentity', // Usually your GitHub org/user name.
  projectName: 'customer-docs', // Usually your repo name.
  trailingSlash: false,

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
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/obeyondidentity/customer-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        id: "apiv2",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v2.yaml',
            url: 'api/v2.yaml',
            route: 'api',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#5077c5',

        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,

        }
      },
      navbar: {
        title: 'Secure Workforce',
        logo: {
          alt: 'Beyond Identity Logo',
          src: 'img/logo.png',
          href: '/',
        },
        items: [ 
          { to: "/api/", label: "Public API", position: "left" },
          { to: "/release-notes-main", label: "Release Notes", position: "left" },
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `© ${new Date().getFullYear()} Beyond Identity`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
};

module.exports = config;
