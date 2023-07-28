---
title: "Site organization and files"
id: site-organization-and-files
description: ""
slug: /site-organization-and-files
pagination_next: contribute/docs-site-branches
pagination_prev: contribute/when-to-contribute
last_update: 
   date: 07/18/2023
   author: Patricia McPhee
draft: false
doc_type: reference
displayed_sidebar: contributorGuideSidebar
---



## Content files

- `/docs/` - Contains the Markdown files for the docs. Customize the order of the docs sidebar in `sidebars.js`.

  - `/docs/images` - Images used in the documentation.

  - `/docs/includes` - Reusable content such as feature descriptions, notes, common steps, and so on.

- `versioned_docs` - Contains the markdown files for the previous supported versions (v2.83 and v2.84).

- `versioned_sidebars` - Contains the sidebar files for the previous versions.

- `/sidebar.js` - Specify the order of documents in the sidebar. If you have a new file to add to the site, modify this file.

- `static/api` - Contains the API documentation for v2.

## Site config files

- `/docusaurus.config.js` - A config file containing the site configuration.

- `/src/` - Non-documentation files like pages, custom React components, or
Docaurus native components.

   - `/src/components` - Custom react components used for the website or included in the documentation, such as the Try It Out!

   - `/src/pages` - Any files within this directory will be converted into a website page. Currently, we don't use this directory.

   - `/src/theme` - Docusausus native components such as the sidebar, content page, and content page footer designs.

- `/static/` - Static directory. Any contents inside here will be copied into the root of the final `build` directory.

   - `/static/img` - Website images such as Beyond Identity logos and other assets.

- `/package.json` - A Docusaurus website is a React app. You can install and use any npm packages you like in them.