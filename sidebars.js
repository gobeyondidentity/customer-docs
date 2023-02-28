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
      label: 'Secure Workforce Guides',
      link: {
        type: 'doc',
        id: 'workforce/secure-workforce-guides',
      },         
      items: [ 'workforce/how-it-works', 
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
            'workforce/platform/authentication-rbac' ],
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
                'workforce/web-login/open-integrations/okta-oidc',
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
            'workforce/web-login/sso-integrations/forgerock',
            'workforce/web-login/sso-integrations/google-workspace',
            'workforce/web-login/sso-integrations/okta',
            'workforce/web-login/sso-integrations/ping',
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
      items: [ 'workforce/desktop-login/azure-ad', 'workforce/desktop-login/azure-ad-hybrid', 'workforce/desktop-login/active-directory-only' ],
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
            id: 'workforce/policy/edr/edr-integrations',
          },      
          items: [ 
            'workforce/policy/edr/crowdstrike', ],
        },
        {
          type: 'category',
          label: 'UEM/MDM',
          link: {
            type: 'doc',
            id: 'workforce/policy/mdm/mdm',
          },      
          items: [ 
        'workforce/policy/mdm/microsoft-intune', 
        'workforce/policy/mdm/jamf', 
        'workforce/policy/mdm/kandji', 
        'workforce/policy/mdm/vmware-airwatch' 
          ],
        },
        {
          type: 'category',
          label: 'Zero Trust',
          link: {
            type: 'doc',
            id: 'workforce/policy/zero-trust/zero-trust',
          },      
          items: [ 
		        'workforce/policy/zero-trust/zscaler' 
	        ],
        },

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
