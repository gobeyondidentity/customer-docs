

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Platform Overview',
      collapsed: false, 
      collapsible: false,        
      items: [ 
        'platform/architecture',
        

      ],
    },
    'platform/admin-console',
    'policy/policy',
    

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
