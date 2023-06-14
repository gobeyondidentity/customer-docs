

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    {
      type: 'category',
      label: 'Welcome',  
      collapsed: false, 
      collapsible: false,     
      items: [ 
        'how-it-works', 
        'sign-in-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Get Started',  
      link: {
        type: 'doc',
        id: 'get-started/get-started',
      },
      collapsed: false, 
      collapsible: false,      
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
      collapsed: false, 
      collapsible: false,   
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
            'platform/configure-rbac', 

            'platform/configure-identity-providers',
            'platform/configure-shared-credentials-windows-roaming-profile',
            'platform/configure-admin-console-login-options',
            'platform/revoke-access-to-device', 
            'platform/reset-credentials',
            'platform/customize-tenant',


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
            'platform/manage-passkeys',
           // 'platform/manage-authenticator-updates',  what's the difference between this topic and the next one (Manage updates and notifications)?
            'platform/manage-updates-notifications',
            'platform/manage-roaming-authentication',
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
      collapsed: false, 
      collapsible: false,   
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
      label: 'Policy',
      collapsed: false, 
      collapsible: false,    
      link: {
        type: 'doc',
        id: 'policy/policy',
      },   
      customProps: {
        badges: ['new', 'green'],
        featured: true,
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
            'policy/authentication-requirement-policy',
            'policy/antivirus-policy',
            'policy/build-release-policy',   
            'policy/detect-running-processes',      
            'policy/firewall-policy',
            'policy/jailbroken-ios-policy',
            'policy/limit-number-registered-devices',

            'policy/rooted-android-policy',
            'policy/security-software-policy',

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
      label: 'Data & Events',
      collapsed: false, 
      collapsible: false,   
      link: {
        type: 'doc',
        id: 'data-events/data-events',
      },         
      items: [ 
        'data-events/export-windows-event-logs', 
        'data-events/collect-local-logs-endpoints', 
        'data-events/view-event-details',
        'data-events/request-access-to-tenant-or-user-data',
      ],
    },
    /*
    {
      type: 'category',
      label: 'Integration Guides',
      collapsed: false, 
      collapsible: false,   
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
*/
    {
      type: 'category',
      label: 'DevOps',
      collapsed: false, 
      collapsible: false,   
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
      type: 'category',
      label: 'Resources',
      collapsed: false, 
      collapsible: false,         
      items: [ 
        'faq',
        'glossary',
        'get-support',
        'release-notes/release-notes-main', 
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
        'release-notes/v2-81-0',
        'release-notes/v2-80-0',
        'release-notes/v2-79-0',
        'release-notes/v2-78-0',
        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',
      ],
    },    
  ],


  /*
  contributorGuideSidebar: [
    {
      type: 'category',
      label: 'Contributor's Guide',  
      link: {
        type: 'doc',
        id: 'release-notes/release-notes-main',
      },
      collapsible: false,    
      items: [ 
        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',
      ],
    },    
  ],
*/

};

module.exports = sidebars;
