---
title: "Edit content (minor changes)"
id: edit-content-minor-changes
description: ""
slug: /edit-content-minor-changes
pagination_next: null
pagination_prev: null
last_update: 
   date: 08/03/2023
   author: Patricia McPhee
draft: false
doc_type: how-to
displayed_sidebar: contributorGuideSidebar
---

import OpenPullRequestWindow from './_open-pull-request-window.mdx';

<!-- Reference links -->
[style-guide]: ./style-guide.md
[markdown]: ./markdown-reference.md
[contributor]: ./contribute.md
[site]: https://docs.beyondidentity.com/
[issues]: https://github.com/gobeyondidentity/customer-docs/issues
[pr]: https://github.com/gobeyondidentity/customer-docs/pulls
[enhancements]: https://github.com/gobeyondidentity/customer-docs/issues/new?assignees=&labels=%F0%9F%8C%9F+enhancement&projects=&template=enhancement.yml
[get-started]: ./get-started.md


If you only need to fix a typo or clarify a sentence or section, this option is your best choice. It streamlines the process of reporting and correcting minor errors and omissions in the documentation.  

Despite all efforts, small grammar and spelling errors _do_ make their way into our published documents. While you can create GitHub issues to report mistakes, creating a PR to fix the issue is faster and easier when the option is available.

:::caution
If you have changes other than fixing a typo or clarifying a sentence or two, it's suggested to follow the instructions for [making significant changes](edit-content-significant-changes.md).
:::

## Prerequisites

A GitHub account and access to the repo.

## 1. Propose your changes

1. In the repo, navigate to the `/docs` folder and locate the file you want to edit. Then, select the pencil icon to edit the article. <br />

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

   2. Select the option to create a branch and then  **Propose changes** to commit your changes. 

     :::tip
     If you select **Create a new branch**, You can change the name of it, or you can leave the default. Leaving the default indicates where the edit came from, i.e., directly from the repo vs. working locally and pushing your changes.
     :::
   
     ![GitHub propose and commit changes](./images/github-commit-proposed-changes.png)<br />

## 2. Create a Pull Request

Now that you've proposed and committed your changes, you must ask the owners to review your changes, which is done using a pull request (PR). 

1. Go to the main page of the repo, and in the yellow banner, click **Compare & pull request** to create a pull request for the associated branch.  <br />

   ![Compare and pull request](./images/github-compare-and-pull-request.png)

1. In the Open a pull request window, do the following:

   1. Select the branch.  

     :::note important  
     Always open all pull requests against the `main` branch unless it's for the upcoming next release. In that case, the PR should be opened against the `docs-staging` branch. In our example below, the branch that you are currently in is `active-development` and you want to merge it into the `main` branch.
     :::

   1. Ensure that the summary title is short but descriptive. If it is associated with a JIRA ticket, append it to the beginning in brackets, for example, **[MD-111] mac desktop login**. 

   1. Describe your changes. For more details, see [PR descriptions](./create-pull-request#pr-descriptions).

   1. In the **Reviewers** section, in the right panel, click the cog icon and select designated reviewers—for example, another PM, a developer, and the technical writer. 

   1. Assign the PR to a specific reviewer if they are the main reviewer.  

   1. Select **Create pull request**.  

     :::tip
     If the pull request is a **work in progress** and not ready to be reviewed, select the **[Create draft pull request](https://github.blog/2019-02-14-introducing-draft-pull-requests/#tag-your-work-in-progress)**. The difference is that the reviewers only get notified when the PR is *Open* rather than *Draft*.
     :::

   ![Screenshot of the Open a pull request window in GitHub highlighting a) the comparing branches selected, b) pull request summary, c) description of changes, 4) select reviewers, 5) select assignees, and 6) click the Create pull request button.](./images/open-pull-request.png)

That's it! Team members will review your PR and merge it when approved. You may get feedback requesting changes.

<details className="detailsContainer">
  <summary className="summaryHeading">Interactive Walkthrough!</summary>
  <div>
    <div class="demoContainer"><iframe src="https://app.supademo.com/embed/clk7fd03gua59zgx6kvjhjj84" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen class="iframeContainer"></iframe></div>

  </div>
</details>



