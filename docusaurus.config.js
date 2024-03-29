// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Beyond Identity Next Generation Docs",
  tagline: "Beyond Identity will be releasing a new, consolidated admin experience that incorporates our existing Secure Workforce product with two new products, Device360 and our Next Gen SSO.",
  url: "https://docs.beyondidentity.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gobeyondidentity", // The GitHub org/user name.
  projectName: "customer-docs", // The repo name.
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
    'docusaurus-theme-redoc',
  ],
  staticDirectories: ['static'],

  presets: [
    [
      'docusaurus-preset-classic',
      {
        gtag: {
          trackingID: 'GTM-K3TCQSV',
          anonymizeIP: false,
        },
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
          path: 'docs',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/gobeyondidentity/customer-docs/edit/main',
          versions: {
            current: {
              label: "Device360",
              path: "",
            },
            v0: {
              label: "Secure Work API",
              path: "v0",
            },
          },
          lastVersion: "current",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      'redocusaurus',
      {
        id: "apiv0",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v0/openapi.yaml',
            url: 'api/v0/openapi.yaml',
            route: 'api/v0',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#5077c5',
        },
      },
    ],
    [
      'redocusaurus',
      {
        id: "apiv0-events",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v0/events.json',
            url: 'api/v0/events.json',
            route: 'api/events/v0',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#5077c5',
        },
      },
    ],
    [
      'redocusaurus',
      {
        id: "apiv1",
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'static/api/v1/openapi.yaml',
            url: 'api/v1/openapi.yaml',
            route: 'api/v1',
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
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    ['@grnet/docusaurus-terminology', {
      termsDir: './docs/terms',
      docsDir: './docs/',
      glossaryFilepath: './docs/glossary.mdx'
    }],
    // "@chatwoot/docusaurus-plugin",
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   {
    //     indexDocs: true,
    //     indexBlog: false,
    //     indexPages: true,
    //     language: "en",
    //     hashed: true,
    //   },
    // ],
  ],
  scripts: [
    {
      src:
        'https://cdn.optimizely.com/js/22297341556.js',
      async: false,
    },
    {
      src:
        '/js/loadtags.js',
      async: true,
    },
  ],
  themeConfig:
    ({
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        }
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      metadata: [
        { property: 'og:description', content: 'Customer Docs for passwordless authentication' },
        { property: 'og:image', content: '/img/og_image.jpg' },
        { name: 'twitter:card', content: 'Beyond Identity Customer Docs' }
      ],
      navbar: {
        logo: {
          alt: 'Beyond Identity Logo',
          src: 'img/docs-logo.svg',
          className: 'header-logo',
        },
        items: [
          // {
          //   type: 'dropdown',
          //   label: 'REST API',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'v1 (unreleased)',
          //       to: '/api/v1',
          //     },
          //     {
          //       label: 'v0',
          //       to: '/api/v0',
          //     },
          //   ],
          // },
          { to: "/docs/release-notes", label: "Release Notes", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownItemsBefore: [],
            dropdownActiveClassDisabled: true,
          },

          // {
          //   href: "https://www.beyondidentity.com/developers/signup",
          //   label: "Signup",
          //   position: 'right',
          // },
          // {
          //   type: 'dropdown',
          //   label: 'Login',
          //   position: 'right',
          //   items: [
          //     {
          //       href: "https://console-us.beyondidentity.com/login",
          //       label: "Login-US",
          //     },
          //     {
          //       href: "https://console-eu.beyondidentity.com/login",
          //       label: "Login-EU",
          //     },
          //   ],
          // },
/*          {
            href: "https://join.slack.com/t/byndid/shared_invite/zt-1anns8n83-NQX4JvW7coi9dksADxgeBQ",
            label: "Join Slack",
            position: "right",
          },
*/          
        ],
      },
      footer: {
        style: 'dark',
        
        copyright: `© ${new Date().getFullYear()} Beyond Identity&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="https://www.beyondidentity.com/docs/terms-legal">Terms and Conditions</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dart','gradle','http','kotlin','swift'],
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
      },
      hubspot: {
        accountId: "7364297",
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '4P4Q3C985L',

        // Public API key: it is safe to commit it
        apiKey: 'bbddcf64f82147a7adaa021dd3e7f88b',

        indexName: 'docs.beyondidentity.com',

        // Optional: see doc section below
        contextualSearch: false,

        // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // // Optional: Algolia search parameters
        searchParameters: {
          facetFilters: [],
        },

        // // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',

      },

      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     '👋 We\'re working on a new doc site.  <a rel="noopener noreferrer" href="/docs/"><b>Check it out!</b></a>&nbsp;&nbsp;Go back to <a href="/docs/v1/introduction">v1</a>.',
      //   backgroundColor: '#b9c5e7',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
    }),
};

module.exports = config;
