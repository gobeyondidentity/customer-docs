

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  secureWorkforceSidebar: [
    {
      type: 'category',
      label: 'Release Notes',  
      collapsed: false, 
      collapsible: false,  
      items: [ 
        'release-notes/v2-80-0',
        'release-notes/v2-79-0',
        'release-notes/v2-78-0',
        'release-notes/v2-77-0',
        'release-notes/v2-76-0',
        'release-notes/v2-75-0',

      ],
    },   

    'glossary',

  ],

};

module.exports = sidebars;
