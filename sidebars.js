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
      link: { type: "doc", id: "integrations/integrations" },
      items: [
        {
          type: "category",
          label: "CrowdStrike",
          collapsed: true,
          collapsible: true,
          link: {
            type: "generated-index",
            title: "CrowdStrike",
            slug: "/tools/integrations/crowdstrike",
            description: "Beyond Identity integrations with CrowdStrike.",
          },
          items: [
            "integrations/crowdstrike/crowdstrike",
            "integrations/crowdstrike/crowdstrike-itdr",
          ],
        },
        "integrations/intune",
        "integrations/jamf",
        {
          type: "category",
          label: "Logs",
          collapsed: true,
          collapsible: true,
          link: { type: "doc", id: "integrations/logs/logs" },
          items: ["integrations/logs/mdm-edr", "integrations/logs/siem"],
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
            "directory/manage-identities/add-users",
            "directory/manage-identities/delete-users",
            "directory/manage-identities/suspend-users",
            "directory/manage-identities/revoke-user-passkey",
          ],
        },
        {
          type: "category",
          label: "Role Management",
          collapsed: true,
          collapsible: true,
          items: [
            "directory/role-management/create-roles",
            "directory/role-management/delete-roles",
            "directory/role-management/identities-roles",
            "directory/role-management/group-roles",
          ],
        },
        "directory/groups",
        "directory/devices",
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
      items: ["policy/rules", "policy/credential-enrollment"],
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
            "access-control/applications/generic-saml",
            "access-control/applications/saml-methods",
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
      label: "Authentication Experience",
      collapsed: false,
      collapsible: true,
      items: [
        "authentication-experience/roaming-authentication",
        "authentication-experience/roaming-authentication-config",
      ],
    },
    {
      type: "category",
      label: "Passkey Lifecycle",
      collapsed: false,
      items: ["passkey-lifecycle/how-passkeys-are-handled"],
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
      items: ["tools/branding", "tools/tenant-logo"],
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
      items: ["release-notes/endpoint"],
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
        "end-user-guides/icloud-private-relay",
        "end-user-guides/safari-extension",
        {
          type: "category",
          label: "Extend Passkey Credential to a Device",
          collapsed: true,
          collapsible: true,
          items: [
            "end-user-guides/extend-passkey-credential/extend-credential-android",
            "end-user-guides/extend-passkey-credential/extend-credential-ios",
            "end-user-guides/extend-passkey-credential/extend-credential-macos",
            "end-user-guides/extend-passkey-credential/extend-credential-windows",
          ],
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
          items: ["resources/platform-information/session-behavior"],
        },
        {
          type: "category",
          label: "Announcements",
          link: {
            type: "doc",
            id: "resources/announcements/index",
          },
          items: ["resources/announcements/chrome-browser"],
        },
        {
          type: "category",
          label: "Platform Authenticator",
          link: {
            type: "doc",
            id: "resources/platform-authenticator/index",
          },
          items: ["resources/platform-authenticator/kandji"],
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
