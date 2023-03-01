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
      label: 'Secure Workforce',
      link: {
        type: 'doc',
        id: 'workforce/secure-workforce-guides',
      },         
      items: [ 'workforce/how-it-works', 
      'workforce/sign-in-workflow',
      'workforce/supported-platforms',

      'workforce/release-notes', 
      ],
    },
    {
      type: 'category',
      label: 'Platform',
      link: {
        type: 'doc',
        id: 'workforce/platform/platform',
      },      
      items: [ 
        {
          type: 'category',
          label: 'Admin Console',
          link: {
            type: 'doc',
            id: 'workforce/platform/admin-console',
          },      
          items: [ 
            'workforce/platform/configure-rbac', 
            'workforce/platform/revoke-access-to-device', 
            'workforce/platform/reset-credentials',
            'workforce/how-to-guides/define-policies', 
            'workforce/how-to-guides/view-policy-match-details', 
            'workforce/tenant-logo-requirements',
          ],
        },
        {
          type: 'category',
          label: 'Platform Authenticator',
          link: {
            type: 'doc',
            id: 'workforce/platform/platform-authenticator',
          },      
          items: [ 
            'workforce/platform/authenticator-versions',
            'workforce/platform/manage-passkeys',
            'workforce/platform/manage-authenticator-updates',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Web Login',
      link: {
        type: 'doc',
        id: 'workforce/web-login/web-login',
      }, 
      items: [
        
        {
          type: 'category',
          label: 'Open Integration',
          link: {
            type: 'doc',
            id: 'workforce/web-login/open-integrations/open-integrations',
          },
          items: [
            {
              type: 'category',
              label: 'OIDC',
              link: {
                type: 'doc',
                id: 'workforce/web-login/open-integrations/oidc',
              },
              items: [
                
              ],
            },
            'workforce/web-login/open-integrations/saml', 
            'workforce/web-login/open-integrations/ws-fed',
          ],
        },
        {
          type: 'category',
          label: 'SSO Integrations',
          link: {
            type: 'doc',
            id: 'workforce/web-login/sso-integrations/sso-integrations',
          },      
          items: [ 


          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Desktop Login',
      link: {
        type: 'doc',
        id: 'workforce/desktop-login/desktop-login',
      },         
      items: [ 
        'workforce/desktop-login/configure-shared-passkeys', 
        'workforce/desktop-login/windows-security', 
        'workforce/desktop-login/obtain-client-id',   
      ],
    },
    {
      type: 'category',
      label: 'Policy',
      link: {
        type: 'doc',
        id: 'workforce/policy/policy-integrations',
      },      
      items: [ 
        
        {
          type: 'category',
          label: 'EDR',
          link: {
            type: 'doc',
            id: 'workforce/policy/edr-integrations',
          },      
          items: [ 
             ],
        },
        {
          type: 'category',
          label: 'UEM/MDM',
          link: {
            type: 'doc',
            id: 'workforce/policy/mdm',
          },      
          items: [ 

          ],
        },
        {
          type: 'category',
          label: 'Zero Trust',
          link: {
            type: 'doc',
            id: 'workforce/policy/zero-trust',
          },      
          items: [ 
		         
	        ],
        },

      ],
    },
    {
      type: 'category',
      label: 'Data & Events',
      link: {
        type: 'doc',
        id: 'workforce/data-events/data-events',
      },         
      items: [ 'workforce/data-events/export-windows-event-logs', 
      'workforce/data-events/collect-local-logs-endpoints', 
      ],
    },
    {
      type: 'category',
      label: 'Integration Guides',
      link: {
        type: 'doc',
        id: 'workforce/integration-guides/integration-guides',
      },         
      items: [  
      'workforce/integration-guides/aws-cognito',
      'workforce/integration-guides/azure-ad', 
      'workforce/integration-guides/azure-ad-hybrid', 
      'workforce/integration-guides/active-directory-only',
      'workforce/integration-guides/crowdstrike', 
      'workforce/integration-guides/forgerock',
      'workforce/integration-guides/google-workspace',
      'workforce/integration-guides/jamf', 
      'workforce/integration-guides/kandji', 
      'workforce/integration-guides/microsoft-intune', 
      'workforce/integration-guides/okta-oidc',
      'workforce/integration-guides/okta',
      'workforce/integration-guides/ping',
      'workforce/integration-guides/vmware-airwatch',
      'workforce/integration-guides/zscaler',
      ],
    },
    {
      type: 'category',
      label: 'How-to\'s',
      link: {
        type: 'doc',
        id: 'workforce/how-to-guides/how-to-guides',
      },         
      items: [  
        
        'workforce/how-to-guides/third-party-cookies-google',
      ],
    },

    'faq',


  ],

  devOpsSidebar: [
    'devops/secure-devops',
    'devops/devops-release-notes',
    'devops/devops-git-commit-signing',


  ],
  customerSidebar: [

  ],
};

module.exports = sidebars;
