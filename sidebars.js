/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
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
      items: [],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "integrations/integrations",
      },
      items: [
        "integrations/crowdstrike",
        "integrations/intune",
        "integrations/jamf",
        {
          type: "category",
          label: "Logs",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "integrations/logs/logs",
          },
          items: [
            "integrations/logs/mdm-edr",
            "integrations/logs/siem",
          ],
        },
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
        {
          type: "category",
          label: "Realms",
          collapsed: true,
          collapsible: true,
          items: [
            "directory/realms/work-realms",
            "directory/realms/customer-realms",
          ],
        },
        {
          type: "category",
          label: "Manage Identities",
          collapsed: true,
          collapsible: true,
          items: [
            "directory/manage-users/add-users",
            "directory/manage-users/delete-users",
            "directory/manage-users/suspend-users",
            "directory/manage-users/revoke-user-passkey",
          ],
        },
        "directory/groups",
        "directory/devices",
        "directory/roles",
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
      items: [
        "policy/rules",
        "policy/credential-enrollment",
      ],
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
      items: [
        "reporting/device-query",
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
            "access-control/applications/wsfed",
            "access-control/applications/realitycheck-for-zoom",
            "access-control/applications/realitycheck-for-teams",
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
            "access-control/identity-providers/generic-oidc",
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
        "tools/branding",
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
      label: "End User Guides",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "end-user-guides/end-user-guides",
      },
      items: [
        "end-user-guides/proxy-end-user",
        "end-user-guides/self-enrollment",
      ],
    },
    {
      type: "category",
      label: "Resources",
      collapsed: false,
      collapsible: true,
      link: {
        type: "doc",
        id: "resources",
      },
      items: [
        "resources/os-support",
        "resources/pa-support",
        {
          type: "category",
          label: "Platform Information",
          link: {
            type: "doc",
            id: "resources/platform-information/index",
          },
          items: [
            "resources/platform-information/session-behavior",
          ],
        },
        {
          type: "category",
          label: "Platform Authenticator",
          link: {
            type: "doc",
            id: "resources/platform-authenticator/index",
          },
          items: [
            "resources/platform-authenticator/kandji",
          ],
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
