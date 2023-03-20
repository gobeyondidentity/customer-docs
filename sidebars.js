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
    'welcome',
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
      label: 'Web Login',
      collapsed: true,  
      link: {
        type: 'doc',
        id: 'web-login/web-login',
      }, 
      items: [
        
        {
          type: 'category',
          label: 'Open Integration',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'web-login/open-integrations/open-integrations',
          },
          items: [
            {
              type: 'category',
              label: 'OIDC',
              link: {
                type: 'doc',
                id: 'web-login/open-integrations/oidc',
              },
              items: [
                
              ],
            },
            'web-login/open-integrations/saml', 
            'web-login/open-integrations/ws-fed',
          ],
        },
        {
          type: 'category',
          label: 'SSO Integrations',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'web-login/sso-integrations/sso-integrations',
          },      
          items: [ 


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
      'integration-guides/aws-cognito',
      'integration-guides/azure-ad', 
      'integration-guides/azure-ad-hybrid', 
      'integration-guides/active-directory-only',
      'integration-guides/crowdstrike', 
      'integration-guides/forgerock',
      'integration-guides/google-workspace',
      'integration-guides/jamf', 
      'integration-guides/kandji', 
      'integration-guides/microsoft-intune', 
      'integration-guides/okta-oidc',
      'integration-guides/okta',
      'integration-guides/ping',
      'integration-guides/vmware-airwatch',
      'integration-guides/zscaler',
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
        'devops/aws-commit',
        'devops/azure-devops',
        'devops/bitbucket',
        {
          type: 'category',
          label: 'GitHub',
          collapsed: true,  
          link: {
            type: 'doc',
            id: 'devops/github',
          },      
          items: [ 
            'devops/devops-git-commit-signing',
          ],
        },

        'devops/gitlab',

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
        id: 'release-notes/devops-release-notes',
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
