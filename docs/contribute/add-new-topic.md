---
title: "Add new content"
id: add-new-topic
description: ""
slug: /add-new-topic
keywords: 
 - faq
 - help
pagination_next: contribute/create-pull-request
pagination_prev: null
last_update: 
   date: 07/18/2023
   author: Patricia McPhee
draft: false
doc_type: overview
displayed_sidebar: contributorGuideSidebar
---

<!-- Reference links -->
[style-guide]: ./style-guide.md
[markdown]: ./markdown-reference.md
[contributor]: ./contribute.md
[site]: https://docs.beyondidentity.com/
[issues]: https://github.com/gobeyondidentity/customer-docs/issues
[repo]: https://github.com/gobeyondidentity/customer-docs
[pr]: https://github.com/gobeyondidentity/customer-docs/pulls
[enhancements]: https://github.com/gobeyondidentity/customer-docs/issues/new?assignees=&labels=%F0%9F%8C%9F+enhancement&projects=&template=enhancement.yml
[get-started]: ./get-started.md


Make sure to consult with the Sr. Technical Writer when adding topics or want to propose changes to the content structure. 

The Sr. Technical Writer maintains the content's quality, reduces duplication, and provides a consistent user experience. They can also strategize how to deliver complex information—for example, adding an explainer video (<90 secs) can help with complex scenarios or issues.


1. Make sure you're back on the main (default) branch so you can sync your local working branch.

   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a working branch for your proposed changes. For example, **content-dev-faqs** or **update-visual-guidelines**.

   ```bash
   git checkout -b {your-branch-name}
   ```

3. Navigate to `/docs` and locate the subdirectory for your new topic.

4. Add the metadata (frontmatter).

   Keywords are optional but helpful. All other metadata is required.

   ```markdown
   ---
   title: Threat Dashboard
   id: threat-dashboard
   description: 'Learn how to identify users, passkeys and authentications that have displayed some degree of risk over the last 0-90 days. Risky entities are added to low, medium, and high groups based on their score from 0-100. You can filter the view of this dashboard and the accompanying table based on these groups. '
   slug: /threat-dashboard
   keywords: 
    - threat dashboard
   pagination_next: null
   pagination_prev: null
   last_update: 
      date: 07/26/2023  
      author: John Canneto  
   draft: false
   doc_type: overview
   displayed_sidebar: secureWorkforceSidebar
   ---
   ```

5. Add the new markdown file in the sidebar.js file.

   ```javascript
   {
     type: 'category',
     label: 'Foundations',  
     collapsed: false, 
     collapsible: false,     
     link: {
       type: 'doc',
       id: 'foundations/foundations',
     },  
     items: [ 
       'foundations/overview', 
       'foundations/architecture',
       'foundations/universal-passkeys',
       'foundations/authenticator-config',
       'foundations/api-endpoints',
       'foundations/passwordless-connections',
     ],
   },
   ```
   
   It's a best practice to add the markdown file early in the content development phase. Otherwise, you\'ll get an error when you run the command to build and review your content.

6. Create your content and run the following command to build and review your changes.

   ```bash
   yarn start
   ```

   This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server. If a browser window doesn't open, go to **http://localhost:3000/** to view your local changes. 

1. Perform a self-review of your markdown and make sure your changes or additions follow the [style guidelines](./style-guide.md).

1. Verify that the PR does not generate warnings or errors, such as broken links. If so, address them and ensure it builds without issues.
  
   ```bash
   npm run clear
   yarn build
   ```

7. When you're ready to submit a pull request, add your changes.

   ```bash
   git add --all
   ```

8. Commit your changes with a descriptive summary, for example, *Add clarity to the data table component usage examples*.

   ```bash
   git commit -m "short description of the change"
   ```

   Ensure that your commit message is a proper sentence. Refer to this [guide on writing good commit messages](https://cbea.ms/git-commit/).

   A properly formed git commit subject line should always be able to complete the following sentence:

   ***If applied, this commit will ....***

9. Publish, or push, your changes to the main repo for merging. 

   ```bash
   git push origin {your-branch-name}
   ```

1. [Create a pull request](./create-pull-request).