---
title: "Edit content (minor changes)"
id: edit-content-minor-changes
description: ""
slug: /edit-content-minor-changes
pagination_next: null
pagination_prev: null
last_update: 
   date: 07/26/2023
   author: Patricia McPhee
draft: false
doc_type: how-to
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


If you only need to fix a typo or clarify a sentence or section, this option is your best choice. It streamlines the process of reporting and correcting minor errors and omissions in the documentation.  

Despite all efforts, small grammar and spelling errors _do_ make their way into our published documents. While you can create GitHub issues to report mistakes, creating a PR to fix the issue is faster and easier when the option is available.

1. In the [repo][repo], navigate to the /docs folder and locate the file you want to edit. Then, select the pencil icon to edit the article. <br />

   ![GitHub Edit file icon](./images/github-edit-file.png)<br />

2. Change the date in the metadata and ensure the author is correct. Add any additional keywords if they are missing.

   Keywords are optional but helpful. All other metadata is required.

   :::note important
   The `author` metadata value is the Subject Matter Expert (Engineer, Developer, or Product Manager) rather than the Technical Writer.
   :::

   ```markdown
   ---
   title: Threat Dashboard
   id: threat-dashboard
   description: 'The threat dashboard provides easy-to-use and intuitive threat intelligence analytics. This new dashboard will help you identify users, passkeys, and authentications that have displayed some risk over the last 0-90 days. Risky entities are added to low, medium, and high groups based on their score from 0-100. You can filter the view of this dashboard and the accompanying table based on these groups.'
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

3. Make your changes to the content and choose the **Preview** tab to view your changes.<br />

   ![GitHub Preview changes](./images/github-preview-changes.png)<br />

   :::note important
   The **Preview** tab does not show any formatting. You cannot preview the formatting of your changes. 
   :::

4. When you're finished editing, scroll to the bottom of the page and propose your changes. <br />

   1. In the **Commit changes** area, enter a title and an optional description for your changes. The title will be the first line of the commit message. <br />

   2. Select the option to create a branch and then  **Propose changes** to commit your changes.<br />
   
     ![GitHub propose and commit changes](./images/github-commit-proposed-changes.png)<br />

5. Now that you've proposed and committed your changes, you need to ask the owners to review your changes. This is done using a pull request (PR).<br />

   Enter a title and a description for the PR, and then select **Create pull request**. You can select **Create a draft pull request** instead. The difference is that the reviewers are notified only when the PR is *Open* rather than *Draft*.<br />

   ![GitHub propose and commit changes](./images/github-open-pull-request.png)


That's it! Team members will review your PR and merge it when approved. You may get feedback requesting changes.

<div class="demoContainer"><iframe src="https://app.supademo.com/embed/clk7fd03gua59zgx6kvjhjj84" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen class="iframeContainer"></iframe></div>

