// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');



/** @type {import('@docusaurus/types').Config} */
const config = {

  plugins: [
    'plugin-image-zoom',
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
themes: [
  '@docusaurus/theme-live-codeblock', 
  'docusaurus-theme-redoc',
],


  title: 'Beyond Identity Documentation',
  tagline: 'Secure Workforce protects and verifies corporate identities and their devices providing for a secure and trustworthy development process.',
  url: 'https://gobeyondidentitybeyond.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
//  i18n: {
//    defaultLocale: 'en',
//    locales: ['en'],
//  },
customFields: {
  // Put your custom environment here
  partner: 'partner value',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/gobeyondidentity/customer-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/gobeyondidentity/customer-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        id: "apiv1",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v1.yaml',
            url: 'api/v1.yaml',
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

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: 'Secure Workforce',
        
        logo: {
          alt: 'Beyond Identity Logo',
          src: 'img/logo.png',

        },
        items: [
        /*  {
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
                label: 'Developer Hub',
              },
            ],
          },  */        
          {
            to: '/integration-guides',
            label: 'Integration Guides',
            
          },
          { to: "/api/", label: "Public API", position: "left" },
          {
            label: 'Resources',
            type: 'dropdown',
            items: [

              {
                to: '/faq',
                label: 'FAQs',
              },
              {
                to: '/glossary',
                label: 'Terminology',
              },
              {
                to: '/get-support', //this may need to be a link to the support site instead of a doc 
                label: 'Support Center',
              },
              {
                to: '/release-notes-main',
                label: 'Release Notes 1',
              },
              {
                to: '/blog', 
                label: 'Release Notes 2'
              },
              {
                to: '/release-notes',
                label: 'Release Notes 3',
              }
            ],
          }, 
 
          // {to: '/blog', label: 'Release Notes', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `Copyright © ${new Date().getFullYear()} Beyond Identity`,
      },
//      chatwoot: {
//        websiteToken: "Your website inbox token",
//        baseURL: "https://app.chatwoot.com",  // optional
//        enableInDevelopment: false,  // optional
//        chatwootSettings: {
//          hideMessageBubble: false,
//          position: "left", // This can be left or right
//          locale: "en", // Language to be set
//          useBrowserLanguage: false, // Set widget language from user's browser
//          darkMode: "auto", // [light, auto]
//          type: "expanded_bubble",
//          launcherTitle: "What can I help you find?",
//        }
//      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),



};


module.exports = config;
