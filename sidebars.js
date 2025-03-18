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
      items: [
        // "introduction/getting-started", 
        // "introduction/faq"
      ],
    },
    // {
    //   type: "category",
    //   label: "Platform",
    //   collapsed: false,
    //   collapsible: true,
    //   link: {
    //     type: "doc",
    //     id: "product-guides/product-guides",
    //   },
    //   items: [
    //     "product-guides/access360",
    //     // "product-guides/device360",
    //     "product-guides/zero-trust-authentication",
    //     "product-guides/secure-sso",
    //   ],
    // },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "integrations/integrations",
      },
      items: 
            ["integrations/crowdstrike",
            "integrations/intune",
            "integrations/jamf",
              {
              type: "category",
              label: "SIEM Guides",
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "integrations/siem-guides/siem-guides",
              },
              items: [
                "integrations/siem-guides/datadog", 
                // "integrations/siem-guides/", 
                // "integrations/siem-guides/", 
                // "integrations/siem-guides/",
                // "integrations/siem-guides/"
                  ],
              },]
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
          "directory/roles",
          // {
          //   type: "category",
          //   label: "Directory Integrations",
          //   collapsed: true,
          //   collapsible: true,
          //   link: {
          //     type: "doc",
          //     id: "directory/directory-integrations/directory-integrations",
          //   },
          //   items: [
          //     "directory/directory-integrations/directory-integrations-generic-scim",
          //     "directory/directory-integrations/directory-integrations-okta",
          //   ],
          // },
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
      label: "Access Control",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "access-control/access-control",
      },
      items: [
        // "access-control/authentication-methods",
        {
          type: "category",
          label: "Applications",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "access-control/applications/applications",
          },
          items: [
            "access-control/applications/generic-scim", 
            "access-control/applications/microsoft-eam", 
            "access-control/applications/okta", 
            "access-control/applications/onelogin",
            "access-control/applications/wsfed"
              ],
       },
       {
        type: "category",
        label: "Identity Providers",
        collapsed: true,
        collapsible: true,
        link: {
          type: "doc",
          id: "access-control/identity-providers/identity-providers",
        },
        items: [
          "access-control/identity-providers/generic-oidc"],
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
        "tools/branding"],
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
      items: ["release-notes/endpoint", 
        // "release-notes/console"
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
          type: "link",
          label: "Beyond Identity API",
          href: "/api/v1",
        },
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "resources/resources",
      },
      items: [
        "resources/os-support",
        "resources/pa-support",
        "resources/proxy-end-user",
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
      collapsed: true,
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
