

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    {
      type: 'category',
      label: 'Welcome',  
      link: {
        type: 'doc',
        id: 'welcome',
      },
      collapsed: true, 
      collapsible: true,      
      items: [ 
        'how-it-works', 
        'sign-in-workflow',
        'supported-platforms',
      ],
    },
    {
      type: 'category',
      label: 'Get Started',  
      link: {
        type: 'doc',
        id: 'get-started/get-started',
      },
      collapsed: true, 
      collapsible: true,      
      items: [ 
        'get-started/create-tenant',
        'get-started/configure-account',
        'get-started/configure-oidc-connection',
        'get-started/set-redirect-uri',
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      collapsed: true,  
      link: {
        type: 'doc',
        id: 'platform/platform',
      },      
      items: [ 
        {
          type: 'category',
          label: 'Admin Console',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'platform/admin-console',
          },      
          items: [ 

            'platform/customize-tenant',
            'platform/manage-roaming-authentication',
            'platform/configure-admin-console-login-options',
            'platform/configure-identity-providers',
            'platform/configure-rbac', 
            'platform/manage-passkeys',
            'platform/revoke-access-to-device', 
            'platform/reset-credentials',
            'platform/delete-tenant',
          ],
        },
        {
          type: 'category',
          label: 'Authenticator',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'platform/platform-authenticator',
          },      
          items: [ 

           // 'platform/manage-authenticator-updates',  what's the difference between this topic and the next one (Manage updates and notifications)?  There is no difference. The next topic is missing A LOT of information, but they are the same. 
            'platform/manage-updates-notifications',
            'platform/configure-shared-credentials-windows-roaming-profile',
            {
              type: 'category',
              label: 'Installation',
              collapsed: true,  
              link: {
                type: 'doc',
                id: 'installation/install-platform-authenticator',
              },      
              items: [ 
                'installation/install-authenticator-on-macos',
                'installation/install-authenticator-on-windows',
                'installation/install-authenticator-on-linux',
              ],
            },
          ],
        },

      ],
    },
    {
      type: 'category',
      label: 'Desktop Login',
      collapsed: true,  
      link: {
        type: 'doc',
        id: 'desktop-login/desktop-login',
      },         
      items: [ 
        'desktop-login/configure-shared-passkeys', 
        'desktop-login/windows-security', 
        'desktop-login/obtain-client-id',   
      ],
    },
    {
      type: 'category',
      label: 'Policies',
      collapsed: true, 
      collapsible: true,   
      link: {
        type: 'doc',
        id: 'policy/policy',
      },      
      items: [ 
        {
          type: 'category',
          label: 'Define a policy',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'policy/define-policy', 
          },      
          items: [ 
            'policy/antivirus-policy',
            'policy/authentication-requirement-policy',

            'policy/build-release-policy',   
            'policy/detect-running-processes',      
            'policy/firewall-policy',
            'policy/jailbroken-ios-policy',
            'policy/limit-number-registered-devices',

            'policy/rooted-android-policy',
            'policy/security-software-policy',
            'policy/threat-signals',
            'policy/set-platform-version-policy',
            'policy/kandji-connection-policy',
            'policy/kandji-mdm-policy',
          ],
        },
        'policy/policy-attribute-library',
        'policy/import-policy',
        'policy/export-policy',
        'policy/view-policy-details',
        'policy/restore-previous-policy-rules',
      ],
    },
    {
      type: 'category',
      label: 'Date & Events',
      collapsed: true,  
      link: {
        type: 'doc',
        id: 'data-events/data-events',
      },         
      items: [ 
        'data-events/export-windows-event-logs', 
        'data-events/collect-local-logs-endpoints', 
        'data-events/view-event-details',
        'data-events/request-access-to-tenant-or-user-data',
        'data-events/risk-reporting',
        'data-events/customer-health-analysis',
      ],
    },
    {
      type: 'category',
      label: 'Integration Guides',
      collapsed: true, 
      collapsible: true,
      link: {
        type: 'doc',
        id: 'integration-guides/integration-guides',
        
      },         
      items: [  
        'integration-guides/okta-oidc',
        {
          type: 'category',
          label: 'CIAM SSO',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/ciam-sso-integrations',

          },      
          items: [ 
            'integration-guides/auth0-ciam',
            'integration-guides/aws-cognito',
            'integration-guides/azure-b2c-ciam',
          ],
        },
        {
          type: 'category',
          label: 'EDR',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/edr-integrations',
          },      
          items: [ 
            'integration-guides/crowdstrike',
            'integration-guides/sentinelone',
          ],
        },
        {
          type: 'category',
          label: 'MDM',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/mdm-integrations',
          },      
          items: [ 
            'integration-guides/jamf',
            'integration-guides/kandji',
            'integration-guides/microsoft-intune',
            'integration-guides/vmware-airwatch',
          ],
        },
        {
          type: 'category',
          label: 'SDO',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/sdo-integrations',
          },      
          items: [ 
            'devops/aws-codecommit',
            'devops/azure-devops',
            'devops/bitbucket',
            'devops/github',
            'devops/gitlab',
          ],
        },
        {
          type: 'category',
          label: 'SIEM',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/siem-integrations',
          },      
          items: [ 
            'integration-guides/cloud-pub-sub',
            'integration-guides/datadog',
            'integration-guides/elastic',
            'integration-guides/snowflake',
            'integration-guides/splunk-cloud',
            'integration-guides/splunk-enterprise',
            'integration-guides/sumologic',
          ],
        },
        {
          type: 'category',
          label: 'VPN',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/vpn-integrations',
          },      
          items: [ 
            'integration-guides/cisco-anyconnect',
          ],
        },
        {
          type: 'category',
          label: 'WiFi',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/wifi-integrations',
          },      
          items: [ 
            'integration-guides/arista',
            'integration-guides/hp-aruba-clearpeass',
            'integration-guides/juniper-mist',
          ],
        },
        {
          type: 'category',
          label: 'Windows Desktop Login',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/windows-desktop-login',
          },      
          items: [ 
            'integration-guides/windows-azure-only',
            'integration-guides/windows-hybrid',
            'integration-guides/windows-on-premises',
          ],
        },
        {
          type: 'category',
          label: 'Workforce SSO',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/sso-integrations',
          },      
          items: [ 
            'integration-guides/auth0',
            'integration-guides/aws',
            'integration-guides/azure-ad-hybrid',
            'integration-guides/azure-ad',
            'integration-guides/egnyte',
            'integration-guides/forgerock',
            'integration-guides/google-workspace',
            'integration-guides/idaptive',
            'integration-guides/keycloak',
            'integration-guides/microsoft-adfs',
            'integration-guides/okta-classic',
            'integration-guides/okta-mfa-classic',
            'integration-guides/okta-oie',
            'integration-guides/okta-oie-mfa',
            'integration-guides/okta-persistant-enrollment',
            'integration-guides/onelogin',
            'integration-guides/ping',
            'integration-guides/ping-scim-server',
            'integration-guides/ping-mfa',
            'integration-guides/shibboleth',
            'integration-guides/vmware-access-manager',
          ],
        },
        {
          type: 'category',
          label: 'Zero Trust (ZTA)',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'integration-guides/zero-trust',
          },      
          items: [ 
            'integration-guides/palo-alto-prisma-access',
            'integration-guides/zscaler',
          ],
        },

      ],
      
    },
    {
      type: 'category',
      label: 'DevOps',
      collapsed: true,  
      link: {
        type: 'doc',
        id: 'devops/secure-devops',
      },         
      items: [ 
        'devops/ssh-support',
        'devops/git-commit-signing',
      ],
    },
    {
      type: 'html',
      value: '<hr>',
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: false,         
      items: [ 
        'release-notes/release-notes-main', 
        'faq',
        'glossary',
        'get-support',
      ],
    },


  ],

  releaseNotesSidebar: [
    {
      type: 'category',
      label: 'Release Notes',  
      link: {
        type: 'doc',
        id: 'release-notes/release-notes-main',
      },
      collapsible: false,    
      items: [ 
        'release-notes/v2-78-0',

        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',
        'release-notes/v2-74-0', 
        'release-notes/v2-73-1',
        'release-notes/v2-73-0',
        'release-notes/v2-72-3',
        'release-notes/v2-72-2',
        'release-notes/v2-72-0',
        'release-notes/v2-71-0',
      ],
    },    
  ],


};

module.exports = sidebars;
