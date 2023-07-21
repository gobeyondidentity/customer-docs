---
title: "Edit content (significant changes)"
id: edit-content-significant-changes
description: ""
slug: /edit-content-significant-changes
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


If you need to make substantial changes, add an image or add a section to a topic. 

On the other hand, if your change is minor that doesn't involve uploading a file or making changes to multiple files, follow the [Edit content - minor change](./edit-content-minor-changes) instructions instead.

1. Make sure you're back on the main (default) branch so you can sync your local working branch.

   ```bash
   git checkout main
   git pull origin main
   ```

2. Create a working branch for your proposed changes. For example, **content-dev-faqs** or **update-visual-guidelines**.

   ```bash
   git checkout -b {your-branch-name}
   ```

3. Navigate to `/docs` and locate the topic you want to change. 

4. Change the date in the metadata and ensure the title, description, and author are correct. Add any additional keywords if they are missing.

   ```markdown
   ---
   title: Getting Started with React
   sidebar_label: React
   id: get-started-react
   description: 'Create a free Beyond Identity developer account and connect it to our sample application. This application demonstrates common workflows, like creating realms, applications, and passkeys (public-private key pairs) for user authentication.'
   slug: /get-started-react
   keywords: 
    - get started
    - react
   pagination_next: null
   pagination_prev: null
   last_update: 
      date: 06/01/2023
      author: Patricia McPhee
   draft: false
   doc_type: how-to
   displayed_sidebar: mainSidebar
   ---
   ```

4. Make your changes to the content and run the following command to build and review your changes.

   ```bash
   yarn start
   ```

   This command starts a local development server and opens a browser window. Most changes are reflected live without having to restart the server. If a browser window doesn\'t open, go to **http://localhost:3000/** to view your local changes. 

1. Perform a self-review of your markdown and make sure your changes or additions follow the [style guidelines](./style-guide.md).

1. Verify that the PR won't generate warnings or errors, such as broken links. If so, address them and ensure it builds without issues.
  
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