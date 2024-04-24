/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    {
      type: 'link',
      label: 'Home',
      href: '/docs',
    },
    {
      type: "category",
      label: "Introduction",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "introduction/introduction",
      },
      items: [
        "introduction/getting-started",
        "introduction/faq",
      ],
    },
    {
      type: "category",
      label: "Product Guides",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "product-guides/product-guides",
      },
      items: [
        "product-guides/device360",
        "product-guides/secure-access",
        "product-guides/secure-work",
      ],
    },
    {
      type: "category",
      label: "Directory",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "directory/directory",
      },
      items: [
        "directory/identities",
        "directory/groups",
        {
          type: "category",
          label: "Directory Integrations",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "directory/directory-integrations/directory-integrations",
          },
          items: [
            "directory/directory-integrations/directory-integrations-generic-scim",
            "directory/directory-integrations/directory-integrations-okta"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Inventory",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "inventory/inventory",
      },
      items: [
        "inventory/devices",
        "inventory/device-query",
      ],
    },
    {
      type: "category",
      label: "Deployment",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "deployment/deployment",
      },
      items: [
        "deployment/authenticator-set-up",
        "deployment/branding",
      ],
    },
    {
      type: "category",
      label: "Auth & SSO",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "auth-and-sso/auth-and-sso",
      },
      items: [
        {
          type: "category",
          label: "Identity Providers",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "auth-and-sso/identity-providers/identity-providers",
          },
          items: [
            "auth-and-sso/identity-providers/generic-oidc",
          ],
        },
        {
          type: "category",
          label: "Product Integration Guides",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "auth-and-sso/product-integration-guides/product-integration-guides",
          },
          items: [
            "auth-and-sso/product-integration-guides/okta",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "tools/tools",
      },
      items: [
        "tools/policy",
      ],
    },
    {
      type: "category",
      label: "Release Notes",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "release-notes/release-notes",
      },
      items: [
        "release-notes/endpoint",
        "release-notes/console",
      ],
    },
    {
      type: "category",
      label: "API Reference",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "api-reference/api-reference",
      },
      items: [
        {
          type: 'link',
          label: 'Beyond Identity API',
          href: '/api/v1',
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "resources/resources",
      },
      items: [
        "glossary",
        {
          type: "doc",
          id: "contribute/contribute",
          label: "Contributor Guide",
        },
        {
          type: "link",
          label: "Service Status",
          href: "https://status.beyondidentity.com/",
        },
      ],
    },
  ],

  contributorGuideSidebar: [
    {
      type: "doc",
      id: "welcome",
      label: "<- Back to main docs",
    },
    {
      type: "html",
      value: "<hr>",
    },
    {
      type: "category",
      label: "Contribute",
      collapsible: false,
      collapsed: false,
      link: {
        type: "doc",
        id: "contribute/contribute",
      },
      items: [
        "contribute/when-to-contribute",
        "contribute/contribute-get-started",
        "contribute/site-organization-and-files",
        "contribute/docs-site-branches",
        "contribute/best-practices",
        {
          type: "category",
          label: "Edit content",
          collapsed: false,
          collapsible: true,
          items: [
            {
              type: "doc",
              id: "contribute/edit-content/minor-changes",
              label: "Minor changes",
            },
            {
              type: "doc",
              id: "contribute/edit-content/significant-changes",
              label: "Significant changes",
            },
          ],
        },
        "contribute/add-new-topic",
        "contribute/create-pull-request",
      ],
    },
    "contribute/markdown-reference",
    "contribute/style-guide",
    "contribute/release-notes-guide",
  ],
};

module.exports = sidebars;
