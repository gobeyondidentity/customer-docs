/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    {
      type: "category",
      label: "Architecture",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "architecture/architecture",
      },
      items: [
        "architecture/overview",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: true,
      collapsible: false,
      link: {
        type: "doc",
        id: "getting-started/getting-started",
      },
      items: [
        {
          type: "doc",
          id: "getting-started/getting-started-guide",
          label: "Device360 system requirements",
        },  
        {
          type: "doc",
          id: "getting-started/system-requirements",
          label: "System requirements",
        },  
      ],
    },
    {
      type: "category",
      label: "Authentication",
      collapsed: true,
      collapsible: false,
      link: {
        type: "doc",
        id: "authentication/authentication",
      },
      items: [
        "authentication/authentication-guide",
      ],
    },
    {
      type: "category",
      label: "How-to Guides",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "how-to/how-to",
      },
      items: [
        "how-to/how-to-guide",
      ],
    },
    {
      type: "category",
      label: "Devices",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "devices/devices",
      },
      items: [
        {
          type: "doc",
          id: "devices/device360",
          label: "Device360",
        },  
        {
          type: "doc",
          id: "devices/adding-devices",
          label: "Add a device",
        },  
        {
          type: "doc",
          id: "devices/analyze-devices",
          label: "Analyze device posture",
        },  
        {
          type: "doc",
          id: "devices/enroll-devices",
          label: "Enroll a device",
        },  
        {
          type: "doc",
          id: "devices/renaming-devices",
          label: "Rename a device",
        },  
        {
          type: "doc",
          id: "devices/deleting-devices",
          label: "Delete a device",
        },  
        {
          type: "doc",
          id: "devices/running-device-queries",
          label: "Run a device query",
        },  
        {
          type: "doc",
          id: "devices/viewing-query-status",
          label: "View query status",
        },  
        {
          type: "doc",
          id: "devices/viewing-query-results",
          label: "View query results",
        },  
        ],
       },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "integrations/integrations",
      },
      items: [
        "integrations/integration-guide",
      ],
    },
    {
      type: "category",
      label: "Reporting",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "reporting/reporting",
      },
      items: [
        "reporting/reporting-guide",
      ],
    },
    {
      type: "category",
      label: "Users",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "users/users",
      },
      items: [
        "users/users-guide",
      ],
    },
    {
      type: "category",
      label: "Security",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "security/security",
      },
      items: [
        "security/security-guide",
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
          type: "link",
          label: "Service Status",
          href: "https://status.beyondidentity.com/",
        },
      ],
    },
  ],

  contributorGuideSidebar: [
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
