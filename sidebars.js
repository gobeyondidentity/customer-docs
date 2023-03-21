/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [

    {
      type: 'category',
      label: 'Get Started',  
      link: {
        type: 'doc',
        id: 'get-started',
      },
      collapsed: true, 
      collapsible: true,      
      items: [ 
        'how-it-works', 
        'sign-in-workflow',
        'supported-platforms',
        'release-notes', 
        'faq',
        'glossary',
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
            'platform/configure-rbac', 
            'platform/revoke-access-to-device', 
            'platform/reset-credentials',
            'view-policy-match-details', 
            'tenant-logo-requirements',
          ],
        },
        {
          type: 'category',
          label: 'Platform Authenticator',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'platform/platform-authenticator',
          },      
          items: [ 
            'platform/authenticator-versions',
            'platform/manage-passkeys',
            'platform/manage-authenticator-updates',
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
      label: 'Policy',
      collapsed: true, 
      collapsible: true,   
      link: {
        type: 'doc',
        id: 'policy/policy-integrations',
      },      
      items: [ 
        'policy/define-policies', 
        

      ],
    },
    {
      type: 'category',
      label: 'Data & Events',
      collapsed: true,  
      link: {
        type: 'doc',
        id: 'data-events/data-events',
      },         
      items: [ 'data-events/export-windows-event-logs', 
      'data-events/collect-local-logs-endpoints', 
      ],
    },
    {
      type: 'category',
      label: 'Integration Guides',
      collapsed: true, 
      link: {
        type: 'doc',
        id: 'integration-guides/integration-guides',
        
      },         
      items: [  
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
            'devops/devops-git-commit-signing',
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

/*    {
      type: 'category',
      label: 'How-to\'s',
      link: {
        type: 'doc',
        id: 'how-to-guides',
      },         
      items: [  
        
        'third-party-cookies-google',
      ],
    },
*/


  ],

  releaseNotesSidebar: [
    {
      type: 'category',
      label: 'Releases',  
      link: {
        type: 'doc',
        id: 'release-notes/release-notes-main',
      },
      collapsible: false,    
      items: [ 
        'release-notes/v2-76-0',
      ],
    },    
  ],

/*  devOpsSidebar: [
    'devops/secure-devops',
    'devops/devops-release-notes',
    'devops/aws-commit',
    'devops/azure-devops',
    'devops/bitbucket',
    'devops/github',
    'devops/gitlab',
    'devops/devops-git-commit-signing',


  ],
  */
  customerSidebar: [

  ],
};

module.exports = sidebars;
