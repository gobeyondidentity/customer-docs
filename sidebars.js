

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    {
      type: 'category',
      label: 'Release Notes',  
      collapsed: false, 
      collapsible: false,  
/*      link: {
        type: 'doc',
        id: 'release-notes/release-notes-main',
      }, */
      items: [ 
        'release-notes/v2-80-0',
        'release-notes/v2-79-0',
        'release-notes/v2-78-0',
        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',
        'release-notes/v2-74-0',
/*        {
          type: 'category',
          label: 'v2.73.0 • Jan 27 2023',
          collapsed: false,
          collapsible: false,   
          link: {
            type: 'doc',
            id: 'release-notes/v2-73-0',
          },      
     
              items: [ 
                'release-notes/v2-73-1',

              ],
            },
            {
              type: 'category',
              label: 'v2.72.0 • Jan 13 2023',
              collapsed: false, 
              collapsible: false,  
              link: {
                type: 'doc',
                id: 'release-notes/v2-72-0',
              },      
         
                  items: [ 
                    'release-notes/v2-72-1',
                    'release-notes/v2-72-2',
                    'release-notes/v2-72-3',
                  ],
                },
          
        'release-notes/v2-71-0',
        'release-notes/v2-70-0',
        */
      ],
    },   

    'glossary',

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
        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',
      ],
    },    
  ],
*/


  /*
  contributorSidebar: [
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
