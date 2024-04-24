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
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
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
          path: 'docs',
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/gobeyondidentity/customer-docs/edit/main',
          versions: {
            current: {
              label: "Next Gen",
              path: "",
            },
            v0: {
              label: "Secure Workforce API",
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
    require.resolve("@easyops-cn/docusaurus-search-local"),
  ],
  scripts: [],
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
          { to: "/docs/release-notes", label: "Release Notes", position: "left" },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownItemsBefore: [],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
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
    }),
};

module.exports = config;
