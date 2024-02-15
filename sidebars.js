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
      type: 'link',
      label: '🔗 REST API',
      href: '/api/v1',
    },
    {
      type: "category",
      label: "Quick Starts",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "quickstarts/quickstart",
      },
      items: [
        "quickstarts/device360-qs",
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsed: false,
      collapsible: false,
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
      label: "Installation",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "installation/installation",
      },
      items: [
        "installation/install-authenticator",
        "installation/update-authenticator",
      ],
    },
    {
      type: "category",
      label: "Inventory",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "inventory/inventory",
      },
      items: [
        "inventory/device-inventory",
        "inventory/device-query",
      ],
    },
    {
      type: "category",
      label: "Release Notes",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "release-notes/release-notes",
      },
      items: [
        "release-notes/endpoint-release-notes",
        "release-notes/cloud-release-notes",
      ],
    },

     {
      type: "category",
      label: "Resources",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "resources",
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
          collapsed: true,
          collapsible: false,
          items: [
            {
              type: "doc",
              id: "contribute/edit-content-minor-changes",
              label: "Minor changes",
            },
            {
              type: "doc",
              id: "contribute/edit-content-significant-changes",
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
