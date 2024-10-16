/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    {
      type: "link",
      label: "Home",
      href: "/docs",
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
      items: ["introduction/getting-started", "introduction/faq"],
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
        "product-guides/access360",
        "product-guides/device360",
        "product-guides/zero-trust-authentication",
        "product-guides/secure-sso",
      ],
    },
     {
      type: "category",
      label: "Policy",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "policy/policy",
      },
      items: ["policy/rules"],
    },
    {
      type: "category",
      label: "Reporting",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "reporting/reporting",
      },
      items: ["reporting/device-query"],
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
        "directory/devices",
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
            "directory/directory-integrations/directory-integrations-okta",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Access Control",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "access-control/access-control",
      },
      items: [
        "access-control/roles",
        "access-control/authentication-methods",
        {
          type: "category",
          label: "Applications",
          collapsed: true,
          collapsible: true,
          items: [
            "access-control/applications/beyond-identity-sso",
              ],
       },
       {
        type: "category",
        label: "Identity Providers",
        collapsed: true,
        collapsible: true,
        items: [
          "access-control/identity-providers/generic-oidc", "access-control/identity-providers/okta", "access-control/identity-providers/onelogin"],
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
        "tools/branding",
        {
          type: "category",
          label: "Integrations",
          collapsed: true,
          collapsible: true,
          items: ["tools/integrations/crowdstrike",
            "tools/integrations/jamf",
            ],
       },
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
      items: ["release-notes/endpoint", "release-notes/console"],
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
          type: "link",
          label: "Beyond Identity API",
          href: "/api/v1",
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
