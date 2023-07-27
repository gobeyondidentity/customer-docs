

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    'intro',
    'platform/admin-console',
    'threat-dashboard',

/*
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
        'platform/architecture',
        'platform/admin-console',
      ],
    },  
*/    

/*
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
        'desktop-login/windows-desktop-login',
        'desktop-login/mac-desktop-login',
        'desktop-login/desktop-login-troubleshooting',
      ],
    },  
*/    

  ],

  /*
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
*/


  contributorGuideSidebar: [
    {
      type: 'category',
      label: 'Contribute',  
      collapsible: false,  
      collapsed: false,  
      link: {
        type: 'doc',
        id: 'contribute/contribute',
      },
      items: [ 

        'contribute/when-to-contribute',
        'contribute/contribute-get-started',
        'contribute/site-organization-and-files',
        'contribute/docs-site-branches',
        'contribute/best-practices',
        {
          type: 'category',
          label: 'Edit content',
          collapsed: true, 
          collapsible: false,           
           items: [    
            {
              type: 'doc',
              id: 'contribute/edit-content-minor-changes',
              label: 'Minor changes',
            },
            {
              type: 'doc',
              id: 'contribute/edit-content-significant-changes',
              label: 'Significant changes',
            }, 
         ],
        },
        'contribute/add-new-topic',
        'contribute/create-pull-request',        
      ],
    },    
    'contribute/markdown-reference',
    'contribute/style-guide',
    'contribute/release-notes-guide',
  ],



};

module.exports = sidebars;
